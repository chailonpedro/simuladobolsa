import { Questao } from '../types';
import { QUESTOES_PORTUGUES } from './questoesPortugues';
import { QUESTOES_MATEMATICA } from './questoesMatematica';

export { QUESTOES_PORTUGUES } from './questoesPortugues';
export { QUESTOES_MATEMATICA } from './questoesMatematica';

/**
 * BANCO DE QUESTÕES PEDAGÓGICAS DEFINITIVO - 4º ANO DO ENSINO FUNDAMENTAL
 * Referência: Edital 003/ColégioUnochapecó/2026 – Bolsa Mérito Estudantil.
 * 
 * - Língua Portuguesa: 60 questões cobrindo as 6 habilidades (PT-001 a PT-060).
 * - Matemática: 60 questões cobrindo as 6 habilidades (MAT-001 a MAT-060).
 * Total: 120 questões rigorosamente calibradas para o 4º ano do EF.
 */
export const BANCO_QUESTOES: Questao[] = [
  ...QUESTOES_PORTUGUES,
  ...QUESTOES_MATEMATICA,
];

/**
 * Sorteia 10 questões de Língua Portuguesa e 10 questões de Matemática
 * sem repetição dentro da mesma tentativa de simulado, reproduzindo
 * com exatidão a estrutura de 20 questões do Edital 003 Unochapecó.
 */
export function sortearQuestoesSimulado(banco: Questao[] = BANCO_QUESTOES): Questao[] {
  const questoesPT = banco.filter(q => q.disciplina === "Portugues");
  const questoesMAT = banco.filter(q => q.disciplina === "Matematica");

  // Embaralha usando Fisher-Yates
  const embaralhar = <T>(array: T[]): T[] => {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  };

  const ptEmbaralhadas = embaralhar(questoesPT);
  const matEmbaralhadas = embaralhar(questoesMAT);

  // Sorteia exatamente 10 de cada
  const qtdPT = Math.min(10, ptEmbaralhadas.length);
  const qtdMAT = Math.min(10, matEmbaralhadas.length);

  const selecionadasPT = ptEmbaralhadas.slice(0, qtdPT);
  const selecionadasMAT = matEmbaralhadas.slice(0, qtdMAT);

  return [...selecionadasPT, ...selecionadasMAT];
}
