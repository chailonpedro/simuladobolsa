import React, { useState } from 'react';
import { QuestaoSimulado, RespostaAluno } from '../types';
import { CheckCircle2, XCircle, MinusCircle, MessageCircleQuestion, ChevronDown, ChevronUp } from 'lucide-react';

interface GabaritoComentadoProps {
  questoes: QuestaoSimulado[];
  respostas: RespostaAluno;
}

export const GabaritoComentado: React.FC<GabaritoComentadoProps> = ({
  questoes,
  respostas,
}) => {
  // Estado para expandir todas ou recolher
  const [expandirTodos, setExpandirTodos] = useState(true);
  const [expandidos, setExpandidos] = useState<Record<number, boolean>>(() => {
    const init: Record<number, boolean> = {};
    questoes.forEach(q => { init[q.numero] = true; });
    return init;
  });

  const alternarItem = (num: number) => {
    setExpandidos(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const alternarTodos = () => {
    const novoEstado = !expandirTodos;
    setExpandirTodos(novoEstado);
    const atualizados: Record<number, boolean> = {};
    questoes.forEach(q => { atualizados[q.numero] = novoEstado; });
    setExpandidos(atualizados);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Gabarito Comentado Completo
          </h3>
          <p className="text-sm text-slate-500">
            Confira a explicação detalhada de cada questão resolvida no simulado.
          </p>
        </div>

        <button
          onClick={alternarTodos}
          className="no-print text-sm font-semibold text-indigo-700 hover:text-indigo-900 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
        >
          {expandirTodos ? "Recolher todos" : "Expandir todos"}
        </button>
      </div>

      <div className="space-y-4">
        {questoes.map((q) => {
          const resp = respostas[q.numero];
          const acertou = resp !== undefined && resp.indiceOriginalEscolhido === q.questao.correta;
          const emBranco = resp === undefined;
          const isOpen = expandidos[q.numero] ?? true;

          // Localiza o texto da alternativa correta
          const altCorreta = q.alternativasEmbaralhadas.find(
            a => a.indiceOriginal === q.questao.correta
          );

          // Localiza o texto da alternativa escolhida pelo aluno
          const altEscolhida = resp !== undefined
            ? q.alternativasEmbaralhadas.find(a => a.letra === resp.letraEscolhida)
            : null;

          return (
            <div
              key={q.numero}
              className={`rounded-2xl border transition-all ${
                acertou
                  ? 'bg-white border-emerald-200'
                  : emBranco
                  ? 'bg-white border-slate-200'
                  : 'bg-white border-rose-200'
              }`}
            >
              {/* Cabeçalho do Card */}
              <button
                type="button"
                onClick={() => alternarItem(q.numero)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 ${
                    acertou
                      ? 'bg-emerald-100 text-emerald-800'
                      : emBranco
                      ? 'bg-slate-100 text-slate-600'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {q.numero}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        q.questao.disciplina === "Portugues"
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-purple-50 text-purple-700'
                      }`}>
                        {q.questao.disciplina === "Portugues" ? "Língua Portuguesa" : "Matemática"}
                      </span>
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                        · {q.questao.habilidade}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {acertou ? (
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Acertou</span>
                    </span>
                  ) : emBranco ? (
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      <MinusCircle className="w-4 h-4 text-slate-500" />
                      <span>Em branco</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Errou</span>
                    </span>
                  )}

                  <div className="no-print text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {/* Conteúdo Expandido */}
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                  {/* Texto de Apoio (se houver) */}
                  {q.questao.apoio && (
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-sm sm:text-base text-slate-700 italic">
                      <p className="whitespace-pre-line">{q.questao.apoio}</p>
                    </div>
                  )}

                  {/* Enunciado */}
                  <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    {q.questao.enunciado}
                  </p>

                  {/* Comparativo de Respostas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className={`p-3 rounded-xl border ${
                      acertou
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : emBranco
                        ? 'bg-slate-50 border-slate-200 text-slate-700'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}>
                      <span className="text-xs font-bold uppercase tracking-wide block mb-1">
                        Sua resposta:
                      </span>
                      {altEscolhida ? (
                        <p className="font-semibold">
                          <span className="font-bold underline mr-1">Letra {altEscolhida.letra}:</span> {altEscolhida.texto}
                        </p>
                      ) : (
                        <p className="italic text-slate-500">Nenhuma alternativa assinalada (deixada em branco)</p>
                      )}
                    </div>

                    <div className="p-3 rounded-xl border bg-emerald-50/70 border-emerald-200 text-emerald-950">
                      <span className="text-xs font-bold uppercase tracking-wide block mb-1 text-emerald-800">
                        Resposta correta:
                      </span>
                      <p className="font-semibold text-emerald-900">
                        <span className="font-bold underline mr-1">Letra {altCorreta?.letra}:</span> {altCorreta?.texto}
                      </p>
                    </div>
                  </div>

                  {/* Comentário Pedagógico Acolhedor */}
                  <div className="bg-indigo-50/70 rounded-xl p-4 border border-indigo-100 text-indigo-950 text-sm space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-indigo-900 text-xs uppercase tracking-wider">
                      <MessageCircleQuestion className="w-4 h-4 text-indigo-600" />
                      <span>Explicação do Professor:</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-800 pt-1 font-normal">
                      {q.questao.comentario}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
