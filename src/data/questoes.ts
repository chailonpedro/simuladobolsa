import { Questao } from '../types';
import { QUESTOES_PORTUGUES } from './questoesPortugues';
import { QUESTOES_PORTUGUES_EXTRA } from './questoesPortuguesExtra';
import { QUESTOES_MATEMATICA } from './questoesMatematica';
import { QUESTOES_MATEMATICA_EXTRA } from './questoesMatematicaExtra';

/**
 * BANCO DE QUESTÕES PEDAGÓGICAS DEFINITIVO - 4º ANO DO ENSINO FUNDAMENTAL
 * Referência: Edital 003/ColégioUnochapecó/2026 – Bolsa Mérito Estudantil.
 * 
 * - Língua Portuguesa: 120 questões (exatamente 20 por temática/habilidade)
 * - Matemática: 120 questões (exatamente 20 por temática/habilidade)
 * Total: 240 questões rigorosamente calibradas para o 4º ano do EF, sem conteúdo de 5º ano.
 */
export const TODAS_QUESTOES_PORTUGUES: Questao[] = [
  ...QUESTOES_PORTUGUES,
  ...QUESTOES_PORTUGUES_EXTRA,
];

export const TODAS_QUESTOES_MATEMATICA: Questao[] = [
  ...QUESTOES_MATEMATICA,
  ...QUESTOES_MATEMATICA_EXTRA,
];

export const BANCO_QUESTOES: Questao[] = [
  ...TODAS_QUESTOES_PORTUGUES,
  ...TODAS_QUESTOES_MATEMATICA,
];

/**
 * Embaralha um array usando o algoritmo Fisher-Yates.
 */
function embaralhar<T>(array: T[]): T[] {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

/**
 * Sorteia 10 questões de Língua Portuguesa e 10 questões de Matemática
 * sem repetição dentro da mesma tentativa de simulado, reproduzindo
 * com fidelidade a estrutura de 20 questões da prova oficial.
 */
export function sortearQuestoesSimulado(banco: Questao[] = BANCO_QUESTOES): Questao[] {
  const questoesPT = banco.filter(q => q.disciplina === "Portugues");
  const questoesMAT = banco.filter(q => q.disciplina === "Matematica");

  const ptEmbaralhadas = embaralhar(questoesPT);
  const matEmbaralhadas = embaralhar(questoesMAT);

  const qtdPT = Math.min(10, ptEmbaralhadas.length);
  const qtdMAT = Math.min(10, matEmbaralhadas.length);

  const selecionadasPT = ptEmbaralhadas.slice(0, qtdPT);
  const selecionadasMAT = matEmbaralhadas.slice(0, qtdMAT);

  return [...selecionadasPT, ...selecionadasMAT];
}

/**
 * Sorteia exatamente 10 questões específicas de uma única temática (Estudo Dirigido),
 * garantindo:
 * 1. Nenhuma repetição dentro do mesmo treino.
 * 2. Pelo menos 2 questões de nível 3 (desafio) em cada treino de 10 questões.
 * 3. 8 questões de nível fácil/médio (níveis 1 e 2).
 */
export function sortearQuestoesEstudoDirigido(habilidade: string, banco: Questao[] = BANCO_QUESTOES): Questao[] {
  const questoesDoTema = banco.filter(q => q.habilidade === habilidade);

  if (questoesDoTema.length === 0) {
    return [];
  }

  // Separa em desafios (nível 3) e normais (níveis 1 e 2)
  const desafios = embaralhar(questoesDoTema.filter(q => q.nivel === 3));
  const normais = embaralhar(questoesDoTema.filter(q => q.nivel !== 3));

  // Garante pelo menos 2 questões de nível 3
  const qtdDesafiosDesejada = Math.min(2, desafios.length);
  const selecionadasDesafios = desafios.slice(0, qtdDesafiosDesejada);

  // Completa as 10 questões com questões normais
  const qtdNormaisDesejada = 10 - selecionadasDesafios.length;
  let selecionadasNormais = normais.slice(0, qtdNormaisDesejada);

  // Se faltar para 10 (caso o banco tivesse menos normais), completa com mais desafios disponíveis
  if (selecionadasDesafios.length + selecionadasNormais.length < 10) {
    const restantesDesafios = desafios.slice(qtdDesafiosDesejada);
    const faltam = 10 - (selecionadasDesafios.length + selecionadasNormais.length);
    selecionadasNormais = [...selecionadasNormais, ...restantesDesafios.slice(0, faltam)];
  }

  const resultado = [...selecionadasDesafios, ...selecionadasNormais];

  // Embaralha as 10 para que os desafios não fiquem agrupados sempre no início
  return embaralhar(resultado);
}
