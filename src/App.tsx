import React, { useState, useEffect, useMemo } from 'react';
import { 
  Questao, 
  QuestaoSimulado, 
  AlternativaEmbaralhada, 
  RespostaAluno, 
  ResultadoSimulado, 
  EstatisticaHabilidade 
} from './types';
import { BANCO_QUESTOES, sortearQuestoesSimulado } from './data/questoes';
import { HABILIDADES_INFO, obterDicaHabilidade } from './data/habilidadesDicas';
import { Header } from './components/Header';
import { TelaInicial } from './components/TelaInicial';
import { TelaSimulado } from './components/TelaSimulado';
import { TelaResultado } from './components/TelaResultado';

const STORAGE_KEY_HISTORICO = 'simulado_merito_historico_v1';
const STORAGE_KEY_NOME = 'simulado_merito_nome_aluno_v1';
const STORAGE_KEY_TEMPO = 'simulado_merito_tempo_minutos_v1';

export default function App() {
  const [tela, setTela] = useState<'inicio' | 'simulado' | 'resultado'>('inicio');

  // Configurações do aluno
  const [nomeAluno, setNomeAluno] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY_NOME) || '';
  });

  const [tempoSelecionadoMinutos, setTempoSelecionadoMinutos] = useState<number>(() => {
    const salvo = localStorage.getItem(STORAGE_KEY_TEMPO);
    return salvo ? parseInt(salvo, 10) : 40;
  });

  // Histórico salvo no navegador
  const [historico, setHistorico] = useState<ResultadoSimulado[]>(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY_HISTORICO);
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  // Estado do simulado ativo
  const [questoesSimulado, setQuestoesSimulado] = useState<QuestaoSimulado[]>([]);
  const [respostas, setRespostas] = useState<RespostaAluno>({});
  const [marcadasRevisao, setMarcadasRevisao] = useState<Set<number>>(new Set());
  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState<number>(0);
  const [tempoRestanteSegundos, setTempoRestanteSegundos] = useState<number>(40 * 60);
  const [tempoTotalSegundos, setTempoTotalSegundos] = useState<number>(40 * 60);

  // Resultado a exibir na tela de resultado
  const [resultadoAtual, setResultadoAtual] = useState<ResultadoSimulado | null>(null);

  // Sincroniza preferências no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_NOME, nomeAluno);
  }, [nomeAluno]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TEMPO, tempoSelecionadoMinutos.toString());
  }, [tempoSelecionadoMinutos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_HISTORICO, JSON.stringify(historico));
  }, [historico]);

  // Função para embaralhar um array genérico
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  };

  // Iniciar Simulado
  const handleIniciarSimulado = () => {
    const questoesSorteadas = sortearQuestoesSimulado(BANCO_QUESTOES);

    const letras: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];

    const preparadas: QuestaoSimulado[] = questoesSorteadas.map((q, idx) => {
      // Cria pares [indiceOriginal, texto]
      const pares = q.alternativas.map((texto, originalIdx) => ({
        texto,
        indiceOriginal: originalIdx,
      }));

      // Embaralha as alternativas mantendo o vínculo com o índice original
      const paresEmbaralhados = shuffleArray(pares);

      const alternativasEmbaralhadas: AlternativaEmbaralhada[] = paresEmbaralhados.map((p, altIdx) => ({
        letra: letras[altIdx],
        texto: p.texto,
        indiceOriginal: p.indiceOriginal,
      }));

      return {
        questao: q,
        numero: idx + 1,
        alternativasEmbaralhadas,
      };
    });

    setQuestoesSimulado(preparadas);
    setRespostas({});
    setMarcadasRevisao(new Set());
    setIndiceQuestaoAtual(0);
    const totalSegundos = tempoSelecionadoMinutos * 60;
    setTempoTotalSegundos(totalSegundos);
    setTempoRestanteSegundos(totalSegundos);
    setTela('simulado');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Selecionar alternativa
  const handleSelecionarAlternativa = (
    numeroQuestao: number,
    indiceOriginal: number,
    letra: "A" | "B" | "C" | "D"
  ) => {
    setRespostas(prev => ({
      ...prev,
      [numeroQuestao]: {
        indiceOriginalEscolhido: indiceOriginal,
        letraEscolhida: letra,
      },
    }));
  };

  // Alternar marcação para revisar
  const handleAlternarMarcadaRevisao = (numeroQuestao: number) => {
    setMarcadasRevisao(prev => {
      const novo = new Set(prev);
      if (novo.has(numeroQuestao)) {
        novo.delete(numeroQuestao);
      } else {
        novo.add(numeroQuestao);
      }
      return novo;
    });
  };

  // Finalizar e corrigir o simulado
  const handleFinalizarSimulado = () => {
    const tempoGasto = tempoTotalSegundos - tempoRestanteSegundos;

    let acertosTotal = 0;
    let acertosPT = 0;
    let totalPT = 0;
    let acertosMAT = 0;
    let totalMAT = 0;

    // Estatísticas por habilidade
    const mapaHabilidades: Record<string, { total: number; acertos: number; disciplina: "Portugues" | "Matematica" }> = {};

    questoesSimulado.forEach(q => {
      const isPT = q.questao.disciplina === "Portugues";
      if (isPT) totalPT++;
      else totalMAT++;

      if (!mapaHabilidades[q.questao.habilidade]) {
        mapaHabilidades[q.questao.habilidade] = {
          total: 0,
          acertos: 0,
          disciplina: q.questao.disciplina,
        };
      }
      mapaHabilidades[q.questao.habilidade].total += 1;

      const resp = respostas[q.numero];
      const acertou = resp !== undefined && resp.indiceOriginalEscolhido === q.questao.correta;

      if (acertou) {
        acertosTotal++;
        if (isPT) acertosPT++;
        else acertosMAT++;
        mapaHabilidades[q.questao.habilidade].acertos += 1;
      }
    });

    const totalQuestoes = questoesSimulado.length;
    // Cálculo proporcional da nota na escala de 0.0 a 10.0
    // Em prova de 20 questões: cada questão vale 0,5 pt (20 * 0.5 = 10.0)
    // Em prova de 12 questões: (acertos / 12) * 10
    const notaFinalCalculada = totalQuestoes > 0
      ? Number(((acertosTotal / totalQuestoes) * 10).toFixed(1))
      : 0;

    const atingiuMinimo = notaFinalCalculada >= 7.0;
    const pontosFaltantes = atingiuMinimo ? 0 : Number((7.0 - notaFinalCalculada).toFixed(1));

    const habilidadesStats: EstatisticaHabilidade[] = Object.entries(mapaHabilidades).map(
      ([habilidade, dados]) => {
        const porcentagem = Math.round((dados.acertos / dados.total) * 100);
        return {
          habilidade,
          disciplina: dados.disciplina,
          totalQuestoes: dados.total,
          acertos: dados.acertos,
          porcentagem,
          dicaEstudo: obterDicaHabilidade(habilidade),
        };
      }
    );

    // Prioridades de estudo (< 60%)
    const prioridadesEstudo = habilidadesStats.filter(h => h.porcentagem < 60);

    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const resultado: ResultadoSimulado = {
      id: `sim-${Date.now()}`,
      dataIso: agora.toISOString(),
      dataFormatada,
      nomeAluno: nomeAluno.trim(),
      notaFinal: notaFinalCalculada,
      atingiuMinimo,
      pontosFaltantes,
      acertosTotal,
      totalQuestoes,
      acertosPortugues: acertosPT,
      totalPortugues: totalPT,
      acertosMatematica: acertosMAT,
      totalMatematica: totalMAT,
      tempoGastoSegundos: Math.max(tempoGasto, 1),
      tempoLimiteMinutos: tempoSelecionadoMinutos,
      questoesSimulado,
      respostas,
      habilidadesStats,
      prioridadesEstudo,
    };

    setResultadoAtual(resultado);
    setHistorico(prev => [resultado, ...prev]);
    setTela('resultado');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Voltar ao início
  const handleVoltarInicio = () => {
    if (tela === 'simulado') {
      const confirma = window.confirm("Você ainda está no simulado. Se sair agora, as respostas desta tentativa serão perdidas. Deseja sair?");
      if (!confirma) return;
    }
    setTela('inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ver resultado antigo do histórico
  const handleVerResultadoAntigo = (antigo: ResultadoSimulado) => {
    setResultadoAtual(antigo);
    setTela('resultado');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Limpar histórico
  const handleLimparHistorico = () => {
    const confirma = window.confirm("Deseja apagar todas as tentativas salvas no histórico?");
    if (confirma) {
      setHistorico([]);
      localStorage.removeItem(STORAGE_KEY_HISTORICO);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header
        emSimulado={tela === 'simulado'}
        onVoltarInicio={handleVoltarInicio}
      />

      <main className="flex-1 pb-16">
        {tela === 'inicio' && (
          <TelaInicial
            nomeAluno={nomeAluno}
            setNomeAluno={setNomeAluno}
            tempoSelecionadoMinutos={tempoSelecionadoMinutos}
            setTempoSelecionadoMinutos={setTempoSelecionadoMinutos}
            onIniciarSimulado={handleIniciarSimulado}
            historico={historico}
            onVerResultadoAntigo={handleVerResultadoAntigo}
            onLimparHistorico={handleLimparHistorico}
            totalQuestoesBanco={BANCO_QUESTOES.length}
          />
        )}

        {tela === 'simulado' && questoesSimulado.length > 0 && (
          <TelaSimulado
            questoes={questoesSimulado}
            respostas={respostas}
            marcadasRevisao={marcadasRevisao}
            indiceAtual={indiceQuestaoAtual}
            tempoRestanteSegundos={tempoRestanteSegundos}
            tempoTotalSegundos={tempoTotalSegundos}
            onSelecionarAlternativa={handleSelecionarAlternativa}
            onAlternarMarcadaRevisao={handleAlternarMarcadaRevisao}
            onNavegarQuestao={setIndiceQuestaoAtual}
            onTickTempo={setTempoRestanteSegundos}
            onTempoEsgotado={handleFinalizarSimulado}
            onConfirmarEntrega={handleFinalizarSimulado}
          />
        )}

        {tela === 'resultado' && resultadoAtual && (
          <TelaResultado
            resultado={resultadoAtual}
            onRefazerSimulado={handleIniciarSimulado}
            onVoltarInicio={handleVoltarInicio}
          />
        )}
      </main>

      <footer className="no-print bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Simulado Mérito 2027 · Desenvolvido com foco pedagógico no 4º ano do Ensino Fundamental</span>
          <span>Edital 003/ColégioUnochapecó/2026</span>
        </div>
      </footer>
    </div>
  );
}
