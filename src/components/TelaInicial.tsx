import React from 'react';
import { Play, Clock, BookOpen, Calculator, Award, Trash2, Eye, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ResultadoSimulado } from '../types';

interface TelaInicialProps {
  nomeAluno: string;
  setNomeAluno: (nome: string) => void;
  tempoSelecionadoMinutos: number;
  setTempoSelecionadoMinutos: (tempo: number) => void;
  onIniciarSimulado: () => void;
  historico: ResultadoSimulado[];
  onVerResultadoAntigo: (resultado: ResultadoSimulado) => void;
  onLimparHistorico: () => void;
  totalQuestoesBanco: number;
}

export const TelaInicial: React.FC<TelaInicialProps> = ({
  nomeAluno,
  setNomeAluno,
  tempoSelecionadoMinutos,
  setTempoSelecionadoMinutos,
  onIniciarSimulado,
  historico,
  onVerResultadoAntigo,
  onLimparHistorico,
  totalQuestoesBanco,
}) => {
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
          Olá! Prepare-se com calma para a sua prova de bolsa. Treine seus conhecimentos em Língua Portuguesa e Matemática com tranquilidade e no seu tempo!
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

        <div className="bg-indigo-50/60 rounded-xl p-4 border border-indigo-100 text-indigo-950 text-sm">
          <p className="font-semibold flex items-center gap-1.5 mb-1">
            <span>Dica do simulador:</span>
          </p>
          <p className="text-slate-700 leading-relaxed">
            Assim como no dia da prova real impressa, você não saberá se acertou ou errou durante o teste. Ao entregar o simulado, você receberá a nota final, o relatório de cada habilidade e o gabarito comentado com explicações detalhadas para cada questão!
          </p>
        </div>
      </div>

      {/* Configuração do Simulado */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Personalize seu treino</h2>

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

        {/* Escolha do tempo do cronômetro */}
        <div className="space-y-3">
          <label className="block text-base font-semibold text-slate-800">
            Tempo do cronômetro para o simulado:
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[40, 50, 60].map((tempo) => (
              <button
                key={tempo}
                type="button"
                onClick={() => setTempoSelecionadoMinutos(tempo)}
                className={`py-3 px-4 rounded-xl border text-center font-bold text-base transition-all flex flex-col items-center gap-1 ${
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

        {/* Informação sobre o banco de questões */}
        <div className="text-xs text-slate-500 flex items-center justify-between pt-2 border-t border-slate-100">
          <span>Banco disponível: {totalQuestoesBanco} questões calibradas (4º ano do EF)</span>
          <span>100% offline e sem anúncios</span>
        </div>

        {/* Botão de Início */}
        <button
          onClick={onIniciarSimulado}
          className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xl font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
        >
          <Play className="w-6 h-6 fill-current" />
          <span>Começar simulado</span>
        </button>
      </div>

      {/* Histórico de Tentativas */}
      {historico.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">Suas tentativas anteriores ({historico.length})</h2>
            </div>
            <button
              onClick={onLimparHistorico}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              title="Apagar todo o histórico gravado neste navegador"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar histórico</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {historico.map((item) => (
              <div key={item.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span>{item.dataFormatada}</span>
                    {item.nomeAluno && (
                      <>
                        <span>·</span>
                        <span className="font-semibold text-slate-700">{item.nomeAluno}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <span className="font-bold text-slate-900">
                      Nota: <span className={item.atingiuMinimo ? 'text-emerald-600' : 'text-amber-600'}>{item.notaFinal.toFixed(1).replace('.', ',')}</span> / 10,0
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-sm text-slate-600">
                      Português: {item.acertosPortugues}/{item.totalPortugues}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-sm text-slate-600">
                      Matemática: {item.acertosMatematica}/{item.totalMatematica}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onVerResultadoAntigo(item)}
                  className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors flex items-center justify-center gap-1.5 self-start sm:self-center"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver relatório completo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
