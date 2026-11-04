import { Questao } from '../types';

/**
 * BANCO EXCLUSIVO DA RETA FINAL - 60 QUESTÕES INÉDITAS
 * Projetado para os últimos dias de preparação antes da prova.
 * Dividido em 3 simulados oficiais de 20 questões (10 de Português e 10 de Matemática cada).
 * Cada simulado possui garantidamente pelo menos 1 questão de nível difícil (desafio) em cada disciplina.
 */

// =========================================================================
// SIMULADO 1 - RETA FINAL (10 Português + 10 Matemática)
// =========================================================================
export const RETA_FINAL_SIMULADO_1: Questao[] = [
  // --- Língua Portuguesa (10 questões) ---
  {
    id: "RF-PT-001",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "A tartaruga-verde é uma espécie marinha que viaja milhares de quilômetros para desovar. Na praia de Fernando de Noronha, os pesquisadores acompanham os ninhos e registram que a maioria dos filhotes nasce durante a madrugada, quando a areia está mais fria e há menos predadores.",
    enunciado: "De acordo com o texto, por qual motivo a maioria dos filhotes nasce durante a madrugada?",
    alternativas: [
      "Porque as águas do mar ficam mais calmas para nadar.",
      "Porque a areia está mais fria e há menos predadores.",
      "Porque a lua ilumina o caminho com mais intensidade.",
      "Porque as tartarugas adultas voltam para proteger os ovos."
    ],
    correta: 1,
    comentario: "O texto informa expressamente: 'a maioria dos filhotes nasce durante a madrugada, quando a areia está mais fria e há menos predadores'."
  },
  {
    id: "RF-PT-002",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Lucas olhou o espelho, ajeitou a gola da camisa branca e conferiu pela terceira vez se a pasta com o trabalho de Ciências estava na mochila. O coração batia forte e ele respirava fundo a cada minuto, ensaiando em voz baixa as primeiras palavras da apresentação.",
    enunciado: "O comportamento de Lucas indica que ele se sentia:",
    alternativas: [
      "Ansioso e focado diante da apresentação que faria.",
      "Chateado por ter esquecido a pasta na sala de aula.",
      "Sonolento por ter acordado muito cedo no dia.",
      "Confiante demais a ponto de não se importar com a nota."
    ],
    correta: 0,
    comentario: "Conferir várias vezes o material, respirar fundo, sentir o coração bater forte e ensaiar em voz baixa são reações típicas de quem está ansioso e concentrado para falar em público."
  },
  {
    id: "RF-PT-003",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Depois de muita chuva no fim de semana, a segunda-feira amanheceu com um céu azul anil e um ar tão fresco que parecia renovar as energias de todos.",
    enunciado: "No texto, a expressão 'azul anil' refere-se a um tom de azul:",
    alternativas: [
      "Pálido e acinzentado.",
      "Intenso, puro e límpido.",
      "Escuro como a noite sem estrelas.",
      "Esverdeado como a água de uma lagoa."
    ],
    correta: 1,
    comentario: "Anil é uma cor azul profunda, viva e brilhante. No contexto do dia que se abriu após a chuva, o céu 'azul anil' indica um céu limpo, vívido e sem nuvens."
  },
  {
    id: "RF-PT-004",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "O consumo consciente de energia elétrica nas residências reduz custos financeiros e ajuda o planeta. Atitudes simples, como apagar luzes em cômodos vazios e evitar banhos excessivamente demorados, diminuem a queima de combustíveis fósseis nas usinas termelétricas.",
    enunciado: "Qual é a ideia principal defendida no texto?",
    alternativas: [
      "Os banhos demorados são recomendados nos dias frios.",
      "A economia de energia traz vantagens financeiras e ecológicas.",
      "As lâmpadas elétricas devem ficar acesas o dia todo.",
      "As usinas termelétricas produzem apenas energia limpa."
    ],
    correta: 1,
    comentario: "O texto busca conscientizar que pequenos hábitos de economia de eletricidade reduzem as despesas da casa e evitam poluição ambiental."
  },
  {
    id: "RF-PT-005",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Em qual das palavras a seguir o dígrafo CH produz o mesmo som de X em 'xarope'?",
    alternativas: [
      "Chocolate.",
      "Escola.",
      "Cadeira.",
      "Brinquedo."
    ],
    correta: 0,
    comentario: "Em 'chocolate', as letras CH formam um dígrafo com som consonantal idêntico ao da consoante X em 'xarope' (/x/)."
  },
  {
    id: "RF-PT-006",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Na oração: 'Os alunos estudiosos resolveram todos os desafios da gincana', as palavras 'estudiosos' e 'resolveram' são, respectivamente:",
    alternativas: [
      "Substantivo e pronome.",
      "Adjetivo e verbo.",
      "Verbo e adjetivo.",
      "Artigo e substantivo."
    ],
    correta: 1,
    comentario: "'Estudiosos' é adjetivo (atribui qualidade aos alunos) e 'resolveram' é verbo (indica a ação praticada pelos alunos)."
  },
  {
    id: "RF-PT-007",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "FEIRA DE TROCA DE LIVROS E BRINQUEDOS\nQuando: Próximo sábado, das 10h às 16h.\nOnde: Pátio coberto da Escola Municipal.\nComo participar: Traga itens em bom estado de conservação. Não será permitida venda por dinheiro, apenas trocas diretas entre os participantes.",
    enunciado: "De acordo com o comunicado da feira, o que é proibido realizar no evento?",
    alternativas: [
      "Trocar brinquedos por livros infantis.",
      "Comercializar qualquer item por dinheiro.",
      "Participar do evento no período da manhã.",
      "Levar objetos que estejam em bom estado."
    ],
    correta: 1,
    comentario: "O texto afirma claramente: 'Não será permitida venda por dinheiro, apenas trocas diretas entre os participantes'."
  },
  {
    id: "RF-PT-008",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "Aquele enigma de matemática era tão simples que as crianças resolveram num piscar de olhos.",
    enunciado: "A expressão 'num piscar de olhos' significa que o enigma foi resolvido:",
    alternativas: [
      "Com os olhos vendados por uma fita.",
      "Em um tempo extremamente rápido.",
      "Com enorme dificuldade e atraso.",
      "Sem que ninguém prestasse atenção."
    ],
    correta: 1,
    comentario: "'Num piscar de olhos' é uma expressão popular que transmite grande rapidez ou velocidade imediata na execução de algo."
  },
  {
    id: "RF-PT-009",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 3,
    enunciado: "Assinale a alternativa em que todas as palavras são paroxítonas e recebem acento pela regra das terminadas em L, R ou ditongo:",
    alternativas: [
      "Túnel, açúcar e régua.",
      "Café, maracujá e cipó.",
      "Árvore, médico e lâmpada.",
      "Papel, amor e calor."
    ],
    correta: 0,
    comentario: "'Túnel' (paroxítona em L), 'açúcar' (paroxítona em R) e 'régua' (paroxítona em ditongo) são paroxítonas acentuadas. O grupo com árvore é proparoxítona e o de café é oxítona."
  },
  {
    id: "RF-PT-010",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "O camponês encontrou um pote de barro enterrado sob a velha amoreira. Em vez de abrir o pote imediatamente para ver as moedas, olhou para a cabana vizinha, onde dona Helena cuidava sozinha de quatro netos doentes, e levou o pote até a porta dela com um bilhete anônimo.",
    enunciado: "A atitude do camponês ao encontrar o pote demonstra que ele agiu com:",
    alternativas: [
      "Indiferença em relação aos problemas da comunidade.",
      "Altruísmo e empatia pelas necessidades de quem sofria mais.",
      "Medo de que o pote estivesse amaldiçoado por espíritos.",
      "Arrependimento por não ter ficado com as moedas encontradas."
    ],
    correta: 1,
    comentario: "Abrir mão de um tesouro valioso sem se identificar para socorrer uma família necessitada é a essência do altruísmo e da solidariedade humana."
  },

  // --- Matemática (10 questões) ---
  {
    id: "RF-MAT-001",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "Em uma maratona de arrecadação, os alunos juntaram 7.408 tampinhas plásticas. Nesse número, qual é o valor posicional do algarismo 4?",
    alternativas: [
      "40 unidades.",
      "400 unidades (4 centenas).",
      "4.000 unidades (4 milhares).",
      "4 unidades simples."
    ],
    correta: 1,
    comentario: "No número 7.408, o algarismo 8 ocupa as unidades, o 0 as dezenas, o 4 as centenas (400) e o 7 os milhares (7.000). O valor posicional do 4 é 400."
  },
  {
    id: "RF-MAT-002",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Em um teatro com 320 lugares, foram vendidos ingressos para 8 sessões com a mesma quantidade de pessoas em cada uma, lotando todas as sessões. Quantas pessoas assistiram a cada sessão?",
    alternativas: [
      "35 pessoas.",
      "40 pessoas.",
      "45 pessoas.",
      "50 pessoas."
    ],
    correta: 1,
    comentario: "Dividimos o total de lugares por 8: 320 ÷ 8 = 40 pessoas por sessão (já que 40 x 8 = 320)."
  },
  {
    id: "RF-MAT-003",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma pizza grande foi fatiada em 8 pedaços iguais. Gabriel comeu 2 pedaços e sua irmã comeu 3 pedaços. Que fração da pizza os dois comeram juntos?",
    alternativas: [
      "5/8 da pizza.",
      "3/8 da pizza.",
      "5/16 da pizza.",
      "1/2 da pizza."
    ],
    correta: 0,
    comentario: "Somamos os pedaços: 2/8 + 3/8 = 5/8. O denominador representa o total de fatias (8) e o numerador a quantidade comida (5)."
  },
  {
    id: "RF-MAT-004",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Um treino de natação começou às 16h40 e durou exatamente 50 minutos. A que horas terminou o treino?",
    alternativas: [
      "17h20",
      "17h30",
      "17h40",
      "17h10"
    ],
    correta: 1,
    comentario: "Faltavam 20 minutos para as 17h00. Dos 50 minutos, restam 30 minutos após as 17h. Portanto, o treino encerrou pontualmente às 17h30."
  },
  {
    id: "RF-MAT-005",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Qual dos seguintes sólidos geométricos NÃO rola facilmente quando colocado sobre uma rampa inclinada?",
    alternativas: [
      "Uma esfera.",
      "Um cilindro.",
      "Um cubo.",
      "Um cone."
    ],
    correta: 2,
    comentario: "O cubo é um poliedro com todas as faces planas e quadradas; por não ter nenhuma superfície arredondada, ele desliza mas não rola como os corpos redondos."
  },
  {
    id: "RF-MAT-006",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Alunos inscritos nas oficinas da escola de artes:\n• Teatro: 28 alunos\n• Pintura: 35 alunos\n• Música: 42 alunos\n• Dança: 25 alunos",
    enunciado: "Quantos alunos a oficina de Música tem a mais do que a oficina de Teatro?",
    alternativas: [
      "14 alunos a mais.",
      "12 alunos a mais.",
      "15 alunos a mais.",
      "70 alunos a mais."
    ],
    correta: 0,
    comentario: "Música tem 42 alunos e Teatro tem 28 alunos. Calculando a diferença: 42 - 28 = 14 alunos a mais."
  },
  {
    id: "RF-MAT-007",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Qual número é obtido pela soma: 5 milhares + 3 centenas + 9 unidades?",
    alternativas: [
      "5.390",
      "5.309",
      "5.039",
      "539"
    ],
    correta: 1,
    comentario: "5 milhares = 5.000, 3 centenas = 300, 0 dezenas = 0 e 9 unidades = 9. Somando: 5.000 + 300 + 9 = 5.309."
  },
  {
    id: "RF-MAT-008",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Uma garrafa de suco contém 1 litro e meio (1,5 L). Esse volume equivale a quantos mililitros (ml)?",
    alternativas: [
      "1.500 ml",
      "150 ml",
      "1.050 ml",
      "15.000 ml"
    ],
    correta: 0,
    comentario: "1 litro tem 1.000 ml e meio litro tem 500 ml. Juntando os dois: 1.000 + 500 = 1.500 ml."
  },
  {
    id: "RF-MAT-009",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 3,
    enunciado: "Uma professora comprou 24 canetas coloridas. Ela deu 1/4 das canetas para os monitores e 2/4 para os alunos que fizeram os cartazes. Quantas canetas sobraram com a professora?",
    alternativas: [
      "6 canetas.",
      "12 canetas.",
      "18 canetas.",
      "8 canetas."
    ],
    correta: 0,
    comentario: "Distribuídas: 1/4 + 2/4 = 3/4 das canetas. Sobrou 1/4 de 24 canetas. Calculando 1/4 de 24: 24 ÷ 4 = 6 canetas restantes."
  },
  {
    id: "RF-MAT-010",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Em uma quitanda, Mariana comprou 3 caixas de maçãs com 18 maçãs em cada uma. No caminho, 6 maçãs se estragaram e foram descartadas. As maçãs boas restantes foram divididas igualmente em 4 cestas. Quantas maçãs ficaram em cada cesta?",
    alternativas: [
      "12 maçãs.",
      "14 maçãs.",
      "10 maçãs.",
      "16 maçãs."
    ],
    correta: 0,
    comentario: "1ª etapa: total de maçãs compradas: 3 x 18 = 54. 2ª etapa: tirando as 6 estragadas: 54 - 6 = 48 maçãs boas. 3ª etapa: dividindo em 4 cestas: 48 ÷ 4 = 12 maçãs por cesta."
  }
];

// =========================================================================
// SIMULADO 2 - RETA FINAL (10 Português + 10 Matemática)
// =========================================================================
export const RETA_FINAL_SIMULADO_2: Questao[] = [
  // --- Língua Portuguesa (10 questões) ---
  {
    id: "RF-PT-011",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "O bicho-preguiça desce da copa das árvores apenas uma vez por semana para fazer suas necessidades no solo. Ele se locomove muito devagar porque seu metabolismo gasta pouquíssima energia, o que o ajuda a não chamar a atenção de gaviões e onças na floresta.",
    enunciado: "Com que frequência o bicho-preguiça desce da copa das árvores para o solo?",
    alternativas: [
      "Todos os dias ao entardecer.",
      "Apenas uma vez por semana.",
      "Duas vezes a cada mês.",
      "Somente nos períodos de chuva forte."
    ],
    correta: 1,
    comentario: "O texto informa com clareza logo na primeira frase: 'desce da copa das árvores apenas uma vez por semana'."
  },
  {
    id: "RF-PT-012",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Ao entrar em casa após a caminhada, dona Rita tirou os sapatos molhados, enrolou um lenço grosso de lã no pescoço e colocou uma chaleira de água no fogão para preparar um chá de camomila bem quente com mel.",
    enunciado: "As ações de dona Rita permitem concluir que:",
    alternativas: [
      "Ela estava sentindo muito frio e precisava se aquecer.",
      "Ela pretendia tomar um banho frio de piscina.",
      "Ela estava com calor e ligou o ventilador da sala.",
      "Ela esqueceu a chave da porta e não pôde entrar."
    ],
    correta: 0,
    comentario: "Tirar calçados molhados, colocar lenço de lã e preparar chá fervente com mel são atitudes voltadas a aquecer o corpo em dias gelados."
  },
  {
    id: "RF-PT-013",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Ouvir a cantiga antiga da vovó trouxe uma onda de recordações doces da infância de Pedro na fazenda dos avós.",
    enunciado: "Na frase, a expressão 'recordações doces' foi usada para transmitir lembranças que eram:",
    alternativas: [
      "Açucaradas como balas de goma.",
      "Agradáveis, afetuosas e prazerosas.",
      "Esquecidas e difíceis de lembrar.",
      "Ruidosas e cheias de gritos."
    ],
    correta: 1,
    comentario: "'Doce' no sentido figurado indica algo terno, carinhoso, suave e muito agradável à memória afetiva."
  },
  {
    id: "RF-PT-014",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Muitos pássaros urbanos aprenderam a nidificar em frestas de telhados e postes de luz porque as matas ao redor das cidades foram desmatadas. Essa capacidade de adaptação garante a sobrevivência das espécies mesmo em ambientes com poucos recursos naturais.",
    enunciado: "Qual é o tema principal abordado no texto?",
    alternativas: [
      "O tipo de telha usado na construção das casas.",
      "A adaptação de pássaros à vida urbana para sobreviver.",
      "A velocidade com que os pássaros caçam insetos.",
      "A proibição de postes de luz nas grandes cidades."
    ],
    correta: 1,
    comentario: "O texto busca explicar a forma como as aves se adaptaram para construir ninhos em estruturas da cidade após a perda de suas matas nativas."
  },
  {
    id: "RF-PT-015",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Qual das palavras abaixo deve ser completada obrigatoriamente com a letra M antes da consoante P?",
    alternativas: [
      "Lâ___pada.",
      "Ci___to.",
      "De___te.",
      "Vento."
    ],
    correta: 0,
    comentario: "Pela regra ortográfica, antes de P e B usa-se sempre a letra M: 'lâmpada'. Antes de T, D e outras consoantes usamos N (cinto, dente, vento)."
  },
  {
    id: "RF-PT-016",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Na frase '— Crianças, guardem os cadernos na prateleira!', o ponto de exclamação no final expressa:",
    alternativas: [
      "Uma dúvida que ninguém soube responder.",
      "Uma orientação enérgica ou chamada de atenção da professora.",
      "Uma pergunta retórica sem intenção de resposta.",
      "A continuação de um pensamento que foi cortado."
    ],
    correta: 1,
    comentario: "O ponto de exclamação aliado ao verbo de comando no imperativo ('guardem') expressa ordem, recomendação firme e orientação direta."
  },
  {
    id: "RF-PT-017",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "A vacinação contra a gripe ocorrerá nos dias 12 e 13 de maio, das 8h às 17h, no Centro de Saúde Central. Pessoas com 60 anos ou mais e crianças de até 5 anos têm prioridade no atendimento na parte da manhã.",
    enunciado: "Segundo o texto, quem tem prioridade no atendimento no período da manhã?",
    alternativas: [
      "Apenas os jovens estudantes do Ensino Médio.",
      "Pessoas com 60 anos ou mais e crianças de até 5 anos.",
      "Todos os moradores do bairro sem exceção.",
      "Professores de Educação Física e motoristas de ônibus."
    ],
    correta: 1,
    comentario: "O texto informa expressamente na última frase: 'Pessoas com 60 anos ou mais e crianças de até 5 anos têm prioridade no atendimento na parte da manhã'."
  },
  {
    id: "RF-PT-018",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "O pequeno cãozinho tinha uma audição aguçada: ouvia os passos do tutor a uma quadra inteira de distância.",
    enunciado: "A palavra 'aguçada' tem o mesmo sentido de:",
    alternativas: [
      "Lenta.",
      "Apurada e atenta.",
      "Fraca.",
      "Confusa."
    ],
    correta: 1,
    comentario: "'Audição aguçada' significa audição apurada, afiada, capaz de perceber sons mínimos com grande facilidade."
  },
  {
    id: "RF-PT-019",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 3,
    enunciado: "Assinale a alternativa que traz apenas palavras proparoxítonas (onde a antepenúltima sílaba é a mais forte e todas levam acento):",
    alternativas: [
      "Príncipe, página e música.",
      "Café, picolé e sofá.",
      "Janela, caderno e caneta.",
      "Jornal, papel e anzol."
    ],
    correta: 0,
    comentario: "'Prín-ci-pe', 'pá-gi-na' e 'mú-si-ca' têm a antepenúltima sílaba tônica, sendo todas proparoxítonas e acentuadas. O grupo de café é oxítona."
  },
  {
    id: "RF-PT-020",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "O jardineiro olhou as roseiras com folhas murchas e terra seca e rachada pelo sol. Deixou a tesoura de poda de lado, conectou a mangueira ao poço artesiano e regou pacientemente a raiz de cada planta até a terra ficar escura e úmida.",
    enunciado: "A atitude do jardineiro de priorizar a mangueira revela que:",
    alternativas: [
      "Ele achou que as roseiras estavam com galhos compridos demais.",
      "Ele percebeu que as plantas corriam risco de secar por falta de água.",
      "Ele queria apenas brincar com a água do poço no quintal.",
      "Ele pretendia arrancar todas as flores para plantar grama."
    ],
    correta: 1,
    comentario: "Folhas murchas e solo ressecado e rachado são sinais de desidratação severa; priorizar a rega imediata até o solo umedecer mostra que a urgência era salvar as plantas."
  },

  // --- Matemática (10 questões) ---
  {
    id: "RF-MAT-011",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "Qual número é composto exatamente por 4 milhares, 6 centenas, 2 dezenas e 5 unidades?",
    alternativas: [
      "4.625",
      "4.265",
      "4.652",
      "4.062"
    ],
    correta: 0,
    comentario: "4 milhares = 4.000, 6 centenas = 600, 2 dezenas = 20 e 5 unidades = 5. Juntando as ordens: 4.625."
  },
  {
    id: "RF-MAT-012",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Uma biblioteca comprou 12 caixas com 15 gibis infantis em cada uma. Quantos gibis a biblioteca comprou no total?",
    alternativas: [
      "150 gibis.",
      "180 gibis.",
      "160 gibis.",
      "120 gibis."
    ],
    correta: 1,
    comentario: "Multiplicamos 12 x 15. Podemos calcular: 10 x 15 = 150 e 2 x 15 = 30. Somando os dois: 150 + 30 = 180 gibis."
  },
  {
    id: "RF-MAT-013",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma barra de cereais tem 10 partes iguais. Tiago comeu 3 partes e Beatriz comeu 4 partes. Que fração da barra ainda sobrou?",
    alternativas: [
      "7/10 da barra.",
      "3/10 da barra.",
      "1/10 da barra.",
      "4/10 da barra."
    ],
    correta: 1,
    comentario: "Juntos comeram: 3/10 + 4/10 = 7/10. A barra inteira é 10/10. Subtraindo o que foi comido: 10/10 - 7/10 = 3/10 restantes."
  },
  {
    id: "RF-MAT-014",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Quantos centímetros há em uma tábua de madeira que mede 2 metros e meio (2,5 m) de comprimento?",
    alternativas: [
      "25 centímetros.",
      "250 centímetros.",
      "2.500 centímetros.",
      "205 centímetros."
    ],
    correta: 1,
    comentario: "1 metro equivale a 100 cm. Portanto, 2 metros = 200 cm e meio metro = 50 cm. Total: 200 + 50 = 250 cm."
  },
  {
    id: "RF-MAT-015",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Uma figura plana formada por exatamente 3 lados retos e 3 cantos (vértices) chama-se:",
    alternativas: [
      "Quadrado.",
      "Triângulo.",
      "Retângulo.",
      "Trapézio."
    ],
    correta: 1,
    comentario: "O polígono de 3 lados retos e 3 vértices é o triângulo."
  },
  {
    id: "RF-MAT-016",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    enunciado: "Em uma caixa há 10 bolinhas verdes e apenas 1 bolinha preta. Ao retirar uma bolinha sem olhar, é MAIS PROVÁVEL que saia uma bolinha:",
    alternativas: [
      "Preta.",
      "Verde.",
      "Amarela.",
      "Azul."
    ],
    correta: 1,
    comentario: "Como o verde representa 10 entre as 11 bolinhas da caixa, a probabilidade de sortear uma bolinha verde é imensamente maior."
  },
  {
    id: "RF-MAT-017",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Em uma reta numérica numerada de 50 em 50, qual número fica exatamente entre 1.400 e 1.500?",
    alternativas: [
      "1.425",
      "1.450",
      "1.475",
      "1.460"
    ],
    correta: 1,
    comentario: "A distância entre 1.400 e 1.500 é 100. A metade é 50. Somando 1.400 + 50 encontramos 1.450."
  },
  {
    id: "RF-MAT-018",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Marina comprou um livro por R$ 22,50 e um estojo por R$ 17,50. Pagou com uma cédula de R$ 50,00. Quanto ela recebeu de troco?",
    alternativas: [
      "R$ 10,00",
      "R$ 15,00",
      "R$ 12,00",
      "R$ 8,00"
    ],
    correta: 0,
    comentario: "Total da compra: 22,50 + 17,50 = R$ 40,00. Calculando o troco: 50,00 - 40,00 = R$ 10,00."
  },
  {
    id: "RF-MAT-019",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Um feirante organizou 144 laranjas em caixas com 12 laranjas cada. Ele vendeu cada caixa por R$ 8,00. Quanto ele arrecadou se vendeu todas as caixas?",
    alternativas: [
      "R$ 86,00",
      "R$ 96,00",
      "R$ 104,00",
      "R$ 112,00"
    ],
    correta: 1,
    comentario: "1ª etapa: quantidade de caixas: 144 ÷ 12 = 12 caixas. 2ª etapa: arrecadação total: 12 caixas x R$ 8,00 = R$ 96,00."
  },
  {
    id: "RF-MAT-020",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 3,
    enunciado: "Um canteiro retangular de flores tem 6 metros de comprimento e 4 metros de largura. Para contornar todo o canteiro com pedras ornamentais (perímetro), quantos metros de contorno serão necessários?",
    alternativas: [
      "24 metros.",
      "20 metros.",
      "10 metros.",
      "16 metros."
    ],
    correta: 1,
    comentario: "O perímetro é a soma de todos os 4 lados do retângulo: 6 + 4 + 6 + 4 = 20 metros. 24 metros quadrados seria a área (6 x 4)."
  }
];

// =========================================================================
// SIMULADO 3 - RETA FINAL (10 Português + 10 Matemática)
// =========================================================================
export const RETA_FINAL_SIMULADO_3: Questao[] = [
  // --- Língua Portuguesa (10 questões) ---
  {
    id: "RF-PT-021",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "O Museu do Brinquedo Antigo foi inaugurado em 2018 e possui mais de 1.500 peças históricas em seu acervo. As visitas guiadas ocorrem de terça a sábado, das 9h às 16h, e é necessário agendamento prévio pelo site para grupos escolares de mais de 10 alunos.",
    enunciado: "De acordo com o texto, para quem é obrigatório realizar o agendamento prévio pelo site?",
    alternativas: [
      "Para todos os visitantes individuais.",
      "Para grupos escolares com mais de 10 alunos.",
      "Apenas para adultos com mais de 60 anos.",
      "Para turistas que visitam o museu nos sábados."
    ],
    correta: 1,
    comentario: "O texto informa diretamente: 'é necessário agendamento prévio pelo site para grupos escolares de mais de 10 alunos'."
  },
  {
    id: "RF-PT-022",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Ao terminar a corrida de revezamento da escola, Juliana cruzou a fita, apoiou as mãos nos joelhos respirando com dificuldade e abriu um sorriso largo ao ver seus colegas de equipe correndo em sua direção de braços abertos.",
    enunciado: "A reação dos colegas correndo de braços abertos permite deduzir que:",
    alternativas: [
      "A equipe de Juliana venceu ou obteve um excelente resultado.",
      "Eles estavam com raiva porque Juliana correu devagar.",
      "A prova foi cancelada por causa de uma chuva imprevista.",
      "Juliana esqueceu o bastão no meio do percurso da pista."
    ],
    correta: 0,
    comentario: "Cruzar a fita final com sorriso no rosto e receber os abraços entusiasmados dos companheiros de equipe são sinais claros de vitória ou comemoração de grande resultado."
  },
  {
    id: "RF-PT-023",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "O avô escutou a queixa do neto pacientemente e aconselhou: 'Calma, Gabriel! Não faça tempestade em copo d'água por causa de um desenho rasgado'.",
    enunciado: "A expressão popular 'fazer tempestade em copo d'água' significa:",
    alternativas: [
      "Derramar suco ou refrigerante sobre a mesa.",
      "Fazer drama ou exagero diante de um problema pequeno.",
      "Gostar de tomar banho na água da chuva forte.",
      "Desenhar nuvens e relâmpagos em folhas brancas."
    ],
    correta: 1,
    comentario: "'Tempestade em copo d'água' é a metáfora comum usada quando alguém reage com excesso de preocupação ou drama diante de algo simples de resolver."
  },
  {
    id: "RF-PT-024",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "As formigas cortadeiras recolhem folhas verdes e as carregam até o interior de suas galerias subterrâneas. Ao contrário do que muitos pensam, elas não comem essas folhas: usam o material vegetal para cultivar um fungo especial que serve de alimento para toda a colônia.",
    enunciado: "Qual é a informação principal esclarecida pelo texto?",
    alternativas: [
      "As formigas dormem durante todo o dia na floresta.",
      "As folhas cortadas servem para alimentar um fungo e não as formigas diretamente.",
      "As galerias das formigas são construídas nos galhos mais altos das árvores.",
      "Os fungos da floresta destroem os formigueiros subterrâneos."
    ],
    correta: 1,
    comentario: "O texto tem o propósito específico de esclarecer o engano comum: as formigas não se alimentam das folhas, e sim cultivam o fungo que as nutre."
  },
  {
    id: "RF-PT-025",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Assinale a alternativa que traz a grafia correta da palavra com R ou RR no meio de vogais:",
    alternativas: [
      "Carroça.",
      "Caroça.",
      "Carrossa.",
      "Corroça."
    ],
    correta: 0,
    comentario: "'Carroça' escreve-se com dígrafo RR (para o som forte entre vogais) e Ç (cedilha) antes da vogal A."
  },
  {
    id: "RF-PT-026",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Na oração 'Ele comprou lápis, borracha, régua e tesoura', as vírgulas foram utilizadas para:",
    alternativas: [
      "Separar elementos de uma lista (enumeração de materiais).",
      "Fazer uma pergunta sobre o preço dos materiais.",
      "Indicar o início de um diálogo entre duas crianças.",
      "Concluir uma frase declarativa afirmativa."
    ],
    correta: 0,
    comentario: "A vírgula serve para separar termos de mesma função sintática dispostos em enumeração numa lista."
  },
  {
    id: "RF-PT-027",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "O Rio São Francisco nasce na Serra da Canastra, em Minas Gerais, e percorre mais de 2.800 quilômetros até desaguar no Oceano Atlântico, na divisa entre os estados de Alagoas e Sergipe. É chamado carinhosamente pela população de 'Velho Chico'.",
    enunciado: "Segundo o texto, onde fica localizada a nascente do Rio São Francisco?",
    alternativas: [
      "No Oceano Atlântico em Sergipe.",
      "Na Serra da Canastra, no estado de Minas Gerais.",
      "Na divisa entre Alagoas e Pernambuco.",
      "Na praia de Fernando de Noronha."
    ],
    correta: 1,
    comentario: "O texto declara expressamente: 'O Rio São Francisco nasce na Serra da Canastra, em Minas Gerais'."
  },
  {
    id: "RF-PT-028",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "Aquele pequeno filhote de beija-flor era tão frágil que cabia na ponta de uma colher de chá.",
    enunciado: "Qual palavra expressa o sentido OPOSTO (antônimo) de 'frágil'?",
    alternativas: [
      "Delicado.",
      "Forte (resistente).",
      "Pequeno.",
      "Sensível."
    ],
    correta: 1,
    comentario: "O antônimo de frágil (que quebra ou se machuca com facilidade) é forte ou resistente."
  },
  {
    id: "RF-PT-029",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 3,
    enunciado: "Assinale a alternativa que traz a correta classificação tônica e acentuação da palavra 'HISTÓRIA':",
    alternativas: [
      "Paroxítona terminada em ditongo crescente.",
      "Oxítona terminada em vogal aberta.",
      "Proparoxítona de quatro sílabas.",
      "Monossílabo com acento circunflexo."
    ],
    correta: 0,
    comentario: "A palavra 'his-tó-ria' tem a penúltima sílaba forte (tó) e termina em ditongo oral (ia), sendo paroxítona acentuada."
  },
  {
    id: "RF-PT-030",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "Durante a apresentação teatral da escola, a pequena atriz esqueceu a sua fala no palco e empalideceu. Em silêncio absoluto, seu colega de cena deu dois passos à frente, inventou uma frase engraçada que combinava com o figurino e arrancou risos da plateia, dando tempo para ela lembrar seu texto.",
    enunciado: "A atitude do colega de cena no palco demonstra:",
    alternativas: [
      "Que ele queria ser a única estrela da apresentação teatral.",
      "Rapidez de raciocínio, generosidade e espírito de equipe.",
      "Que ele não havia decorado o roteiro e se confundiu.",
      "Falta de respeito com a amiga que estava atuando ao lado."
    ],
    correta: 1,
    comentario: "Improvisar com graça para salvar a colega do constrangimento de esquecer o texto revela agilidade mental e muita empatia e espírito de cooperação."
  },

  // --- Matemática (10 questões) ---
  {
    id: "RF-MAT-021",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 1,
    enunciado: "Em uma campanha de reciclagem, a escola recolheu 9.075 latinhas de alumínio. Como se escreve esse número por extenso?",
    alternativas: [
      "Novecentos e setenta e cinco.",
      "Nove mil e setenta e cinco.",
      "Nove mil setecentos e cinco.",
      "Noventa mil e setenta e cinco."
    ],
    correta: 1,
    comentario: "O número 9.075 tem 9 na classe dos milhares (nove mil) e 75 nas dezenas e unidades. Como não há centenas (0), lemos 'nove mil e setenta e cinco'."
  },
  {
    id: "RF-MAT-022",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 2,
    enunciado: "Em um campeonato de basquete, a equipe Azul fez 84 pontos e a equipe Verde fez 68 pontos. Quantos pontos a equipe Azul fez a mais do que a Verde?",
    alternativas: [
      "14 pontos.",
      "16 pontos.",
      "18 pontos.",
      "24 pontos."
    ],
    correta: 1,
    comentario: "Para calcular a diferença a mais, fazemos: 84 - 68 = 16 pontos de vantagem."
  },
  {
    id: "RF-MAT-023",
    disciplina: "Matematica",
    habilidade: "Frações",
    nivel: 2,
    enunciado: "Uma turma tem 20 alunos. A metade (1/2) desses alunos vai de ônibus escolar e um quarto (1/4) vai a pé. Quantos alunos vão a pé?",
    alternativas: [
      "10 alunos.",
      "5 alunos.",
      "4 alunos.",
      "8 alunos."
    ],
    correta: 1,
    comentario: "1/4 de 20 alunos é calculado dividindo o total por 4: 20 ÷ 4 = 5 alunos vão a pé. 10 alunos é a metade (1/2)."
  },
  {
    id: "RF-MAT-024",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 1,
    enunciado: "Uma partida de videogame teve início às 14h10 e encerrou às 14h45. Qual foi a duração dessa partida?",
    alternativas: [
      "25 minutos.",
      "35 minutos.",
      "45 minutos.",
      "55 minutos."
    ],
    correta: 1,
    comentario: "Calculamos a diferença nos minutos: 45 - 10 = 35 minutos de duração."
  },
  {
    id: "RF-MAT-025",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 1,
    enunciado: "Uma lata cilíndrica de achocolatado possui quantas bases circulares planas?",
    alternativas: [
      "1 base circular.",
      "2 bases circulares.",
      "3 bases circulares.",
      "Nenhuma base circular."
    ],
    correta: 1,
    comentario: "O cilindro tem duas bases circulares paralelas planas (uma no topo e outra no fundo) e uma face lateral curva."
  },
  {
    id: "RF-MAT-026",
    disciplina: "Matematica",
    habilidade: "Tabelas, gráficos e raciocínio lógico",
    nivel: 2,
    apoio: "Quantidade de livros emprestados na biblioteca durante a semana:\n• Segunda: 25 livros\n• Terça: 30 livros\n• Quarta: 45 livros\n• Quinta: 35 livros\n• Sexta: 50 livros",
    enunciado: "Em qual dia da semana foram emprestados mais livros na biblioteca?",
    alternativas: [
      "Quarta-feira.",
      "Sexta-feira.",
      "Segunda-feira.",
      "Terça-feira."
    ],
    correta: 1,
    comentario: "Comparando os números da tabela (25, 30, 45, 35 e 50), 50 é o maior valor, registrado na sexta-feira."
  },
  {
    id: "RF-MAT-027",
    disciplina: "Matematica",
    habilidade: "Números, valor posicional e composição/decomposição",
    nivel: 2,
    enunciado: "Qual é o antecessor imediato do número 5.000?",
    alternativas: [
      "4.990",
      "4.999",
      "5.001",
      "4.900"
    ],
    correta: 1,
    comentario: "O antecessor vem logo antes (basta subtrair 1 unidade): 5.000 - 1 = 4.999. 5.001 é o sucessor."
  },
  {
    id: "RF-MAT-028",
    disciplina: "Matematica",
    habilidade: "Grandezas e medidas",
    nivel: 2,
    enunciado: "Dona Neide comprou 4 pacotes de café de 250 gramas cada. Quantos gramas de café ela comprou ao todo e a quantos quilogramas isso equivale?",
    alternativas: [
      "1.000 g (que equivale a 1 kg).",
      "500 g (que equivale a meio kg).",
      "750 g (que equivale a 0,75 kg).",
      "2.000 g (que equivale a 2 kg)."
    ],
    correta: 0,
    comentario: "4 x 250 g = 1.000 gramas. Como 1.000 gramas formam exatamente 1 quilograma, ela comprou 1 kg."
  },
  {
    id: "RF-MAT-029",
    disciplina: "Matematica",
    habilidade: "Operações: adição, subtração, multiplicação e divisão",
    nivel: 3,
    enunciado: "Uma gráfica produziu 350 agendas escolares. Elas foram empacotadas em caixas com 50 agendas em cada uma. Cada caixa foi vendida por R$ 30,00. Qual foi o valor total arrecadado com a venda de todas as caixas?",
    alternativas: [
      "R$ 210,00",
      "R$ 240,00",
      "R$ 180,00",
      "R$ 250,00"
    ],
    correta: 0,
    comentario: "1ª etapa: número de caixas: 350 ÷ 50 = 7 caixas. 2ª etapa: arrecadação: 7 caixas x R$ 30,00 = R$ 210,00."
  },
  {
    id: "RF-MAT-030",
    disciplina: "Matematica",
    habilidade: "Geometria",
    nivel: 3,
    enunciado: "Quantos vértices (pontas onde as arestas se unem) possui um sólido em formato de cubo?",
    alternativas: [
      "6 vértices.",
      "8 vértices.",
      "12 vértices.",
      "4 vértices."
    ],
    correta: 1,
    comentario: "O cubo possui 8 vértices (4 na face de cima e 4 na face de baixo). Ele possui também 6 faces e 12 arestas, mas a pergunta pede os vértices."
  }
];

/**
 * Função utilitária para obter um simulado completo da Reta Final.
 * Retorna as 20 questões exclusivas (10 de Português e 10 de Matemática) da prova indicada.
 */
export function obterSimuladoRetaFinal(numero: 1 | 2 | 3): Questao[] {
  switch (numero) {
    case 1:
      return [...RETA_FINAL_SIMULADO_1];
    case 2:
      return [...RETA_FINAL_SIMULADO_2];
    case 3:
      return [...RETA_FINAL_SIMULADO_3];
    default:
      return [...RETA_FINAL_SIMULADO_1];
  }
}
