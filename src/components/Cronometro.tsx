import React, { useEffect, useState } from 'react';
import { Clock, AlertCircle, X } from 'lucide-react';

interface CronometroProps {
  tempoRestanteSegundos: number;
  tempoTotalSegundos: number;
  emPausa?: boolean;
  onTempoEsgotado: () => void;
  onTick: (segundos: number) => void;
}

export const Cronometro: React.FC<CronometroProps> = ({
  tempoRestanteSegundos,
  tempoTotalSegundos,
  emPausa = false,
  onTempoEsgotado,
  onTick,
}) => {
  const [aviso10Exibido, setAviso10Exibido] = useState(false);
  const [aviso5Exibido, setAviso5Exibido] = useState(false);
  const [avisoAtual, setAvisoAtual] = useState<string | null>(null);

  useEffect(() => {
    if (emPausa) return;

    if (tempoRestanteSegundos <= 0) {
      onTempoEsgotado();
      return;
    }

    const timer = setInterval(() => {
      onTick(tempoRestanteSegundos - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [tempoRestanteSegundos, emPausa, onTempoEsgotado, onTick]);

  // Checagem de avisos serenos de 10 e 5 minutos
  useEffect(() => {
    if (tempoRestanteSegundos <= 600 && tempoRestanteSegundos > 590 && !aviso10Exibido) {
      setAviso10Exibido(true);
      setAvisoAtual("Você ainda tem 10 minutos! Continue no seu ritmo com muita tranquilidade.");
    } else if (tempoRestanteSegundos <= 300 && tempoRestanteSegundos > 290 && !aviso5Exibido) {
      setAviso5Exibido(true);
      setAvisoAtual("Faltam 5 minutos! É um bom momento para dar uma olhadinha nas questões marcadas.");
    }
  }, [tempoRestanteSegundos, aviso10Exibido, aviso5Exibido]);

  const minutos = Math.floor(tempoRestanteSegundos / 60);
  const segundos = tempoRestanteSegundos % 60;
  const tempoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  const isUrgente = tempoRestanteSegundos <= 300;
  const isAtencao = tempoRestanteSegundos <= 600 && !isUrgente;

  return (
    <div className="w-full">
      {/* Banner de aviso tranquilo aos 10 e 5 min */}
      {avisoAtual && (
        <div className="mb-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 shadow-sm transition-all">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-base font-medium">{avisoAtual}</p>
          </div>
          <button
            onClick={() => setAvisoAtual(null)}
            className="text-amber-700 hover:text-amber-900 p-1 rounded-lg hover:bg-amber-100 transition-colors"
            aria-label="Fechar aviso de tempo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Caixa do Cronômetro */}
      <div 
        role="timer"
        aria-label={`Tempo restante: ${minutos} minutos e ${segundos} segundos`}
        className={`flex items-center justify-between px-4 py-2.5 rounded-xl border transition-colors ${
          isUrgente 
            ? 'bg-rose-50 border-rose-300 text-rose-900' 
            : isAtencao 
            ? 'bg-amber-50 border-amber-300 text-amber-900' 
            : 'bg-slate-50 border-slate-200 text-slate-700'
        }`}
      >
        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
          <Clock className={`w-5 h-5 ${isUrgente ? 'text-rose-600 animate-pulse' : isAtencao ? 'text-amber-600' : 'text-indigo-600'}`} />
          <span>Tempo restante:</span>
        </div>
        <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight tabular-nums">
          {tempoFormatado}
        </div>
      </div>
    </div>
  );
};
