import { Questao } from '../types';

/**
 * BANCO DEFINITIVO DE MATEMÁTICA - 60 QUESTÕES (4º ANO DO ENSINO FUNDAMENTAL)
 * Referência: Edital 003/ColégioUnochapecó/2026 – Bolsa Mérito Estudantil.
 * 
 * Distribuição rigorosa: exatamente 10 questões para cada uma das 6 habilidades:
 * 1. Números, valor posicional e composição/decomposição (MAT-001, MAT-007 a MAT-015)
 * 2. Operações: adição, subtração, multiplicação e divisão (MAT-002, MAT-016 a MAT-024)
 * 3. Frações (MAT-003, MAT-025 a MAT-033)
 * 4. Grandezas e medidas (MAT-004, MAT-034 a MAT-042)
 * 5. Geometria (MAT-005, MAT-043 a MAT-051)
 * 6. Tabelas, gráficos e raciocínio lógico (MAT-006, MAT-052 a MAT-060)
 */
export const QUESTOES_MATEMATICA: Questao[] = [
  // =========================================================================
  // HABILIDADE 1: NÚMEROS, VALOR POSICIONAL E COMPOSIÇÃO/DECOMPOSIÇÃO (10 QUESTÕES)
  // =========================================================================
  {
    id: "MAT-001",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "Em uma feira de ciências escolar, 3.482 visitantes passaram pelas salas. No número 3.482, qual é o valor posicional do algarismo 4?",
    alternativas: [
      "4 unidades simples.",
      "40 unidades (4 dezenas).",
      "400 unidades (4 centenas).",
      "4.000 unidades (4 milhares)."
    ],
    correta: 2,
    comentario: "No número 3.482, o algarismo 2 está nas unidades (2), o 8 nas dezenas (80), o 4 nas centenas (400) e o 3 nos milhares (3.000). Portanto, o 4 vale 400."
  },
  {
    id: "MAT-007",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "O número 5.729 pode ser decomposto na soma de suas ordens como:",
    alternativas: [
      "5.000 + 700 + 20 + 9",
      "500 + 70 + 2 + 9",
      "5.000 + 70 + 20 + 9",
      "50.000 + 700 + 20 + 9"
    ],
    correta: 0,
    comentario: "No número 5.729 temos 5 milhares (5.000), 7 centenas (700), 2 dezenas (20) e 9 unidades (9). A decomposição correta é 5.000 + 700 + 20 + 9."
  },
  {
    id: "MAT-008",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Em uma maratona infantil, o número de inscrição de Pedro é composto por 6 centenas, 4 dezenas e 8 unidades. Qual é o número de Pedro?",
    alternativas: [
      "684",
      "648",
      "468",
      "864"
    ],
    correta: 1,
    comentario: "6 centenas valem 600, 4 dezenas valem 40 e 8 unidades valem 8. Juntando as ordens (600 + 40 + 8), formamos o número 648."
  },
  {
    id: "MAT-009",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "A leitura correta do número 4.035 por extenso é:",
    alternativas: [
      "Quarenta mil e trinta e cinco.",
      "Quatrocentos e trinta e cinco.",
      "Quatro mil trezentos e cinco.",
      "Quatro mil e trinta e cinco."
    ],
    correta: 3,
    comentario: "O número 4.035 possui 4 na ordem dos milhares (quatro mil) e 35 (trinta e cinco). Como não há centenas (algarismo 0), lemos 'quatro mil e trinta e cinco'."
  },
  {
    id: "MAT-010",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Qual é o antecessor imediato (o número que vem logo antes) de 7.000?",
    alternativas: [
      "6.999",
      "6.990",
      "7.001",
      "6.900"
    ],
    correta: 0,
    comentario: "Para encontrar o antecessor de qualquer número, basta subtrair 1 unidade: 7.000 - 1 = 6.999. O número 7.001 é o sucessor (vem logo depois)."
  },
  {
    id: "MAT-011",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "Quatro escolas possuem o seguinte número de alunos matriculados: Escola A = 8.420, Escola B = 8.240, Escola C = 8.402 e Escola D = 8.042. Qual escola tem o maior número de alunos?",
    alternativas: [
      "Escola B (8.240).",
      "Escola A (8.420).",
      "Escola C (8.402).",
      "Escola D (8.042)."
    ],
    correta: 1,
    comentario: "Todas possuem 8 milhares. Comparando as centenas, 8.420 e 8.402 têm 4 centenas. Comparando as dezenas, 8.420 tem 2 dezenas (20) e 8.402 tem 0 dezena. Logo, 8.420 é o maior."
  },
  {
    id: "MAT-012",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Uma fábrica embalou 8 caixas com 1.000 peças, 5 caixas com 100 peças e deixou 3 peças avulsas. Quantas peças foram embaladas ao todo?",
    alternativas: [
      "8.530 peças.",
      "8.053 peças.",
      "8.503 peças.",
      "8.533 peças."
    ],
    correta: 2,
    comentario: "8 caixas de 1.000 = 8.000 peças; 5 caixas de 100 = 500 peças; mais 3 peças avulsas: 8.000 + 500 + 3 = 8.503 peças (com zero na ordem das dezenas)."
  },
  {
    id: "MAT-013",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "No número 9.615, qual algarismo ocupa a ordem das dezenas simples?",
    alternativas: [
      "O algarismo 1.",
      "O algarismo 5.",
      "O algarismo 6.",
      "O algarismo 9."
    ],
    correta: 0,
    comentario: "Analisando as ordens da direita para a esquerda: 5 está nas unidades, 1 está nas dezenas, 6 nas centenas e 9 nos milhares. O algarismo das dezenas é o 1."
  },
  {
    id: "MAT-014",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Em uma reta numérica que avança de 100 em 100, um ponto está marcado exatamente no meio do caminho entre 2.300 e 2.500. Que número esse ponto representa?",
    alternativas: [
      "2.350",
      "2.400",
      "2.450",
      "2.600"
    ],
    correta: 1,
    comentario: "A diferença entre 2.300 e 2.500 é 200. A metade de 200 é 100. Somando 2.300 + 100, encontramos o número 2.400, que fica exatamente no centro."
  },
  {
    id: "MAT-015",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 3,
    enunciado: "Usando os algarismos 3, 9, 1 e 7, sem repetir nenhum deles, qual é o maior número de quatro algarismos que podemos escrever?",
    alternativas: [
      "9.731",
      "9.713",
      "9.371",
      "7.931"
    ],
    correta: 0,
    comentario: "Para formar o maior número possível, ordenamos os algarismos do maior para o menor: 9 nos milhares, 7 nas centenas, 3 nas dezenas e 1 nas unidades, obtendo 9.731."
  },

  // =========================================================================
  // HABILIDADE 2: OPERAÇÕES: ADIÇÃO, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO (10 QUESTÕES)
  // =========================================================================
  {
    id: "MAT-002",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Dona Lúcia comprou 4 pacotes com 25 balas em cada um para a festa da turma. Antes de começar a festa, ela guardou 18 balas para o lanche. Quantas balas restaram para a festa?",
    alternativas: [
      "82 balas.",
      "92 balas.",
      "100 balas.",
      "118 balas."
    ],
    correta: 0,
    comentario: "Primeiro descobrimos o total: 4 x 25 = 100 balas. Depois subtraímos as 18 que foram guardadas: 100 - 18 = 82 balas. Quem marcou 100 esqueceu de subtrair as balas guardadas."
  },
  {
    id: "MAT-016",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 1,
    enunciado: "Na biblioteca da escola havia 1.258 livros de literatura infantil. A diretoria comprou mais 875 livros novos. Quantos livros a biblioteca tem agora?",
    alternativas: [
      "2.023 livros.",
      "2.123 livros.",
      "2.133 livros.",
      "2.143 livros."
    ],
    correta: 2,
    comentario: "Somamos com reagrupamento: 1.258 + 875 = 2.133. Na unidade: 8+5=13 (vai 1); na dezena: 5+7+1=13 (vai 1); na centena: 2+8+1=11 (vai 1); no milhar: 1+1=2. Total: 2.133."
  },
  {
    id: "MAT-017",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Uma gráfica produziu 3.000 ingressos para o festival de teatro da escola. Já foram vendidos 1.645 ingressos. Quantos ingressos ainda faltam ser vendidos?",
    alternativas: [
      "1.455 ingressos.",
      "1.355 ingressos.",
      "1.365 ingressos.",
      "2.355 ingressos."
    ],
    correta: 1,
    comentario: "Fazemos a subtração 3.000 - 1.645 com o reagrupamento das ordens a partir dos milhares. O resultado exato da diferença é 1.355 ingressos."
  },
  {
    id: "MAT-018",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Uma sala de cinema possui 15 fileiras com 24 poltronas em cada fileira. Quantas poltronas há no total nessa sala?",
    alternativas: [
      "340 poltronas.",
      "380 poltronas.",
      "360 poltronas.",
      "240 poltronas."
    ],
    correta: 2,
    comentario: "Multiplicamos 15 x 24. Podemos fazer por partes: 10 x 24 = 240 poltronas e 5 x 24 = 120 poltronas. Somando as duas partes: 240 + 120 = 360 poltronas."
  },
  {
    id: "MAT-019",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "O professor de Educação Física tem 72 bolas de tênis de mesa e vai distribuí-las igualmente entre 6 turmas. Quantas bolas cada turma receberá?",
    alternativas: [
      "12 bolas.",
      "11 bolas.",
      "13 bolas.",
      "14 bolas."
    ],
    correta: 0,
    comentario: "Dividimos 72 por 6. Sabemos que 6 x 10 = 60 e restam 12. Dividindo 12 por 6 obtemos 2. Logo, 10 + 2 = 12 bolas para cada turma."
  },
  {
    id: "MAT-020",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Dona Marta preparou 50 brigadeiros e quer arrumá-los em caixas que comportam exatamente 6 doces cada. Quantas caixas ela conseguirá encher e quantos brigadeiros sobrarão?",
    alternativas: [
      "7 caixas cheias e sobrarão 8 brigadeiros.",
      "8 caixas cheias e sobrarão 2 brigadeiros.",
      "8 caixas cheias e sobrarão 4 brigadeiros.",
      "9 caixas cheias e não sobrará nenhum brigadeiro."
    ],
    correta: 1,
    comentario: "Dividindo 50 por 6: o múltiplo mais próximo sem passar é 48 (6 x 8 = 48). Para chegar a 50 restam 2. Portanto, são 8 caixas cheias e sobram 2 brigadeiros."
  },
  {
    id: "MAT-021",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Mariana tem 18 figurinhas coladas no álbum. Seu amigo Júlio tem o triplo da quantidade de figurinhas de Mariana. Quantas figurinhas Júlio tem?",
    alternativas: [
      "36 figurinhas.",
      "48 figurinhas.",
      "54 figurinhas.",
      "72 figurinhas."
    ],
    correta: 2,
    comentario: "O triplo significa multiplicar por 3: 3 x 18 = 54 figurinhas. Se a pergunta pedisse o dobro, seria 2 x 18 = 36."
  },
  {
    id: "MAT-022",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Um feirante comprou 6 caixas com 30 laranjas em cada uma. No transporte, 15 laranjas estragaram. As laranjas boas restantes foram colocadas em saquinhos com 5 laranjas cada. Quantos saquinhos ele formou?",
    alternativas: [
      "33 saquinhos.",
      "30 saquinhos.",
      "36 saquinhos.",
      "35 saquinhos."
    ],
    correta: 0,
    comentario: "1ª etapa: total de laranjas: 6 x 30 = 180. Tirando as 15 estragadas: 180 - 15 = 165 laranjas boas. 2ª etapa: dividindo em saquinhos de 5: 165 ÷ 5 = 33 saquinhos."
  },
  {
    id: "MAT-023",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Uma caixa de lápis de cor vem com 36 unidades. Lúcia deu a terça parte dos lápis para seu irmão mais novo. Quantos lápis o irmão de Lúcia ganhou?",
    alternativas: [
      "18 lápis.",
      "9 lápis.",
      "12 lápis.",
      "6 lápis."
    ],
    correta: 2,
    comentario: "A terça parte de um número é calculada dividindo-o por 3: 36 ÷ 3 = 12 lápis. Quem respondeu 18 calculou a metade (36 ÷ 2)."
  },
  {
    id: "MAT-024",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Em uma gincana de matemática, a equipe Azul fez 450 pontos. A equipe Verde fez 80 pontos a menos que a Azul. Quantos pontos as duas equipes fizeram juntas?",
    alternativas: [
      "370 pontos.",
      "820 pontos.",
      "980 pontos.",
      "740 pontos."
    ],
    correta: 1,
    comentario: "Primeiro calculamos os pontos da Verde: 450 - 80 = 370 pontos. Em seguida somamos as duas equipes juntas: 450 + 370 = 820 pontos."
  },

  // =========================================================================
  // HABILIDADE 3: FRAÇÕES (10 QUESTÕES)
  // =========================================================================
  {
    id: "MAT-003",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma torta de morango foi fatiada em 8 pedaços exatamente iguais. Durante a comemoração, a família comeu 5 pedaços. Que fração da torta inteira ainda sobrou?",
    alternativas: [
      "5/8 da torta.",
      "3/8 da torta.",
      "8/3 da torta.",
      "3/5 da torta."
    ],
    correta: 1,
    comentario: "A torta inteira tinha 8/8. Como comeram 5 pedaços, sobraram 8 - 5 = 3 pedaços. Portanto, sobraram 3/8 da torta. O denominador 8 representa o total de fatias."
  },
  {
    id: "MAT-025",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 1,
    enunciado: "Uma barra de cereais foi dividida em 4 partes de tamanhos iguais. Carlos comeu 1 dessas partes no lanche. Que fração representa a parte que Carlos comeu?",
    alternativas: [
      "1/4 da barra.",
      "3/4 da barra.",
      "4/1 da barra.",
      "1/3 da barra."
    ],
    correta: 0,
    comentario: "A barra inteira tem 4 partes iguais (denominador 4). Carlos comeu 1 parte (numerador 1). A fração correspondente é 1/4 (um quarto)."
  },
  {
    id: "MAT-026",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 1,
    enunciado: "Como se faz a leitura correta por extenso da fração 3/5?",
    alternativas: [
      "Três sobre cinco.",
      "Três quintos.",
      "Três cinquentas.",
      "Cinco terços."
    ],
    correta: 1,
    comentario: "Na nomenclatura de frações, o numerador 3 é lido como número cardinal ('três') e o denominador 5 é lido como número fracionário ('quintos'): 'três quintos'."
  },
  {
    id: "MAT-027",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma caixa de bombons contém 20 unidades. Helena comeu 1/4 desses bombons. Quantos bombons Helena comeu?",
    alternativas: [
      "4 bombons.",
      "10 bombons.",
      "15 bombons.",
      "5 bombons."
    ],
    correta: 3,
    comentario: "Para calcular a fração de uma quantidade (1/4 de 20), dividimos o total pelo denominador: 20 ÷ 4 = 5 bombons."
  },
  {
    id: "MAT-028",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "A turma do 4º ano tem 30 estudantes. Dois quintos (2/5) desses estudantes usam óculos de grau. Quantos alunos dessa turma usam óculos?",
    alternativas: [
      "6 alunos.",
      "12 alunos.",
      "15 alunos.",
      "10 alunos."
    ],
    correta: 1,
    comentario: "Primeiro calculamos 1/5 de 30: 30 ÷ 5 = 6 alunos. Depois multiplicamos pelo numerador 2 para obter 2/5: 6 x 2 = 12 alunos usam óculos."
  },
  {
    id: "MAT-029",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Quatro crianças pediram pizzas individuais de mesmo tamanho. Lucas comeu 2/8 de sua pizza, Bianca comeu 5/8, Tiago comeu 3/8 e Clara comeu 4/8. Quem comeu a maior quantidade de pizza?",
    alternativas: [
      "Bianca (5/8).",
      "Clara (4/8).",
      "Tiago (3/8).",
      "Lucas (2/8)."
    ],
    correta: 0,
    comentario: "Quando frações têm denominadores iguais (todos divididos em 8), a maior fração é a que possui o maior numerador. Como 5 é maior que 4, 3 e 2, Bianca comeu mais."
  },
  {
    id: "MAT-030",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 1,
    enunciado: "Um bolo foi fatiado em 6 pedaços exatamente iguais. Qual fração representa o bolo inteiro (todas as fatias juntas)?",
    alternativas: [
      "1/6 do bolo.",
      "6/1 do bolo.",
      "6/6 do bolo.",
      "5/6 do bolo."
    ],
    correta: 2,
    comentario: "O bolo inteiro reúne todas as 6 fatias de um total de 6, correspondendo à fração 6/6 (seis sextos), que equivale a 1 inteiro."
  },
  {
    id: "MAT-031",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "No sistema monetário brasileiro, 1 real equivale a 100 centavos. Uma moeda de 50 centavos representa qual fração de 1 real?",
    alternativas: [
      "A metade (1/2 ou 50/100) de 1 real.",
      "A quarta parte (1/4) de 1 real.",
      "A décima parte (1/10) de 1 real.",
      "O dobro de 1 real."
    ],
    correta: 0,
    comentario: "Como 1 real tem 100 centavos, 50 centavos correspondem a 50/100, que simplificado é a metade exata (1/2) de 1 real."
  },
  {
    id: "MAT-032",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Renata pintou 2/7 de uma cerca no sábado e 3/7 da mesma cerca no domingo. Que fração da cerca Renata pintou no total nesses dois dias?",
    alternativas: [
      "5/14 da cerca.",
      "5/7 da cerca.",
      "1/7 da cerca.",
      "6/7 da cerca."
    ],
    correta: 1,
    comentario: "Na adição de frações com o mesmo denominador, somamos apenas os numeradores e conservamos o denominador: 2/7 + 3/7 = 5/7 da cerca."
  },
  {
    id: "MAT-033",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 3,
    enunciado: "Um agricultor plantou milho em 3/10 de seu sítio e feijão em 4/10. O restante do sítio foi reservado para pomar de frutas. Que fração do sítio foi destinada ao pomar?",
    alternativas: [
      "3/10 do sítio.",
      "7/10 do sítio.",
      "4/10 do sítio.",
      "1/10 do sítio."
    ],
    correta: 0,
    comentario: "A área já plantada é 3/10 + 4/10 = 7/10. Como o sítio todo é 10/10, subtraímos: 10/10 - 7/10 = 3/10 reservados para o pomar."
  },

  // =========================================================================
  // HABILIDADE 4: GRANDEZAS E MEDIDAS (10 QUESTÕES)
  // =========================================================================
  {
    id: "MAT-004",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "A sessão de cinema de Beatriz começou pontualmente às 14 horas e 20 minutos e teve uma duração de 1 hora e 30 minutos. A que horas o filme terminou?",
    alternativas: [
      "15 horas e 50 minutos.",
      "15 horas e 40 minutos.",
      "16 horas e 10 minutos.",
      "16 horas e 00 minutos."
    ],
    correta: 0,
    comentario: "Somamos as horas: 14h + 1h = 15h. Depois somamos os minutos: 20 min + 30 min = 50 min. Como 50 minutos não ultrapassa 60, o filme terminou exatamente às 15h50."
  },
  {
    id: "MAT-034",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Quantos minutos há em um intervalo de tempo de 2 horas e 15 minutos?",
    alternativas: [
      "120 minutos.",
      "115 minutos.",
      "135 minutos.",
      "145 minutos."
    ],
    correta: 2,
    comentario: "1 hora tem 60 minutos, portanto 2 horas equivalem a 2 x 60 = 120 minutos. Somando os 15 minutos restantes: 120 + 15 = 135 minutos."
  },
  {
    id: "MAT-035",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Júlia foi à papelaria e comprou um caderno que custava R$ 14,50. Ela pagou com uma cédula de R$ 20,00. Quanto Júlia recebeu de troco?",
    alternativas: [
      "R$ 6,50",
      "R$ 5,50",
      "R$ 5,00",
      "R$ 4,50"
    ],
    correta: 1,
    comentario: "Calculamos a subtração: R$ 20,00 - R$ 14,50 = R$ 5,50 de troco. Quem marcou R$ 6,50 esqueceu de subtrair os 50 centavos."
  },
  {
    id: "MAT-036",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Uma professora esticou uma fita métrica de 1 metro sobre a mesa. Quantos centímetros mede essa fita de 1 metro?",
    alternativas: [
      "10 centímetros.",
      "100 centímetros.",
      "1.000 centímetros.",
      "50 centímetros."
    ],
    correta: 1,
    comentario: "Pela relação fundamental do sistema métrico decimal, 1 metro é composto exatamente por 100 centímetros (1 m = 100 cm)."
  },
  {
    id: "MAT-037",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Dona Neusa comprou um pacote de farinha de trigo com 1 quilograma (1 kg). Ela usou 350 gramas para assar uma torta. Quantas gramas de farinha ainda restam no pacote?",
    alternativas: [
      "650 gramas.",
      "750 gramas.",
      "550 gramas.",
      "600 gramas."
    ],
    correta: 0,
    comentario: "1 quilograma (kg) é igual a 1.000 gramas (g). Subtraindo a parte usada na torta: 1.000 g - 350 g = 650 gramas restantes no pacote."
  },
  {
    id: "MAT-038",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Uma jarra de suco de laranja contém exatamente 1 litro. Quantos copos de 250 mililitros (ml) podem ser enchidos completamente com todo esse suco?",
    alternativas: [
      "2 copos.",
      "3 copos.",
      "4 copos.",
      "5 copos."
    ],
    correta: 2,
    comentario: "1 litro corresponde a 1.000 ml. Dividindo 1.000 ml por 250 ml: 250 + 250 + 250 + 250 = 1.000. Logo, enchem-se exatamente 4 copos."
  },
  {
    id: "MAT-039",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Um canteiro retangular de hortaliças na escola mede 5 metros de comprimento por 3 metros de largura. Quantos metros de cerca de arame são necessários para contornar todo o canteiro (perímetro)?",
    alternativas: [
      "15 metros.",
      "16 metros.",
      "8 metros.",
      "24 metros."
    ],
    correta: 1,
    comentario: "O perímetro é a soma dos 4 lados do retângulo: 5 + 3 + 5 + 3 = 16 metros. Quem marcou 15 metros calculou a área (5 x 3) em vez do contorno."
  },
  {
    id: "MAT-040",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "As férias escolares de Bruno duraram exatamente 3 semanas completas. Quantos dias duraram as férias de Bruno?",
    alternativas: [
      "15 dias.",
      "18 dias.",
      "21 dias.",
      "24 dias."
    ],
    correta: 2,
    comentario: "Sabemos que cada semana possui 7 dias no calendário. Para 3 semanas completas, calculamos: 3 x 7 = 21 dias de férias."
  },
  {
    id: "MAT-041",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Lucas abriu o cofrinho e encontrou 6 moedas de 50 centavos e 8 moedas de 25 centavos. Qual é a quantia total em dinheiro que Lucas tem?",
    alternativas: [
      "R$ 5,00",
      "R$ 4,50",
      "R$ 6,00",
      "R$ 5,50"
    ],
    correta: 0,
    comentario: "6 moedas de 50 centavos somam R$ 3,00 (6 x 0,50). 8 moedas de 25 centavos somam R$ 2,00 (8 x 0,25). Somando os valores: R$ 3,00 + R$ 2,00 = R$ 5,00."
  },
  {
    id: "MAT-042",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Uma ciclovia tem 3 quilômetros de comprimento. Se um ciclista percorreu a ciclovia de ponta a ponta, quantos metros ele pedalou?",
    alternativas: [
      "300 metros.",
      "30.000 metros.",
      "3.000 metros.",
      "30 metros."
    ],
    correta: 2,
    comentario: "1 quilômetro (km) equivale a 1.000 metros. Portanto, 3 quilômetros equivalem a 3 x 1.000 = 3.000 metros pedalados."
  },

  // =========================================================================
  // HABILIDADE 5: GEOMETRIA (10 QUESTÕES)
  // =========================================================================
  {
    id: "MAT-005",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Mateus estava observando um dado comum de brincar de tabuleiro. Esse dado tem a forma de um cubo. Quantas faces (lados planos) possui um cubo?",
    alternativas: [
      "4 faces planas.",
      "6 faces planas.",
      "8 faces planas.",
      "12 faces planas."
    ],
    correta: 1,
    comentario: "O cubo possui 6 faces quadradas idênticas (como as faces numeradas de 1 a 6 de um dado). Ele tem também 8 vértices e 12 arestas, mas a pergunta pediu as faces."
  },
  {
    id: "MAT-043",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "O triângulo é uma figura geométrica plana que possui exatamente:",
    alternativas: [
      "3 lados e 3 vértices.",
      "4 lados e 4 vértices.",
      "3 lados e 4 vértices.",
      "5 lados e 3 vértices."
    ],
    correta: 0,
    comentario: "O triângulo é o polígono com menor número de lados: é formado por 3 segmentos de reta (lados) que se encontram em 3 pontas (vértices)."
  },
  {
    id: "MAT-044",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Dentre os objetos do cotidiano a seguir, qual deles tem o formato de uma esfera?",
    alternativas: [
      "Uma caixa de sapatos de papelão.",
      "Uma bola de futebol infantil.",
      "Uma lata cilíndrica de achocolatado.",
      "Um chapéu em formato de cone."
    ],
    correta: 1,
    comentario: "A bola de futebol é perfeitamente arredondada em todas as direções, sendo uma esfera. A caixa é um bloco retangular e a lata é um cilindro."
  },
  {
    id: "MAT-045",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Uma lata de milho em conserva possui duas bases circulares planas idênticas e uma superfície lateral curva arredondada. Esse sólido geométrico chama-se:",
    alternativas: [
      "Cone.",
      "Pirâmide.",
      "Cilindro.",
      "Cubo."
    ],
    correta: 2,
    comentario: "O sólido geométrico que tem duas bases circulares paralelas iguais e uma face lateral curva que rola com facilidade é o cilindro."
  },
  {
    id: "MAT-046",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "O quadrado e o retângulo pertencem à mesma família de polígonos, chamada de quadriláteros, porque ambos possuem:",
    alternativas: [
      "Exatamente 4 lados retos.",
      "Exatamente 3 lados retos.",
      "Exatamente 5 lados retos.",
      "Lados arredondados sem nenhum vértice."
    ],
    correta: 0,
    comentario: "Quadriláteros são figuras planas fechadas formadas por exatamente 4 segmentos de reta (4 lados). Quadrados e retângulos têm 4 lados."
  },
  {
    id: "MAT-047",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Quantos vértices (pontas onde as arestas se encontram) possui uma caixa cúbica?",
    alternativas: [
      "6 vértices.",
      "8 vértices.",
      "12 vértices.",
      "4 vértices."
    ],
    correta: 1,
    comentario: "O cubo tem 8 vértices (4 no topo e 4 na base). Ele tem também 6 faces e 12 arestas, mas a pergunta pede os vértices."
  },
  {
    id: "MAT-048",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "O canto retilíneo de uma folha de caderno ou a quina perfeita de uma janela de vidro forma um ângulo de 90 graus conhecido como:",
    alternativas: [
      "Ângulo reto.",
      "Ângulo curvo.",
      "Ângulo aberto sem ponta.",
      "Ângulo circular."
    ],
    correta: 0,
    comentario: "Os cantos que têm formato de 'L' bem certinho formam um ângulo de 90 graus, denominado pela geometria de ângulo reto."
  },
  {
    id: "MAT-049",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Uma figura geométrica possui simetria quando podemos traçar uma reta (eixo de simetria) que a divide em:",
    alternativas: [
      "Três partes de tamanhos desiguais.",
      "Duas metades idênticas que coincidem ao serem dobradas.",
      "Uma parte minúscula e outra enorme.",
      "Quatro pedaços que não se encaixam."
    ],
    correta: 1,
    comentario: "O eixo de simetria divide a figura em duas partes perfeitamente espelhadas e iguais, que se sobrepõem com precisão se dobrarmos ao meio."
  },
  {
    id: "MAT-050",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Em uma folha de malha quadriculada onde cada quadradinho mede 1 cm² de área, Paulo pintou uma figura que ocupa 14 quadradinhos inteiros. Qual é a área dessa figura?",
    alternativas: [
      "28 cm²",
      "7 cm²",
      "14 cm²",
      "12 cm²"
    ],
    correta: 2,
    comentario: "Se cada quadradinho da malha representa 1 cm², o conjunto de 14 quadradinhos inteiros cobertos terá uma área de 14 cm²."
  },
  {
    id: "MAT-051",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Uma pirâmide cuja base é um quadrado perfeito possui, além da base quadrada, quantas faces triangulares laterais?",
    alternativas: [
      "4 faces triangulares laterais.",
      "3 faces triangulares laterais.",
      "5 faces triangulares laterais.",
      "6 faces triangulares laterais."
    ],
    correta: 0,
    comentario: "Como a base é um quadrado (que possui 4 lados), de cada um dos lados sobe uma face triangular que se junta no topo, totalizando 4 faces triangulares."
  },

  // =========================================================================
  // HABILIDADE 6: TABELAS, GRÁFICOS E RACIOCÍNIO LÓGICO (10 QUESTÕES)
  // =========================================================================
  {
    id: "MAT-006",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Quantidade de livros lidos no mês pelas turmas do 4º ano:\n• Turma 401: 34 livros\n• Turma 402: 48 livros\n• Turma 403: 26 livros\n• Turma 404: 50 livros",
    enunciado: "De acordo com os dados apresentados, quantos livros a Turma 402 leu a mais do que a Turma 403?",
    alternativas: [
      "12 livros a mais.",
      "22 livros a mais.",
      "24 livros a mais.",
      "74 livros a mais."
    ],
    correta: 1,
    comentario: "A Turma 402 leu 48 livros e a Turma 403 leu 26 livros. Para saber a quantidade a mais, calculamos a diferença: 48 - 26 = 22 livros. A opção 74 seria a soma errônea das duas."
  },
  {
    id: "MAT-052",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 1,
    apoio: "Pontuação das equipes nos jogos de tabuleiro no recreio:\n• Equipe Amarela: 45 pontos\n• Equipe Vermelha: 52 pontos\n• Equipe Verde: 38 pontos\n• Equipe Azul: 60 pontos",
    enunciado: "Consultando os dados da tabela, qual equipe alcançou a maior pontuação nos jogos?",
    alternativas: [
      "Equipe Vermelha (52 pontos).",
      "Equipe Amarela (45 pontos).",
      "Equipe Azul (60 pontos).",
      "Equipe Verde (38 pontos)."
    ],
    correta: 2,
    comentario: "Comparando os valores das pontuações (45, 52, 38 e 60), 60 é o maior número da tabela, pertencendo à Equipe Azul."
  },
  {
    id: "MAT-053",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Votação do sabor de sorvete preferido na turma do 4º ano:\n• Chocolate: 18 votos\n• Morango: 14 votos\n• Baunilha: 8 votos\n• Flocos: 10 votos",
    enunciado: "De acordo com a votação, quantos votos o sabor Chocolate recebeu a mais que o sabor Baunilha?",
    alternativas: [
      "10 votos a mais.",
      "8 votos a mais.",
      "12 votos a mais.",
      "26 votos a mais."
    ],
    correta: 0,
    comentario: "Chocolate obteve 18 votos e Baunilha obteve 8 votos. Para calcular quantos votos a mais Chocolate teve, fazemos: 18 - 8 = 10 votos."
  },
  {
    id: "MAT-054",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 1,
    enunciado: "Dentro de uma sacola escura há 10 bolinhas azuis, 2 bolinhas amarelas e nenhuma bolinha vermelha. Ao retirar uma bolinha sem olhar, é um evento IMPOSSÍVEL sair uma bolinha:",
    alternativas: [
      "Azul.",
      "Amarela.",
      "Vermelha.",
      "Redonda."
    ],
    correta: 2,
    comentario: "Como não existe nenhuma bolinha vermelha dentro da sacola, é completamente impossível retirar uma bolinha dessa cor."
  },
  {
    id: "MAT-055",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    enunciado: "Uma roleta de brinquedo possui 7 setores pintados de verde e apenas 1 setor pintado de branco. Ao girar a roleta, é MAIS PROVÁVEL que a seta pare na cor:",
    alternativas: [
      "Branca.",
      "Verde.",
      "Preta.",
      "Amarela."
    ],
    correta: 1,
    comentario: "Como o verde ocupa 7 das 8 partes da roleta (quase a totalidade), a chance de a roleta parar no verde é muito maior do que no branco."
  },
  {
    id: "MAT-056",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Animais atendidos na clínica veterinária no fim de semana:\n• Sábado: 12 cães e 8 gatos\n• Domingo: 15 cães e 5 gatos",
    enunciado: "Quantos animais (cães e gatos juntos) foram atendidos no total durante todo o fim de semana?",
    alternativas: [
      "35 animais.",
      "40 animais.",
      "27 animais.",
      "45 animais."
    ],
    correta: 1,
    comentario: "Calculamos por dia: no sábado foram 12 + 8 = 20 animais; no domingo foram 15 + 5 = 20 animais. Somando sábado e domingo: 20 + 20 = 40 animais."
  },
  {
    id: "MAT-057",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 1,
    enunciado: "Observe o padrão da sequência numérica: 105, 115, 125, 135, ____. Qual é o próximo número dessa sequência?",
    alternativas: [
      "140",
      "150",
      "145",
      "155"
    ],
    correta: 2,
    comentario: "A sequência aumenta de 10 em 10 (+10 a cada termo): 105 + 10 = 115; 115 + 10 = 125; 125 + 10 = 135. Logo, 135 + 10 = 145."
  },
  {
    id: "MAT-058",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 3,
    enunciado: "Para montar o lanche, Lucas pode escolher 1 tipo de suco (laranja ou uva) e 1 tipo de sanduíche (queijo, frango ou atum). De quantas maneiras diferentes Lucas pode montar seu lanche?",
    alternativas: [
      "6 maneiras diferentes.",
      "5 maneiras diferentes.",
      "4 maneiras diferentes.",
      "8 maneiras diferentes."
    ],
    correta: 0,
    comentario: "Pelo princípio multiplicativo: 2 opções de suco multiplicadas por 3 opções de sanduíche resultam em 2 x 3 = 6 combinações diferentes de lanche."
  },
  {
    id: "MAT-059",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Pontuação da gincana de reciclagem escolar:\n• Turma 41: 120 pontos na 1ª etapa e 140 pontos na 2ª etapa\n• Turma 42: 150 pontos na 1ª etapa e 130 pontos na 2ª etapa",
    enunciado: "Comparando a soma total das duas etapas, qual foi o resultado final entre as turmas?",
    alternativas: [
      "A Turma 41 venceu com 270 pontos contra 260 da Turma 42.",
      "A Turma 42 venceu com 280 pontos contra 260 da Turma 41.",
      "Houve empate entre as duas turmas com 270 pontos.",
      "A Turma 42 venceu por uma diferença de 40 pontos."
    ],
    correta: 1,
    comentario: "Turma 41 totalizou 120 + 140 = 260 pontos. Turma 42 totalizou 150 + 130 = 280 pontos. Portanto, a Turma 42 foi a vencedora com 280 pontos contra 260 da Turma 41."
  },
  {
    id: "MAT-060",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    enunciado: "Ao lançar uma moeda comum e honesta para cima, o que podemos afirmar sobre as chances de cair 'cara' ou 'coroa'?",
    alternativas: [
      "É mais provável cair 'cara' do que 'coroa'.",
      "É impossível sair o lado 'coroa'.",
      "É certeza absoluta que sempre sairá 'cara'.",
      "As chances são rigorosamente iguais para os dois lados."
    ],
    correta: 3,
    comentario: "Uma moeda comum tem dois lados balanceados. Portanto, a probabilidade de cair 'cara' ou 'coroa' é rigorosamente idêntica (chances iguais de 50%)."
  }
];
