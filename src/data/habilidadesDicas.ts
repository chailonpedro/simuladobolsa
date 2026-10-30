import { Disciplina } from '../types';

export interface InfoHabilidade {
  nome: string;
  disciplina: Disciplina;
  descricaoCurta: string;
  dicaPratica: string;
}

export const HABILIDADES_INFO: Record<string, InfoHabilidade> = {
  // Língua Portuguesa
  "Localização de informação explícita no texto": {
    nome: "Localização de informação explícita no texto",
    disciplina: "Portugues",
    descricaoCurta: "Achar informações que estão escritas claramente nas frases do texto.",
    dicaPratica: "Releia o texto com calma com um lápis na mão, sublinhando onde está a resposta exata antes de marcar a alternativa."
  },
  "Inferência e dedução": {
    nome: "Inferência e dedução",
    disciplina: "Portugues",
    descricaoCurta: "Descobrir pistas e segredos que o autor não escreveu diretamente.",
    dicaPratica: "Procure as pistas deixadas pelo autor (como o que os personagens sentem ou fazem) para adivinhar o que está acontecendo por trás das palavras."
  },
  "Vocabulário e efeitos de sentido": {
    nome: "Vocabulário e efeitos de sentido",
    disciplina: "Portugues",
    descricaoCurta: "Entender palavras difíceis, sinônimos, antônimos e expressões do dia a dia.",
    dicaPratica: "Quando encontrar uma expressão ou palavra desconhecida, leia a frase inteira para entender o contexto ou use um dicionário infantil ilustrado."
  },
  "Organização textual e ideia principal": {
    nome: "Organização textual e ideia principal",
    disciplina: "Portugues",
    descricaoCurta: "Identificar o assunto mais importante do texto e a ordem dos fatos.",
    dicaPratica: "Ao terminar de ler uma história ou notícia, tente contar para si mesmo em apenas uma frase: 'Qual é o assunto principal de tudo isso?'."
  },
  "Ortografia e acentuação": {
    nome: "Ortografia e acentuação",
    disciplina: "Portugues",
    descricaoCurta: "Regras de escrita correta (R/RR, S/SS, M antes de P e B) e sílaba mais forte com acento.",
    dicaPratica: "Fale a palavra 'chamando' como se chamasse um amigo no portão para descobrir a sílaba tônica, e pratique palavras com M antes de P e B."
  },
  "Pontuação e conhecimentos linguísticos": {
    nome: "Pontuação e conhecimentos linguísticos",
    disciplina: "Portugues",
    descricaoCurta: "Uso de pontos, travessão, vírgula e classes de palavras (substantivo, adjetivo, verbo).",
    dicaPratica: "Pratique ler histórias em voz alta respeitando cada ponto final e vírgula, e lembre-se: substantivo dá nome às coisas e adjetivo dá qualidades."
  },

  // Matemática
  "Números, valor posicional e composição/decomposição": {
    nome: "Números, valor posicional e composição/decomposição",
    disciplina: "Matematica",
    descricaoCurta: "Entender unidades, dezenas, centenas e milhares.",
    dicaPratica: "Desenhe uma casinha de ordens (Unidade, Dezena, Centena, Milhar) no rascunho para colocar o número dentro e ver quanto vale cada algarismo."
  },
  "Operações: adição, subtração, multiplicação e divisão": {
    nome: "Operações: adição, subtração, multiplicação e divisão",
    disciplina: "Matematica",
    descricaoCurta: "Contas com e sem reagrupamento ('vai um' e 'emprestar') e problemas em duas etapas.",
    dicaPratica: "Resolva a conta devagar no papel e faça uma conferência. Em problemas, circule os números e descubra primeiro o que a questão está perguntando."
  },
  "Frações": {
    nome: "Frações",
    disciplina: "Matematica",
    descricaoCurta: "Partes de um todo, leitura de frações e comparação de pedaços iguais.",
    dicaPratica: "Lembre-se sempre da barra de chocolate: o número de baixo (denominador) é em quantos pedaços dividiu; o de cima (numerador) é quantos pedaços foram comidos ou sobraram."
  },
  "Grandezas e medidas": {
    nome: "Grandezas e medidas",
    disciplina: "Matematica",
    descricaoCurta: "Horas e minutos, dinheiro e troco, metros e quilos.",
    dicaPratica: "Lembre-se de que 1 hora tem sempre 60 minutos e que 1 real tem 100 centavos. Conte os minutos no relógio de 5 em 5."
  },
  "Geometria": {
    nome: "Geometria",
    disciplina: "Matematica",
    descricaoCurta: "Formas planas (lados e cantos) e sólidos (cubo, cilindro, esfera, pirâmide).",
    dicaPratica: "Pense em objetos de verdade da sua casa: um dado é um cubo (tem 6 faces quadradas e 8 cantinhos) e uma lata de refrigerante é um cilindro."
  },
  "Tabelas, gráficos e raciocínio lógico": {
    nome: "Tabelas, gráficos e raciocínio lógico",
    disciplina: "Matematica",
    descricaoCurta: "Interpretação de gráficos de barras, tabelas simples e noções de chance.",
    dicaPratica: "Use uma régua ou o próprio dedo para seguir a barra do gráfico até a linha do número correspondente, conferindo os dados com atenção."
  }
};

export function obterDicaHabilidade(habilidade: string): string {
  if (HABILIDADES_INFO[habilidade]) {
    return HABILIDADES_INFO[habilidade].dicaPratica;
  }
  return "Revise o conteúdo com calma, fazendo exercícios práticos no caderno.";
}
