import React from 'react';
import { 
  Award, 
  RotateCcw, 
  Printer, 
  Home, 
  Clock, 
  CheckCircle, 
  Sparkles,
  BookOpen,
  Calculator,
  Info
} from 'lucide-react';
import { ResultadoSimulado } from '../types';
import { RelatorioHabilidades } from './RelatorioHabilidades';
import { GabaritoComentado } from './GabaritoComentado';

interface TelaResultadoProps {
  resultado: ResultadoSimulado;
  onRefazerSimulado: () => void;
  onVoltarInicio: () => void;
}

export const TelaResultado: React.FC<TelaResultadoProps> = ({
  resultado,
  onRefazerSimulado,
  onVoltarInicio,
}) => {
  const minutosUsados = Math.floor(resultado.tempoGastoSegundos / 60);
  const segundosUsados = resultado.tempoGastoSegundos % 60;
  const tempoUsadoFormatado = `${minutosUsados} min e ${segundosUsados.toString().padStart(2, '0')} s`;

  const handleImprimir = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Botões de Ação Rápidos no Topo */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <button
          onClick={onVoltarInicio}
          className="px-4 py-2 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Início</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleImprimir}
            className="px-4 py-2 text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Salvar ou imprimir como documento PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Salvar em PDF</span>
          </button>

          <button
            onClick={onRefazerSimulado}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer simulado</span>
          </button>
        </div>
      </div>

      {/* Cartão de Resumo Principal do Desempenho */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="text-center space-y-2 border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Resultado do Simulado</span>
            <span>·</span>
            <span>{resultado.dataFormatada}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {resultado.nomeAluno ? `Parabéns pela dedicação, ${resultado.nomeAluno}!` : "Parabéns pela sua dedicação!"}
          </h1>

          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Cada treino é um passo importante na sua aprendizagem. Veja abaixo como foi sua pontuação e os comentários do professor:
          </p>
        </div>

        {/* Grade de Notas e Selo de Aprovação do Edital */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card da Nota Final */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between text-center space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Nota Final (Escala 0 a 10)
            </span>
            <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-mono tabular-nums">
              {resultado.notaFinal.toFixed(1).replace('.', ',')}
            </div>
            <span className="text-xs text-slate-500">
              {resultado.acertosTotal} de {resultado.totalQuestoes} questões acertadas
            </span>
          </div>

          {/* Card de Português */}
          <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100 flex flex-col justify-between text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Língua Portuguesa</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-mono tabular-nums">
              {resultado.acertosPortugues} <span className="text-xl font-normal text-blue-600">/ {resultado.totalPortugues}</span>
            </div>
            <span className="text-xs text-blue-700">
              {Math.round((resultado.acertosPortugues / resultado.totalPortugues) * 100)}% de acerto
            </span>
          </div>

          {/* Card de Matemática */}
          <div className="bg-purple-50/60 rounded-2xl p-5 border border-purple-100 flex flex-col justify-between text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-purple-800 uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-purple-600" />
              <span>Matemática</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-900 font-mono tabular-nums">
              {resultado.acertosMatematica} <span className="text-xl font-normal text-purple-600">/ {resultado.totalMatematica}</span>
            </div>
            <span className="text-xs text-purple-700">
              {Math.round((resultado.acertosMatematica / resultado.totalMatematica) * 100)}% de acerto
            </span>
          </div>
        </div>

        {/* Selo de Status do Edital */}
        <div className={`rounded-2xl p-4 sm:p-5 border flex items-start sm:items-center gap-4 ${
          resultado.atingiuMinimo
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : 'bg-amber-50 border-amber-300 text-amber-950'
        }`}>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            resultado.atingiuMinimo ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'
          }`}>
            <Award className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h2 className="text-lg font-bold">
              {resultado.atingiuMinimo
                ? "Atingiu a nota mínima do edital (7,0)!"
                : `Faltaram ${resultado.pontosFaltantes.toFixed(1).replace('.', ',')} pontos para a nota mínima (7,0).`}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {resultado.atingiuMinimo
                ? "Excelente resultado! Você atingiu ou superou a pontuação mínima necessária para não ser desclassificado na Bolsa Mérito."
                : "Muito bom treino! Com mais um pouquinho de prática você alcançará os 7,0 pontos com segurança."}
            </p>
          </div>
        </div>

        {/* Informações adicionais do teste */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Tempo de prova utilizado: <strong className="text-slate-700">{tempoUsadoFormatado}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Info className="w-4 h-4 text-slate-400" />
            <span>Critério de desempate do edital: 1º Português, 2º Matemática</span>
          </div>
        </div>
      </div>

      {/* Relatório por Habilidade */}
      <RelatorioHabilidades
        habilidadesStats={resultado.habilidadesStats}
        prioridadesEstudo={resultado.prioridadesEstudo}
      />

      {/* Gabarito Comentado Completo */}
      <GabaritoComentado
        questoes={resultado.questoesSimulado}
        respostas={resultado.respostas}
      />

      {/* Rodapé com Botões de Ação */}
      <div className="no-print pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onRefazerSimulado}
          className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Fazer outro simulado com novo sorteio</span>
        </button>

        <button
          onClick={onVoltarInicio}
          className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
        >
          <Home className="w-5 h-5" />
          <span>Voltar à tela inicial</span>
        </button>
      </div>
    </div>
  );
};
