import { Questao } from '../types';

/**
 * BANCO COMPLEMENTAR DE MATEMÁTICA - 60 QUESTÕES (MAT-061 a MAT-120)
 * Totaliza 20 questões por temática/habilidade junto com o banco base (total 120 questões de Matemática).
 * Todas com nível 4º ano, distratores plausíveis, sem repetições e com desafios de nível 3.
 */
export const QUESTOES_MATEMATICA_EXTRA: Questao[] = [
  // =========================================================================
  // HABILIDADE 1: Números, valor posicional e composição/decomposição (MAT-061 a MAT-070)
  // =========================================================================
  {
    id: "MAT-061",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "O número 6.084 é formado por:",
    alternativas: [
      "6 milhares, 8 dezenas e 4 unidades.",
      "6 centenas, 8 dezenas e 4 unidades.",
      "6 milhares, 8 centenas e 4 unidades.",
      "60 centenas e 84 dezenas."
    ],
    correta: 0,
    comentario: "No número 6.084 temos 6 na ordem dos milhares (6.000), 0 nas centenas, 8 nas dezenas (80) e 4 nas unidades. Logo: 6 milhares, 8 dezenas e 4 unidades."
  },
  {
    id: "MAT-062",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Qual número é exatamente 200 unidades menor do que 4.530?",
    alternativas: [
      "4.330",
      "4.730",
      "4.510",
      "4.350"
    ],
    correta: 0,
    comentario: "Subtraímos 200 de 4.530: 4.530 - 200 = 4.330. Quem marcou 4.730 somou em vez de subtrair."
  },
  {
    id: "MAT-063",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 3,
    enunciado: "Um número misterioso tem 4 algarismos. O algarismo dos milhares é 7, o das centenas é 2, o das dezenas é o dobro das centenas e o das unidades é 1. Que número é esse?",
    alternativas: [
      "7.241",
      "7.421",
      "7.221",
      "7.441"
    ],
    correta: 0,
    comentario: "Milhares = 7, centenas = 2. O dobro de 2 é 4 (dezenas = 4). Unidades = 1. Juntando as ordens: 7.241."
  },
  {
    id: "MAT-064",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "Qual é o sucessor imediato (o número que vem logo depois) de 8.999?",
    alternativas: [
      "9.000",
      "8.998",
      "9.999",
      "9.001"
    ],
    correta: 0,
    comentario: "O sucessor é obtido somando 1 unidade: 8.999 + 1 = 9.000. O número 8.998 é o antecessor."
  },
  {
    id: "MAT-065",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Ao trocar a posição dos algarismos das dezenas e dos milhares no número 3.852, qual novo número obtemos?",
    alternativas: [
      "5.832",
      "2.853",
      "3.582",
      "5.382"
    ],
    correta: 0,
    comentario: "O algarismo dos milhares é 3 e o das dezenas é 5. Trocando de lugar entre si, o 5 vai para os milhares e o 3 para as dezenas: 5.832."
  },
  {
    id: "MAT-066",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 3,
    enunciado: "Em uma gincana de matemática, quatro cartões tinham os números 3.419, 3.491, 3.149 e 3.914. Organizando em ordem CRESCENTE (do menor para o maior), qual é a sequência correta?",
    alternativas: [
      "3.149 < 3.419 < 3.491 < 3.914",
      "3.914 < 3.491 < 3.419 < 3.149",
      "3.149 < 3.491 < 3.419 < 3.914",
      "3.419 < 3.149 < 3.491 < 3.914"
    ],
    correta: 0,
    comentario: "Comparando as centenas: 3.149 é o menor (1 centena). Entre 3.419 e 3.491, 3.419 tem 1 dezena e 3.491 tem 9 dezenas. Por fim, 3.914 (9 centenas). Ordem: 3.149 < 3.419 < 3.491 < 3.914."
  },
  {
    id: "MAT-067",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Quantas centenas completas existem no número 2.500?",
    alternativas: [
      "25 centenas.",
      "5 centenas.",
      "250 centenas.",
      "2 centenas."
    ],
    correta: 0,
    comentario: "Cada centena vale 100. Dividindo 2.500 por 100 encontramos 25 centenas completas (pois 25 x 100 = 2.500)."
  },
  {
    id: "MAT-068",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 3,
    enunciado: "Dona Ester guardou R$ 4.000 em notas de 100 reais. Quantas cédulas de 100 reais ela tem guardadas?",
    alternativas: [
      "40 cédulas.",
      "4 cédulas.",
      "400 cédulas.",
      "14 cédulas."
    ],
    correta: 0,
    comentario: "Como cada nota vale 100 reais, calculamos 4.000 ÷ 100 = 40 cédulas de 100 reais."
  },
  {
    id: "MAT-069",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "A decomposição 8 x 1.000 + 3 x 100 + 7 x 1 representa qual número?",
    alternativas: [
      "8.307",
      "8.370",
      "8.037",
      "8.377"
    ],
    correta: 0,
    comentario: "8 x 1.000 = 8.000; 3 x 100 = 300; 7 x 1 = 7. Somando: 8.000 + 300 + 7 = 8.307 (com zero na ordem das dezenas)."
  },
  {
    id: "MAT-070",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 3,
    enunciado: "Com os algarismos 5, 0, 8 e 2, sem repetir nenhum, qual é o MENOR número de quatro algarismos que podemos formar?",
    alternativas: [
      "2.058",
      "0.258",
      "2.508",
      "2.085"
    ],
    correta: 0,
    comentario: "Um número de quatro algarismos não pode começar com zero nos milhares. O menor algarismo disponível diferente de zero é o 2. Depois usamos 0, 5 e 8 na ordem crescente: 2.058."
  },

  // =========================================================================
  // HABILIDADE 2: Operações: adição, subtração, multiplicação e divisão (MAT-071 a MAT-080)
  // =========================================================================
  {
    id: "MAT-071",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Em uma fábrica de sucos, uma máquina envasa 48 garrafas por minuto. Quantas garrafas essa máquina envasará em 5 minutos de funcionamento contínuo?",
    alternativas: [
      "240 garrafas.",
      "200 garrafas.",
      "250 garrafas.",
      "290 garrafas."
    ],
    correta: 0,
    comentario: "Multiplicamos 48 x 5. Fazendo por decomposição: 40 x 5 = 200 e 8 x 5 = 40. Somando: 200 + 40 = 240 garrafas."
  },
  {
    id: "MAT-072",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 1,
    enunciado: "Uma livraria vendeu 345 livros infantis na semana passada e 480 livros nesta semana. Quantos livros foram vendidos ao todo nessas duas semanas?",
    alternativas: [
      "825 livros.",
      "815 livros.",
      "725 livros.",
      "835 livros."
    ],
    correta: 0,
    comentario: "Somamos: 345 + 480. Unidades: 5+0=5. Dezenas: 4+8=12 (fica 2 e vai 1 centena). Centenas: 3+4+1=8. Total: 825 livros."
  },
  {
    id: "MAT-073",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Rodrigo tinha 95 figurinhas. Ele comprou 4 pacotes com 6 figurinhas em cada um e depois deu 15 figurinhas repetidas para seu primo. Com quantas figurinhas Rodrigo ficou no final?",
    alternativas: [
      "104 figurinhas.",
      "119 figurinhas.",
      "109 figurinhas.",
      "94 figurinhas."
    ],
    correta: 0,
    comentario: "1º calculamos as figurinhas novas compradas: 4 x 6 = 24. Somamos ao que tinha: 95 + 24 = 119. Depois subtraímos as 15 dadas: 119 - 15 = 104 figurinhas."
  },
  {
    id: "MAT-074",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Ao dividir 86 bombons igualmente entre 4 amigos, quantos bombons cada amigo receberá e quantos bombons sobrarão?",
    alternativas: [
      "21 bombons para cada um e sobram 2.",
      "20 bombons para cada um e sobram 6.",
      "22 bombons para cada um e sobra 1.",
      "21 bombons para cada um e não sobra nada."
    ],
    correta: 0,
    comentario: "Dividindo 86 por 4: 4 x 20 = 80 e 4 x 1 = 4 (total 84). De 84 para 86 sobram 2 bombons. Logo, cada um recebe 21 e sobram 2."
  },
  {
    id: "MAT-075",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Uma escola comprou 5 caixas com 36 cadernos em cada uma. A diretoria distribuiu esses cadernos igualmente entre as 6 turmas do 4º ano. Quantos cadernos cada turma recebeu?",
    alternativas: [
      "30 cadernos.",
      "25 cadernos.",
      "35 cadernos.",
      "36 cadernos."
    ],
    correta: 0,
    comentario: "1ª etapa: total de cadernos: 5 x 36 = 180 cadernos. 2ª etapa: dividindo entre as 6 turmas: 180 ÷ 6 = 30 cadernos por turma."
  },
  {
    id: "MAT-076",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "O dobro da quantidade de lápis de Luísa é igual a 38. Quantos lápis Luísa possui?",
    alternativas: [
      "19 lápis.",
      "76 lápis.",
      "18 lápis.",
      "14 lápis."
    ],
    correta: 0,
    comentario: "Se o dobro é 38, para achar a quantidade original basta calcular a metade: 38 ÷ 2 = 19 lápis. Quem marcou 76 multiplicou por 2 em vez de dividir."
  },
  {
    id: "MAT-077",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Para o passeio do zoológico, 135 alunos serão transportados em vans que comportam no máximo 9 alunos por viagem. Quantas viagens completas essas vans precisarão fazer para levar todos os alunos?",
    alternativas: [
      "15 viagens.",
      "12 viagens.",
      "14 viagens.",
      "16 viagens."
    ],
    correta: 0,
    comentario: "Dividimos o total de alunos pela capacidade da van: 135 ÷ 9 = 15 viagens completas."
  },
  {
    id: "MAT-078",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 1,
    enunciado: "Um agricultor colheu 1.500 espigas de milho pela manhã e 850 espigas à tarde. Durante a separação, 200 espigas estragadas foram descartadas. Quantas espigas boas restaram?",
    alternativas: [
      "2.150 espigas.",
      "2.350 espigas.",
      "2.050 espigas.",
      "1.950 espigas."
    ],
    correta: 0,
    comentario: "Total colhido: 1.500 + 850 = 2.350 espigas. Tirando as 200 estragadas: 2.350 - 200 = 2.150 espigas boas."
  },
  {
    id: "MAT-079",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Dona Maria comprou 3 caixas de sabonetes por R$ 24,00 no total. Quanto ela pagaria se comprasse 5 caixas desses mesmos sabonetes?",
    alternativas: [
      "R$ 40,00",
      "R$ 35,00",
      "R$ 48,00",
      "R$ 30,00"
    ],
    correta: 0,
    comentario: "1ª etapa: preço de cada caixa: 24 ÷ 3 = R$ 8,00. 2ª etapa: preço de 5 caixas: 5 x 8 = R$ 40,00."
  },
  {
    id: "MAT-080",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Em uma floricultura havia 240 rosas vermelhas e brancas. Três quartos (3/4) dessas rosas eram vermelhas. Quantas rosas vermelhas havia na floricultura?",
    alternativas: [
      "180 rosas vermelhas.",
      "60 rosas vermelhas.",
      "120 rosas vermelhas.",
      "200 rosas vermelhas."
    ],
    correta: 0,
    comentario: "Calculamos 1/4 de 240: 240 ÷ 4 = 60 rosas. Como 3/4 eram vermelhas: 3 x 60 = 180 rosas vermelhas."
  },

  // =========================================================================
  // HABILIDADE 3: Frações (MAT-081 a MAT-090)
  // =========================================================================
  {
    id: "MAT-081",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 1,
    enunciado: "Uma maçã foi cortada em 2 pedaços exatamente iguais. Cada pedaço representa qual fração da maçã inteira?",
    alternativas: [
      "1/2 (um meio).",
      "1/4 (um quarto).",
      "2/1 (dois inteiros).",
      "1/3 (um terço)."
    ],
    correta: 0,
    comentario: "Dividir algo em 2 partes iguais e pegar 1 significa pegar a metade, representada matematicamente pela fração 1/2."
  },
  {
    id: "MAT-082",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma barra de chocolate tem 12 quadradinhos iguais. Larissa comeu 1/3 da barra. Quantos quadradinhos Larissa comeu?",
    alternativas: [
      "4 quadradinhos.",
      "3 quadradinhos.",
      "6 quadradinhos.",
      "8 quadradinhos."
    ],
    correta: 0,
    comentario: "Para calcular 1/3 de 12, dividimos o total por 3: 12 ÷ 3 = 4 quadradinhos."
  },
  {
    id: "MAT-083",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Qual das seguintes frações é a MAIOR: 1/6, 3/6, 5/6 ou 4/6?",
    alternativas: [
      "5/6",
      "4/6",
      "3/6",
      "1/6"
    ],
    correta: 0,
    comentario: "Quando os denominadores são todos iguais (neste caso, 6), a maior fração é a que possui o maior numerador. Como 5 é o maior, 5/6 é a maior fração."
  },
  {
    id: "MAT-084",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 1,
    enunciado: "Em uma fração como 4/7, como é chamado o número 7 que fica na parte de baixo?",
    alternativas: [
      "Denominador.",
      "Numerador.",
      "Divisor decimal.",
      "Fator multiplicador."
    ],
    correta: 0,
    comentario: "O número de baixo é o denominador (indica em quantas partes o todo foi dividido) e o número de cima é o numerador (quantas partes foram consideradas)."
  },
  {
    id: "MAT-085",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 3,
    enunciado: "Em um aquário com 30 peixinhos coloridos, 2/6 são dourados e 3/6 são prateados. O restante dos peixinhos é azul. Quantos peixinhos azuis há no aquário?",
    alternativas: [
      "5 peixinhos.",
      "10 peixinhos.",
      "15 peixinhos.",
      "8 peixinhos."
    ],
    correta: 0,
    comentario: "Dourados e prateados somam: 2/6 + 3/6 = 5/6. Logo, resta 1/6 para os peixinhos azuis. Calculando 1/6 de 30: 30 ÷ 6 = 5 peixinhos azuis."
  },
  {
    id: "MAT-086",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Na reta numérica entre os números 0 e 1, a fração 1/2 fica localizada:",
    alternativas: [
      "Exatamente no ponto médio (metade do caminho).",
      "Bem perto do número 0.",
      "Depois do número 1.",
      "Exatamente sobre o número 1."
    ],
    correta: 0,
    comentario: "1/2 representa exatamente a metade entre 0 e 1, ficando centralizada no ponto médio da reta numérica."
  },
  {
    id: "MAT-087",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 3,
    enunciado: "Dona Sônia fez uma torta salgada e dividiu em 10 pedaços iguais. No almoço comeram 6/10 da torta e no jantar comeram 3/10. Que fração da torta sobrou?",
    alternativas: [
      "1/10 da torta.",
      "9/10 da torta.",
      "2/10 da torta.",
      "3/10 da torta."
    ],
    correta: 0,
    comentario: "Comeram no total: 6/10 + 3/10 = 9/10. A torta inteira é 10/10. Subtraindo o que foi comido: 10/10 - 9/10 = 1/10 da torta sobrou."
  },
  {
    id: "MAT-088",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma jarra tem capacidade para 1 litro de água. Se ela está com 3/4 de sua capacidade cheia, quantos quartos ainda faltam para enchê-la completamente?",
    alternativas: [
      "1/4",
      "2/4",
      "3/4",
      "4/4"
    ],
    correta: 0,
    comentario: "A jarra cheia inteira equivale a 4/4. Como já tem 3/4, calculamos: 4/4 - 3/4 = 1/4 restante para encher."
  },
  {
    id: "MAT-089",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 1,
    enunciado: "Como se escreve em forma de fração 'sete décimos'?",
    alternativas: [
      "7/10",
      "10/7",
      "7/100",
      "70/10"
    ],
    correta: 0,
    comentario: "'Sete' é o numerador (em cima) e 'décimos' representa o denominador 10 (embaixo), formando 7/10."
  },
  {
    id: "MAT-090",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 3,
    enunciado: "Em uma corrida de atletismo de 400 metros, Pedro já correu 3/4 do trajeto. Quantos metros ainda faltam para Pedro cruzar a linha de chegada?",
    alternativas: [
      "100 metros.",
      "300 metros.",
      "200 metros.",
      "50 metros."
    ],
    correta: 0,
    comentario: "Se ele já correu 3/4, ainda falta 1/4 do percurso. Calculamos 1/4 de 400: 400 ÷ 4 = 100 metros restantes."
  },

  // =========================================================================
  // HABILIDADE 4: Grandezas e medidas (MAT-091 a MAT-100)
  // =========================================================================
  {
    id: "MAT-091",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Quantos centímetros há em uma régua escolar de 30 centímetros?",
    alternativas: [
      "30 centímetros.",
      "300 centímetros.",
      "3 centímetros.",
      "100 centímetros."
    ],
    correta: 0,
    comentario: "A própria régua de 30 cm mede exatamente 30 centímetros, correspondendo a 300 milímetros."
  },
  {
    id: "MAT-092",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Uma partida de futebol infantil começou às 15h15 e teve dois tempos de 25 minutos, com um intervalo de 10 minutos entre eles. A que horas a partida terminou?",
    alternativas: [
      "16h15",
      "16h05",
      "16h25",
      "15h55"
    ],
    correta: 0,
    comentario: "Tempo total da partida: 25 min + 10 min de intervalo + 25 min = 60 minutos (1 hora inteira). Começando às 15h15 + 1h = 16h15."
  },
  {
    id: "MAT-093",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Dona Célia comprou 2 kg de batatas, 1 kg e meio (1,5 kg) de cenouras e 500 g de alho. Qual foi a massa total das compras em quilogramas?",
    alternativas: [
      "4 kg",
      "3,5 kg",
      "4,5 kg",
      "5 kg"
    ],
    correta: 0,
    comentario: "500 gramas equivalem a meio quilo (0,5 kg). Somando: 2 kg + 1,5 kg + 0,5 kg = 4 kg de alimentos comprados."
  },
  {
    id: "MAT-094",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 3,
    enunciado: "Um caminhão-pipa transporta 5.000 litros de água. Ele abasteceu uma caixa d'água de escola com 3.250 litros. Quantos litros de água restaram no caminhão?",
    alternativas: [
      "1.750 litros.",
      "1.850 litros.",
      "2.250 litros.",
      "1.650 litros."
    ],
    correta: 0,
    comentario: "Subtraímos com reagrupamento: 5.000 - 3.250 = 1.750 litros restantes."
  },
  {
    id: "MAT-095",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Um ano comum no calendário possui quantos meses?",
    alternativas: [
      "12 meses.",
      "10 meses.",
      "24 meses.",
      "365 meses."
    ],
    correta: 0,
    comentario: "O ano no nosso calendário é composto por exatamente 12 meses (de janeiro a dezembro). 365 é o número de dias."
  },
  {
    id: "MAT-096",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Felipe comprou um brinquedo por R$ 36,00 e pagou com duas notas de R$ 20,00. Quanto ele recebeu de troco?",
    alternativas: [
      "R$ 4,00",
      "R$ 6,00",
      "R$ 14,00",
      "R$ 2,00"
    ],
    correta: 0,
    comentario: "Duas notas de R$ 20,00 somam R$ 40,00. Calculando o troco: R$ 40,00 - R$ 36,00 = R$ 4,00."
  },
  {
    id: "MAT-097",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 3,
    enunciado: "Uma fita colorida de 2 metros de comprimento foi cortada em pedaços de 20 centímetros cada um para enfeitar uma festa. Quantos pedaços foram obtidos?",
    alternativas: [
      "10 pedaços.",
      "8 pedaços.",
      "12 pedaços.",
      "20 pedaços."
    ],
    correta: 0,
    comentario: "2 metros equivalem a 200 centímetros (2 x 100 cm). Dividindo pelo tamanho de cada pedaço: 200 ÷ 20 = 10 pedaços."
  },
  {
    id: "MAT-098",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Um retângulo possui 8 metros de comprimento e 5 metros de largura. Qual é o perímetro desse retângulo?",
    alternativas: [
      "26 metros.",
      "40 metros.",
      "13 metros.",
      "28 metros."
    ],
    correta: 0,
    comentario: "O perímetro é a soma de todos os lados: 8 + 5 + 8 + 5 = 26 metros. 40 metros quadrados seria a área (8 x 5)."
  },
  {
    id: "MAT-099",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Quantos segundos há em um intervalo de tempo de 3 minutos?",
    alternativas: [
      "180 segundos.",
      "120 segundos.",
      "60 segundos.",
      "300 segundos."
    ],
    correta: 0,
    comentario: "1 minuto tem 60 segundos. Para 3 minutos calculamos: 3 x 60 = 180 segundos."
  },
  {
    id: "MAT-100",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 3,
    enunciado: "Mariana foi ao mercado com R$ 50,00. Comprou 2 caixas de leite a R$ 4,50 cada e 1 pacote de café a R$ 18,00. Com quanto dinheiro ela ainda ficou?",
    alternativas: [
      "R$ 23,00",
      "R$ 27,00",
      "R$ 22,50",
      "R$ 25,00"
    ],
    correta: 0,
    comentario: "Gasto com leite: 2 x 4,50 = R$ 9,00. Total gasto: 9,00 + 18,00 = R$ 27,00. Sobrou: 50,00 - 27,00 = R$ 23,00."
  },

  // =========================================================================
  // HABILIDADE 5: Geometria (MAT-101 a MAT-110)
  // =========================================================================
  {
    id: "MAT-101",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Qual figura geométrica plana possui 4 lados de mesma medida e 4 ângulos retos?",
    alternativas: [
      "Quadrado.",
      "Triângulo.",
      "Círculo.",
      "Pentágono."
    ],
    correta: 0,
    comentario: "O quadrado é o quadrilátero regular que possui os 4 lados rigorosamente iguais e 4 ângulos retos de 90 graus."
  },
  {
    id: "MAT-102",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Um paralelepípedo (bloco retangular como uma caixa de sapatos) possui quantas faces no total?",
    alternativas: [
      "6 faces.",
      "8 faces.",
      "12 faces.",
      "4 faces."
    ],
    correta: 0,
    comentario: "O paralelepípedo possui 6 faces retangulares (topo, base e 4 faces laterais). 8 são seus vértices e 12 suas arestas."
  },
  {
    id: "MAT-103",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Dentre os sólidos geométricos a seguir, qual deles NÃO possui nenhuma face plana (é totalmente arredondado)?",
    alternativas: [
      "Esfera.",
      "Cubo.",
      "Pirâmide.",
      "Prisma."
    ],
    correta: 0,
    comentario: "A esfera é um corpo redondo perfeito e contínuo, sem vértices, arestas ou faces planas."
  },
  {
    id: "MAT-104",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 3,
    enunciado: "Um polígono tem 5 lados retos e 5 vértices. Como se chama esse polígono?",
    alternativas: [
      "Pentágono.",
      "Hexágono.",
      "Quadrilátero.",
      "Octógono."
    ],
    correta: 0,
    comentario: "Polígonos de 5 lados e 5 vértices chamam-se pentágonos. O de 6 lados é hexágono e o de 8 lados é octógono."
  },
  {
    id: "MAT-105",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Quantas arestas (linhas onde duas faces se encontram) possui um cubo?",
    alternativas: [
      "12 arestas.",
      "6 arestas.",
      "8 arestas.",
      "16 arestas."
    ],
    correta: 0,
    comentario: "O cubo tem 12 arestas (4 na base superior, 4 na base inferior e 4 colunas verticais laterais)."
  },
  {
    id: "MAT-106",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 3,
    enunciado: "Em uma malha quadriculada de 1 cm por 1 cm, Bruno desenhou um retângulo que mede 6 quadradinhos de comprimento por 4 quadradinhos de largura. Qual é a área desse retângulo em quadradinhos?",
    alternativas: [
      "24 quadradinhos.",
      "20 quadradinhos.",
      "10 quadradinhos.",
      "12 quadradinhos."
    ],
    correta: 0,
    comentario: "A área de um retângulo é calculada multiplicando o comprimento pela largura: 6 x 4 = 24 quadradinhos de área. 20 seria o perímetro."
  },
  {
    id: "MAT-107",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "O sólido geométrico que tem a forma de uma casquinha de sorvete com uma base circular e uma ponta no topo chama-se:",
    alternativas: [
      "Cone.",
      "Cilindro.",
      "Cubo.",
      "Pirâmide quadrada."
    ],
    correta: 0,
    comentario: "O sólido com base circular e superfície cônica afunilando até um único vértice no topo é o cone."
  },
  {
    id: "MAT-108",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Ao dobrar uma folha quadrada exatamente pela metade unindo os vértices opostos, que figura geométrica obtemos na dobra?",
    alternativas: [
      "Dois triângulos.",
      "Dois retângulos compridos.",
      "Dois círculos.",
      "Dois trapézios."
    ],
    correta: 0,
    comentario: "A diagonal que une dois vértices opostos de um quadrado divide a figura em dois triângulos idênticos."
  },
  {
    id: "MAT-109",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 3,
    enunciado: "Um campo de futebol oficial possui linhas perfeitamente retas em formato de retângulo. Quantos ângulos retos existem nos 4 cantos do campo?",
    alternativas: [
      "4 ângulos retos.",
      "2 ângulos retos.",
      "8 ângulos retos.",
      "Nenhum ângulo reto."
    ],
    correta: 0,
    comentario: "Cada canto de uma figura retangular forma um ângulo reto de 90 graus (o formato em 'L'), totalizando 4 ângulos retos nos 4 cantos."
  },
  {
    id: "MAT-110",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 2,
    enunciado: "Qual das seguintes letras do alfabeto possui um eixo de simetria vertical que divide a letra em duas metades idênticas?",
    alternativas: [
      "A letra A.",
      "A letra P.",
      "A letra F.",
      "A letra L."
    ],
    correta: 0,
    comentario: "A letra A possui simetria vertical: uma linha de cima a baixo no meio divide a letra em dois lados perfeitamente espelhados. As letras P, F e L não têm simetria."
  },

  // =========================================================================
  // HABILIDADE 6: Tabelas, gráficos e raciocínio lógico (MAT-111 a MAT-120)
  // =========================================================================
  {
    id: "MAT-111",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 1,
    apoio: "Quantidade de brinquedos arrecadados na campanha escolar:\n• 1º Ano: 30 brinquedos\n• 2º Ano: 45 brinquedos\n• 3º Ano: 55 brinquedos\n• 4º Ano: 70 brinquedos",
    enunciado: "Quantos brinquedos o 4º Ano arrecadou a mais do que o 2º Ano?",
    alternativas: [
      "25 brinquedos a mais.",
      "15 brinquedos a mais.",
      "35 brinquedos a mais.",
      "115 brinquedos a mais."
    ],
    correta: 0,
    comentario: "O 4º Ano arrecadou 70 e o 2º Ano arrecadou 45. Para saber a diferença a mais: 70 - 45 = 25 brinquedos a mais."
  },
  {
    id: "MAT-112",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    enunciado: "Em uma caixa há 12 lápis azuis, 3 lápis vermelhos e 1 lápis verde. Ao tirar um lápis de olhos vendados, é MENOS PROVÁVEL tirar a cor:",
    alternativas: [
      "Verde.",
      "Azul.",
      "Vermelha.",
      "Amarela."
    ],
    correta: 0,
    comentario: "Como só existe 1 lápis verde entre os 16 lápis, a cor verde é a que tem a menor chance (menos provável) de sair."
  },
  {
    id: "MAT-113",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 3,
    enunciado: "Sofia tem 3 camisetas (branca, amarela e azul) e 2 bermudas (preta e cinza). De quantas maneiras diferentes ela pode se vestir combinando 1 camiseta e 1 bermuda?",
    alternativas: [
      "6 combinações diferentes.",
      "5 combinações diferentes.",
      "3 combinações diferentes.",
      "9 combinações diferentes."
    ],
    correta: 0,
    comentario: "Pelo princípio da multiplicação de combinações: 3 camisetas x 2 bermudas = 6 maneiras diferentes de se vestir."
  },
  {
    id: "MAT-114",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Produção de mudas de árvores no viveiro escolar:\n• Ipê-amarelo: 120 mudas\n• Jacarandá: 90 mudas\n• Pitangueira: 150 mudas",
    enunciado: "Quantas mudas o viveiro produziu no total somando as três espécies?",
    alternativas: [
      "360 mudas.",
      "340 mudas.",
      "350 mudas.",
      "380 mudas."
    ],
    correta: 0,
    comentario: "Somamos as três espécies: 120 + 90 + 150 = 360 mudas no total."
  },
  {
    id: "MAT-115",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 1,
    enunciado: "Observe o padrão da sequência: 200, 250, 300, 350, ____. Qual é o próximo termo?",
    alternativas: [
      "400",
      "375",
      "450",
      "500"
    ],
    correta: 0,
    comentario: "A sequência aumenta de 50 em 50: 350 + 50 = 400."
  },
  {
    id: "MAT-116",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    enunciado: "Um dado comum de 6 faces numeradas de 1 a 6 é lançado sobre a mesa. Qual é a chance de sair um número maior que 6?",
    alternativas: [
      "É um evento impossível (chance zero).",
      "É muito provável sair.",
      "É certeza absoluta.",
      "A chance é de metade das jogadas."
    ],
    correta: 0,
    comentario: "As faces do dado vão apenas de 1 até 6. Portanto, é completamente impossível sair um número maior que 6."
  },
  {
    id: "MAT-117",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 3,
    apoio: "Quadro de medalhas das salas no torneio esportivo:\n• 4º Ano A: 8 de ouro e 6 de prata\n• 4º Ano B: 7 de ouro e 9 de prata",
    enunciado: "Qual turma conquistou a maior quantidade total de medalhas (ouro e prata juntas)?",
    alternativas: [
      "O 4º Ano B com 16 medalhas no total.",
      "O 4º Ano A com 14 medalhas no total.",
      "As duas turmas empataram com 15 medalhas.",
      "O 4º Ano A com 15 medalhas no total."
    ],
    correta: 0,
    comentario: "4º Ano A: 8 + 6 = 14 medalhas. 4º Ano B: 7 + 9 = 16 medalhas. Logo, o 4º Ano B conquistou mais medalhas (16 no total)."
  },
  {
    id: "MAT-118",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    enunciado: "Em uma sorveteria, as crianças podem escolher entre casquinha ou copinho, e os sabores são chocolate, morango, creme ou limão. Quantas opções diferentes de sorvete com 1 sabor podem ser montadas?",
    alternativas: [
      "8 opções diferentes.",
      "6 opções diferentes.",
      "4 opções diferentes.",
      "10 opções diferentes."
    ],
    correta: 0,
    comentario: "2 tipos de recipiente (casquinha ou copinho) multiplicados por 4 sabores de sorvete: 2 x 4 = 8 opções diferentes."
  },
  {
    id: "MAT-119",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 3,
    enunciado: "Lúcia tem 8 anos. Sua mãe tem 4 vezes a idade de Lúcia. Seu avô tem o dobro da idade da mãe. Quantos anos tem o avô de Lúcia?",
    alternativas: [
      "64 anos.",
      "56 anos.",
      "72 anos.",
      "60 anos."
    ],
    correta: 0,
    comentario: "1ª etapa: idade da mãe: 4 x 8 = 32 anos. 2ª etapa: idade do avô: dobro da mãe = 2 x 32 = 64 anos."
  },
  {
    id: "MAT-120",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 1,
    apoio: "Dias de chuva registrados nos meses de outono:\n• Março: 14 dias de chuva\n• Abril: 9 dias de chuva\n• Maio: 5 dias de chuva",
    enunciado: "Em qual dos três meses choveu o MENOR número de dias?",
    alternativas: [
      "Maio (5 dias).",
      "Abril (9 dias).",
      "Março (14 dias).",
      "Choveu a mesma quantidade em todos."
    ],
    correta: 0,
    comentario: "Comparando os números 14, 9 e 5, o menor valor é 5, correspondente ao mês de maio."
  }
];
