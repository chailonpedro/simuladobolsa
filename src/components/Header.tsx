import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  emSimulado?: boolean;
  onVoltarInicio?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ emSimulado, onVoltarInicio }) => {
  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            M
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
            Simulado Mérito 2027
          </span>
        </div>

        {/* Zone 2: Navigation / Context info */}
        <nav className="hidden md:flex items-center gap-3 text-sm text-slate-500 whitespace-nowrap">
          <span>4º Ano do Ensino Fundamental</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Bolsa Colégio Unochapecó</span>
        </nav>

        {/* Zone 3: Primary Action / Context */}
        <div className="flex items-center gap-2 shrink-0">
          {emSimulado && onVoltarInicio ? (
            <button
              onClick={onVoltarInicio}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              title="Voltar para a página inicial"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Sair do simulado</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-2.5 py-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ingresso no 5º ano</span>
            </span>
          )}
        </div>
      </div>
    </header>
  );
};
