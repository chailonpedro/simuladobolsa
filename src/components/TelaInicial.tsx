import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  BookOpen, 
  Calculator, 
  Award, 
  Trash2, 
  Eye, 
  HelpCircle, 
  CheckCircle2, 
  Target, 
  Sparkles,
  Flame,
  FileCheck2
} from 'lucide-react';
import { ResultadoSimulado, Disciplina, ModalidadeTreino } from '../types';
import { HABILIDADES_INFO } from '../data/habilidadesDicas';

interface TelaInicialProps {
  nomeAluno: string;
  setNomeAluno: (nome: string) => void;
  tempoSelecionadoMinutos: number;
  setTempoSelecionadoMinutos: (tempo: number) => void;
  onIniciarSimulado: () => void;
  onIniciarEstudoDirigido: (disciplina: Disciplina, habilidade: string) => void;
  historico: ResultadoSimulado[];
  onVerResultadoAntigo: (resultado: ResultadoSimulado) => void;
  onLimparHistorico: () => void;
  totalQuestoesBanco: number;
}

const TEMAS_PORTUGUES = [
  "Localização de informação explícita no texto",
  "Inferência e dedução",
  "Vocabulário e efeitos de sentido",
  "Organização textual e ideia principal",
  "Ortografia e acentuação",
  "Pontuação e conhecimentos linguísticos",
];

const TEMAS_MATEMATICA = [
  "Números, valor posicional e composição/decomposição",
  "Operações: adição, subtração, multiplicação e divisão",
  "Frações",
  "Grandezas e medidas",
  "Geometria",
  "Tabelas, gráficos e raciocínio lógico",
];

export const TelaInicial: React.FC<TelaInicialProps> = ({
  nomeAluno,
  setNomeAluno,
  tempoSelecionadoMinutos,
  setTempoSelecionadoMinutos,
  onIniciarSimulado,
  onIniciarEstudoDirigido,
  historico,
  onVerResultadoAntigo,
  onLimparHistorico,
  totalQuestoesBanco,
}) => {
  const [modalidade, setModalidade] = useState<ModalidadeTreino>('simulado');
  const [disciplinaTema, setDisciplinaTema] = useState<Disciplina>('Portugues');
  const [habilidadeSelecionada, setHabilidadeSelecionada] = useState<string>(TEMAS_PORTUGUES[0]);

  const handleTrocarDisciplina = (disc: Disciplina) => {
    setDisciplinaTema(disc);
    if (disc === 'Portugues') {
      setHabilidadeSelecionada(TEMAS_PORTUGUES[0]);
    } else {
      setHabilidadeSelecionada(TEMAS_MATEMATICA[0]);
    }
  };

  const infoHabilidadeAtual = HABILIDADES_INFO[habilidadeSelecionada];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Boas-vindas acolhedoras */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-100">
          <Award className="w-4 h-4" />
          <span>Edital 003/ColégioUnochapecó/2026 · Bolsa Mérito Estudantil</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Simulado Mérito 2027 - 5º ano
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Olá! Prepare-se com calma para a sua prova de bolsa. Treine com o simulado oficial completo ou pratique tópicos específicos no Estudo Dirigido!
        </p>
      </div>

      {/* Card explicativo sobre as regras do edital */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Como funciona a prova do edital</h2>
            <p className="text-sm text-slate-500">Regras oficiais de pontuação e critérios de avaliação</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900">20 Questões no Total</p>
              <p className="text-xs text-slate-600 mt-0.5">
                10 de Língua Portuguesa e 10 de Matemática (4 opções de múltipla escolha cada).
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Pontuação e Mínimo 7,0</p>
              <p className="text-xs text-slate-600 mt-0.5">
                Cada acerto vale 0,5 ponto (total 10,0). A nota mínima exigida para aprovação é 7,0.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
            <Calculator className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Critério de Desempate</p>
              <p className="text-xs text-slate-600 mt-0.5">
                Em caso de empate na nota final, desempata quem tiver maior nota em Português.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Painel de Configuração com Abas: Simulado Oficial vs Estudo Dirigido */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Seletor de Modalidade */}
        <div className="space-y-3">
          <label className="block text-base font-bold text-slate-900">
            Escolha o formato do seu treino:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setModalidade('simulado')}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                modalidade === 'simulado'
                  ? 'bg-indigo-50/70 border-indigo-600 shadow-sm ring-2 ring-indigo-200'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                modalidade === 'simulado' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block font-bold text-base text-slate-900">Simulado Oficial Completo</span>
                <span className="block text-xs text-slate-600">
                  20 questões (10 Português + 10 Matemática) com cronômetro da prova real.
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setModalidade('estudo_dirigido')}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                modalidade === 'estudo_dirigido'
                  ? 'bg-amber-50/70 border-amber-500 shadow-sm ring-2 ring-amber-200'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                modalidade === 'estudo_dirigido' ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block font-bold text-base text-slate-900">Estudo Dirigido por Tema</span>
                <span className="block text-xs text-slate-600">
                  10 questões focadas no tema escolhido, em modo livre sem pressão de tempo.
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Nome da Criança */}
        <div className="space-y-2">
          <label htmlFor="nomeAluno" className="block text-base font-semibold text-slate-800">
            Qual é o seu nome? <span className="text-xs font-normal text-slate-500">(opcional)</span>
          </label>
          <input
            id="nomeAluno"
            type="text"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            placeholder="Digite seu nome ou apelido aqui..."
            className="w-full px-4 py-3 text-lg border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/50"
            maxLength={40}
          />
        </div>

        {/* Conteúdo Dinâmico conforme a modalidade */}
        {modalidade === 'simulado' ? (
          /* Configurações do Simulado Oficial */
          <div className="space-y-5 pt-2 border-t border-slate-100">
            <div className="space-y-3">
              <label className="block text-base font-semibold text-slate-800">
                Tempo do cronômetro para a prova:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[40, 50, 60].map((tempo) => (
                  <button
                    key={tempo}
                    type="button"
                    onClick={() => setTempoSelecionadoMinutos(tempo)}
                    className={`py-3 px-4 rounded-xl border text-center font-bold text-base transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      tempoSelecionadoMinutos === tempo
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-200'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{tempo} min</span>
                    </div>
                    <span className={`text-xs font-normal ${tempoSelecionadoMinutos === tempo ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {tempo === 40 ? 'Recomendado' : tempo === 50 ? 'Mais tranquilo' : 'Máximo conforto'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={onIniciarSimulado}
              className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xl font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Começar simulado completo (20 questões)</span>
            </button>
          </div>
        ) : (
          /* Configurações do Estudo Dirigido */
          <div className="space-y-5 pt-2 border-t border-slate-100">
            {/* Escolha da disciplina */}
            <div className="space-y-2">
              <label className="block text-base font-semibold text-slate-800">
                1. Escolha a disciplina para estudar:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleTrocarDisciplina('Portugues')}
                  className={`py-3 px-4 rounded-xl border font-bold text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    disciplinaTema === 'Portugues'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Língua Portuguesa</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTrocarDisciplina('Matematica')}
                  className={`py-3 px-4 rounded-xl border font-bold text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    disciplinaTema === 'Matematica'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Calculator className="w-5 h-5" />
                  <span>Matemática</span>
                </button>
              </div>
            </div>

            {/* Menu suspenso de temas */}
            <div className="space-y-2">
              <label htmlFor="selectTema" className="block text-base font-semibold text-slate-800">
                2. Selecione o tema que você quer treinar:
              </label>
              <div className="relative">
                <select
                  id="selectTema"
                  value={habilidadeSelecionada}
                  onChange={(e) => setHabilidadeSelecionada(e.target.value)}
                  className="w-full px-4 py-3.5 text-base sm:text-lg font-semibold border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white cursor-pointer text-slate-900"
                >
                  {(disciplinaTema === 'Portugues' ? TEMAS_PORTUGUES : TEMAS_MATEMATICA).map((tema, idx) => (
                    <option key={tema} value={tema}>
                      {idx + 1}. {tema}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Card explicativo e acolhedor sobre o tema escolhido */}
            {infoHabilidadeAtual && (
              <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200 text-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>O que você vai praticar:</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  {infoHabilidadeAtual.descricaoCurta}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-900 pt-1 border-t border-amber-200/60">
                  <span>🎯 10 questões exclusivas deste tema</span>
                  <span>·</span>
                  <span>⏳ Modo livre (sem limite de tempo)</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-amber-800">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    Pelo menos 2 desafios
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={() => onIniciarEstudoDirigido(disciplinaTema, habilidadeSelecionada)}
              className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-xl font-bold rounded-2xl shadow-lg shadow-amber-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Target className="w-6 h-6" />
              <span>Iniciar Estudo Dirigido (10 questões)</span>
            </button>
          </div>
        )}

        {/* Informação sobre o banco de questões */}
        <div className="text-xs text-slate-500 flex items-center justify-between pt-2 border-t border-slate-100">
          <span>Banco disponível: {totalQuestoesBanco} questões calibradas (4º ano do EF)</span>
          <span>100% offline e sem anúncios</span>
        </div>
      </div>

      {/* Histórico de Tentativas com Tags Específicas */}
      {historico.length > 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">Suas tentativas anteriores ({historico.length})</h2>
            </div>
            <button
              onClick={onLimparHistorico}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              title="Apagar todo o histórico gravado neste navegador"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar histórico</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {historico.map((item) => {
              const isEstudo = item.modalidade === 'estudo_dirigido';

              return (
                <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {isEstudo ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-200">
                          <Target className="w-3 h-3 text-amber-700" />
                          <span>Estudo Dirigido · {item.disciplinaEstudoDirigido === 'Portugues' ? 'Português' : 'Matemática'}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-indigo-100 text-indigo-900 border border-indigo-200">
                          <FileCheck2 className="w-3 h-3 text-indigo-700" />
                          <span>Simulado Oficial</span>
                        </span>
                      )}

                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{item.dataFormatada}</span>
                      {item.nomeAluno && (
                        <>
                          <span className="text-slate-400">·</span>
                          <span className="font-semibold text-slate-700">{item.nomeAluno}</span>
                        </>
                      )}
                    </div>

                    {isEstudo ? (
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-slate-900">
                          {item.temaEstudoDirigido}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="font-bold text-slate-900">
                            Nota: <span className={item.notaFinal >= 7 ? 'text-emerald-600' : 'text-amber-600'}>{item.notaFinal.toFixed(1).replace('.', ',')}</span> / 10,0
                          </span>
                          <span className="text-slate-300">·</span>
                          <span>Acertos: {item.acertosTotal} de {item.totalQuestoes} questões</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs text-slate-500">Modo livre</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="font-bold text-slate-900">
                          Nota: <span className={item.atingiuMinimo ? 'text-emerald-600' : 'text-amber-600'}>{item.notaFinal.toFixed(1).replace('.', ',')}</span> / 10,0
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-600">
                          Português: {item.acertosPortugues}/{item.totalPortugues}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-600">
                          Matemática: {item.acertosMatematica}/{item.totalMatematica}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onVerResultadoAntigo(item)}
                    className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors flex items-center justify-center gap-1.5 self-start sm:self-center shrink-0 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver relatório completo</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
