import React from 'react';
import { EstatisticaHabilidade } from '../types';
import { BookOpen, Calculator, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

interface RelatorioHabilidadesProps {
  habilidadesStats: EstatisticaHabilidade[];
  prioridadesEstudo: EstatisticaHabilidade[];
}

export const RelatorioHabilidades: React.FC<RelatorioHabilidadesProps> = ({
  habilidadesStats,
  prioridadesEstudo,
}) => {
  const statsPortugues = habilidadesStats.filter(h => h.disciplina === "Portugues");
  const statsMatematica = habilidadesStats.filter(h => h.disciplina === "Matematica");

  return (
    <div className="space-y-8">
      {/* Seção de Prioridades de Estudo (se houver alguma < 60%) */}
      {prioridadesEstudo.length > 0 ? (
        <div className="bg-amber-50/70 rounded-2xl border border-amber-200 p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-900">
            <Lightbulb className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-xl font-bold">Oportunidades de Treino (Abaixo de 60%)</h3>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Identificamos algumas habilidades para você treinar com mais atenção. Com pequenos exercícios no dia a dia, você vai se sentir ainda mais seguro(a):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {prioridadesEstudo.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-4 border border-amber-200/80 shadow-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      item.disciplina === "Portugues" 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.disciplina === "Portugues" ? "Língua Portuguesa" : "Matemática"}
                    </span>
                    <span className="text-xs font-bold text-amber-700 tabular-nums">
                      {item.acertos} de {item.totalQuestoes} ({item.porcentagem}%)
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-2">
                    {item.habilidade}
                  </h4>
                </div>
                <div className="bg-slate-50 rounded-lg p-2.5 text-xs text-slate-600 border border-slate-100 mt-2">
                  <span className="font-semibold text-slate-800">Dica prática: </span>
                  {item.dicaEstudo}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 flex items-center gap-3 text-emerald-900">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
          <div>
            <h3 className="text-lg font-bold">Excelente domínio em todas as habilidades!</h3>
            <p className="text-sm text-emerald-800">
              Você teve um aproveitamento igual ou superior a 60% em todos os tópicos avaliados neste simulado.
            </p>
          </div>
        </div>
      )}

      {/* Gráfico de Barras em CSS Puro: Português */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-slate-900">
            Desempenho por Habilidade · Língua Portuguesa
          </h3>
        </div>

        <div className="space-y-4">
          {statsPortugues.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-800">{item.habilidade}</span>
                <span className="font-semibold text-slate-700 tabular-nums">
                  {item.acertos}/{item.totalQuestoes} ({item.porcentagem}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.porcentagem >= 80 
                      ? 'bg-emerald-500' 
                      : item.porcentagem >= 50 
                      ? 'bg-blue-500' 
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.max(item.porcentagem, 4)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gráfico de Barras em CSS Puro: Matemática */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Calculator className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-bold text-slate-900">
            Desempenho por Habilidade · Matemática
          </h3>
        </div>

        <div className="space-y-4">
          {statsMatematica.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-800">{item.habilidade}</span>
                <span className="font-semibold text-slate-700 tabular-nums">
                  {item.acertos}/{item.totalQuestoes} ({item.porcentagem}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.porcentagem >= 80 
                      ? 'bg-emerald-500' 
                      : item.porcentagem >= 50 
                      ? 'bg-purple-500' 
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.max(item.porcentagem, 4)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
