import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle, 
  AlertTriangle,
  FileCheck2,
  BookOpen,
  Calculator,
  Target,
  Flame,
  Clock,
  FlagTriangleRight
} from 'lucide-react';
import { QuestaoSimulado, RespostaAluno, ModalidadeTreino } from '../types';
import { Cronometro } from './Cronometro';

interface TelaSimuladoProps {
  modalidade: ModalidadeTreino;
  numeroSimuladoRetaFinal?: 1 | 2 | 3;
  temaEstudoDirigido?: string;
  questoes: QuestaoSimulado[];
  respostas: RespostaAluno;
  marcadasRevisao: Set<number>;
  indiceAtual: number;
  tempoRestanteSegundos: number;
  tempoTotalSegundos: number;
  tempoDecorridoSegundos: number;
  onSelecionarAlternativa: (numeroQuestao: number, indiceOriginal: number, letra: "A" | "B" | "C" | "D") => void;
  onAlternarMarcadaRevisao: (numeroQuestao: number) => void;
  onNavegarQuestao: (indice: number) => void;
  onTickTempo: (segundos: number) => void;
  onTempoEsgotado: () => void;
  onConfirmarEntrega: () => void;
}

export const TelaSimulado: React.FC<TelaSimuladoProps> = ({
  modalidade,
  numeroSimuladoRetaFinal,
  temaEstudoDirigido,
  questoes,
  respostas,
  marcadasRevisao,
  indiceAtual,
  tempoRestanteSegundos,
  tempoTotalSegundos,
  tempoDecorridoSegundos,
  onSelecionarAlternativa,
  onAlternarMarcadaRevisao,
  onNavegarQuestao,
  onTickTempo,
  onTempoEsgotado,
  onConfirmarEntrega,
}) => {
  const [modalEntregaAberto, setModalEntregaAberto] = useState(false);

  const questaoAtual = questoes[indiceAtual];
  const numeroQuestao = questaoAtual.numero;
  const respostaAtual = respostas[numeroQuestao];
  const isMarcada = marcadasRevisao.has(numeroQuestao);

  const totalQuestoes = questoes.length;
  const totalRespondidas = Object.keys(respostas).length;
  const progressoPercent = Math.round((totalRespondidas / totalQuestoes) * 100);

  // Identifica questões em branco
  const questoesEmBranco = questoes
    .filter(q => respostas[q.numero] === undefined)
    .map(q => q.numero);

  const isEstudoDirigido = modalidade === 'estudo_dirigido';
  const isRetaFinal = modalidade === 'reta_final';

  // Formatação do tempo decorrido no modo livre
  const minutosDecorridos = Math.floor(tempoDecorridoSegundos / 60);
  const segundosDecorridos = tempoDecorridoSegundos % 60;
  const tempoDecorridoFormatado = `${minutosDecorridos.toString().padStart(2, '0')}:${segundosDecorridos.toString().padStart(2, '0')}`;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Topo do Simulado/Treino: Cronômetro ou Modo Livre + Botão de Entrega */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            {!isEstudoDirigido ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {isRetaFinal && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-xs shrink-0 self-start sm:self-center">
                    <FlagTriangleRight className="w-4 h-4 text-amber-700 fill-current" />
                    <span>Reta Final · Prova Oficial {numeroSimuladoRetaFinal}</span>
                  </div>
                )}
                <div className="w-full sm:w-80">
                  <Cronometro
                    tempoRestanteSegundos={tempoRestanteSegundos}
                    tempoTotalSegundos={tempoTotalSegundos}
                    onTempoEsgotado={onTempoEsgotado}
                    onTick={onTickTempo}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                  <Target className="w-5 h-5 text-amber-600" />
                  <span>Estudo Dirigido:</span>
                  <span className="font-semibold text-slate-700 hidden sm:inline max-w-[280px] truncate" title={temaEstudoDirigido}>
                    {temaEstudoDirigido}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md font-mono tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tempo: {tempoDecorridoFormatado}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <span className="text-sm font-semibold text-slate-600">
              {totalRespondidas} de {totalQuestoes} respondidas
            </span>
            <button
              onClick={() => setModalEntregaAberto(true)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>{isEstudoDirigido ? "Entregar treino" : "Entregar simulado"}</span>
            </button>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isRetaFinal ? 'bg-amber-500' : isEstudoDirigido ? 'bg-amber-500' : 'bg-indigo-600'
            }`}
            style={{ width: `${progressoPercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Painel Central: Questão Atual (3 colunas em lg) */}
        <div className="lg:col-span-3 space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Cabeçalho da Questão */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  questaoAtual.questao.disciplina === "Portugues"
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-purple-50 text-purple-700 border border-purple-200'
                }`}>
                  {questaoAtual.questao.disciplina === "Portugues" ? (
                    <>
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Língua Portuguesa</span>
                    </>
                  ) : (
                    <>
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Matemática</span>
                    </>
                  )}
                </span>

                <span className="text-base font-bold text-slate-800">
                  Questão {numeroQuestao} de {totalQuestoes}
                </span>

                {questaoAtual.questao.nivel === 3 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    <span>Desafio</span>
                  </span>
                )}
              </div>

              {/* Botão de Marcar para Revisar */}
              <button
                onClick={() => onAlternarMarcadaRevisao(numeroQuestao)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isMarcada
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
                aria-pressed={isMarcada}
              >
                {isMarcada ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-amber-700" />
                    <span>Marcada para revisar</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4 text-slate-500" />
                    <span>Marcar para revisar</span>
                  </>
                )}
              </button>
            </div>

            {/* Texto de Apoio (se houver) */}
            {questaoAtual.questao.apoio && (
              <div className="bg-amber-50/40 rounded-xl p-5 border border-amber-100 text-slate-800 text-lg leading-relaxed font-normal">
                <p className="whitespace-pre-line">{questaoAtual.questao.apoio}</p>
              </div>
            )}

            {/* Enunciado da Questão - Mínimo 22px */}
            <div className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {questaoAtual.questao.enunciado}
            </div>

            {/* Alternativas A, B, C, D em botões grandes */}
            <div className="space-y-3 pt-2" role="radiogroup" aria-label={`Alternativas da Questão ${numeroQuestao}`}>
              {questaoAtual.alternativasEmbaralhadas.map((alt) => {
                const isSelected = respostaAtual?.letraEscolhida === alt.letra;

                return (
                  <button
                    key={alt.letra}
                    onClick={() => onSelecionarAlternativa(numeroQuestao, alt.indiceOriginal, alt.letra)}
                    role="radio"
                    aria-checked={isSelected}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all flex items-start gap-4 cursor-pointer min-h-[60px] ${
                      isSelected
                        ? isRetaFinal
                          ? 'bg-amber-50/80 border-amber-500 shadow-md ring-2 ring-amber-200'
                          : isEstudoDirigido
                          ? 'bg-amber-50/80 border-amber-500 shadow-md ring-2 ring-amber-200'
                          : 'bg-indigo-50/80 border-indigo-600 shadow-md ring-2 ring-indigo-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 transition-colors ${
                      isSelected
                        ? isRetaFinal ? 'bg-amber-500 text-white' : isEstudoDirigido ? 'bg-amber-500 text-white' : 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {alt.letra}
                    </span>
                    <span className="text-lg sm:text-xl font-medium text-slate-800 pt-0.5 leading-relaxed">
                      {alt.texto}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Botões de Navegação Anterior e Próxima */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={() => onNavegarQuestao(indiceAtual - 1)}
                disabled={indiceAtual === 0}
                className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-2 cursor-pointer text-base"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Anterior</span>
              </button>

              {indiceAtual < totalQuestoes - 1 ? (
                <button
                  onClick={() => onNavegarQuestao(indiceAtual + 1)}
                  className={`px-6 py-3 rounded-xl text-white font-semibold transition-colors flex items-center gap-2 cursor-pointer text-base shadow-sm ${
                    isRetaFinal ? 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700' : isEstudoDirigido ? 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'
                  }`}
                >
                  <span>Próxima</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setModalEntregaAberto(true)}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold transition-colors flex items-center gap-2 cursor-pointer text-base shadow-sm"
                >
                  <FileCheck2 className="w-5 h-5" />
                  <span>Finalizar</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Barra Lateral: Grade de Navegação das Questões */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Navegação</h3>
            <span className="text-xs text-slate-500 font-medium">{totalQuestoes} no total</span>
          </div>

          {/* Legenda dos Estados */}
          <div className="space-y-1.5 text-xs text-slate-600 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className={`w-3.5 h-3.5 rounded inline-block ${isRetaFinal ? 'bg-amber-500' : isEstudoDirigido ? 'bg-amber-500' : 'bg-indigo-600'}`}></span>
              <span>Respondida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-amber-400 inline-block"></span>
              <span>Marcada para revisar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded border border-slate-300 bg-white inline-block"></span>
              <span>Em branco</span>
            </div>
          </div>

          {/* Grade de Botões 1 a N */}
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2">
            {questoes.map((q, idx) => {
              const respondida = respostas[q.numero] !== undefined;
              const marcada = marcadasRevisao.has(q.numero);
              const isCurrent = idx === indiceAtual;

              return (
                <button
                  key={q.numero}
                  onClick={() => onNavegarQuestao(idx)}
                  className={`h-11 rounded-xl font-bold text-sm transition-all flex items-center justify-center relative cursor-pointer ${
                    isCurrent
                      ? isRetaFinal || isEstudoDirigido ? 'ring-2 ring-amber-500 ring-offset-2' : 'ring-2 ring-indigo-500 ring-offset-2'
                      : ''
                  } ${
                    marcada
                      ? 'bg-amber-100 text-amber-900 border-2 border-amber-400'
                      : respondida
                      ? isRetaFinal || isEstudoDirigido ? 'bg-amber-500 text-white' : 'bg-indigo-600 text-white'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                  aria-label={`Questão ${q.numero}: ${respondida ? 'Respondida' : 'Em branco'}, ${marcada ? 'Marcada para revisar' : ''}`}
                >
                  <span>{q.numero}</span>
                  {marcada && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Botão de Entrega no pé da grade */}
          <button
            onClick={() => setModalEntregaAberto(true)}
            className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Entregar agora</span>
          </button>
        </div>
      </div>

      {/* Modal de Confirmação de Entrega */}
      {modalEntregaAberto && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isRetaFinal 
                    ? `Entregar o Simulado ${numeroSimuladoRetaFinal} da Reta Final?` 
                    : isEstudoDirigido 
                    ? "Entregar o treino?" 
                    : "Entregar o simulado?"}
                </h3>
                <p className="text-sm text-slate-500">
                  Você respondeu {totalRespondidas} de {totalQuestoes} questões.
                </p>
              </div>
            </div>

            {/* Aviso sobre questões em branco */}
            {questoesEmBranco.length > 0 ? (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-amber-950 text-sm space-y-1.5">
                <p className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Atenção: existem questões em branco!</span>
                </p>
                <p className="text-xs text-amber-900">
                  As seguintes questões ainda não foram respondidas:{' '}
                  <span className="font-bold">{questoesEmBranco.join(', ')}</span>.
                </p>
                <p className="text-xs text-amber-800">
                  Se você entregar agora, as questões em branco serão contadas como incorretas.
                </p>
              </div>
            ) : (
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-emerald-950 text-sm">
                <p className="font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Muito bem! Você respondeu todas as {totalQuestoes} questões!</span>
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setModalEntregaAberto(false)}
                className="w-full sm:w-1/2 py-3 px-4 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors cursor-pointer text-sm"
              >
                Voltar e revisar
              </button>
              <button
                onClick={() => {
                  setModalEntregaAberto(false);
                  onConfirmarEntrega();
                }}
                className="w-full sm:w-1/2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer text-sm"
              >
                Sim, finalizar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
