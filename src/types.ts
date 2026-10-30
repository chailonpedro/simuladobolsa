export type Disciplina = "Portugues" | "Matematica";

export interface Questao {
  id: string; // Ex: "PT-001" | "MAT-001"
  disciplina: Disciplina;
  habilidade: string;
  nivel: 1 | 2 | 3; // 1 = fácil, 2 = médio, 3 = desafio
  apoio?: string;
  enunciado: string;
  alternativas: [string, string, string, string];
  correta: number; // 0 a 3
  comentario: string;
}

export interface AlternativaEmbaralhada {
  letra: "A" | "B" | "C" | "D";
  texto: string;
  indiceOriginal: number;
}

export interface QuestaoSimulado {
  questao: Questao;
  numero: number; // 1 a 20 (ou 1 a 12 na demo)
  alternativasEmbaralhadas: AlternativaEmbaralhada[];
}

export interface RespostaAluno {
  [questaoNumero: number]: {
    indiceOriginalEscolhido: number;
    letraEscolhida: "A" | "B" | "C" | "D";
  };
}

export interface EstatisticaHabilidade {
  habilidade: string;
  disciplina: Disciplina;
  totalQuestoes: number;
  acertos: number;
  porcentagem: number;
  dicaEstudo: string;
}

export interface ResultadoSimulado {
  id: string;
  dataIso: string;
  dataFormatada: string;
  nomeAluno: string;
  notaFinal: number; // 0.0 a 10.0
  atingiuMinimo: boolean;
  pontosFaltantes: number;
  acertosTotal: number;
  totalQuestoes: number;
  acertosPortugues: number;
  totalPortugues: number;
  acertosMatematica: number;
  totalMatematica: number;
  tempoGastoSegundos: number;
  tempoLimiteMinutos: number;
  questoesSimulado: QuestaoSimulado[];
  respostas: RespostaAluno;
  habilidadesStats: EstatisticaHabilidade[];
  prioridadesEstudo: EstatisticaHabilidade[];
}
