import { Questao } from '../types';

/**
 * BANCO COMPLEMENTAR DE LÍNGUA PORTUGUESA - 60 QUESTÕES (PT-061 a PT-120)
 * Totaliza 20 questões por temática/habilidade junto com o banco base (total 120 questões de Português).
 * Todas com nível 4º ano, distratores calibrados e comentários pedagógicos acolhedores.
 */
export const QUESTOES_PORTUGUES_EXTRA: Questao[] = [
  // =========================================================================
  // HABILIDADE 1: Localização de informação explícita no texto (PT-061 a PT-070)
  // =========================================================================
  {
    id: "PT-061",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "O golfinho-rotador vive em mares tropicais e é conhecido por saltar alto fora d'água, dando até sete giros no ar antes de mergulhar novamente. Ele se alimenta de peixes e lulas durante a noite, em águas profundas, e passa as manhãs descansando em baías calmas.",
    enunciado: "De acordo com o texto, em que momento do dia o golfinho-rotador se alimenta?",
    alternativas: [
      "Nas manhãs ensolaradas.",
      "Durante o período da noite.",
      "Apenas ao pôr do sol.",
      "No início da tarde."
    ],
    correta: 1,
    comentario: "O texto afirma expressamente: 'Ele se alimenta de peixes e lulas durante a noite, em águas profundas'. De manhã ele apenas descansa."
  },
  {
    id: "PT-062",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "FESTIVAL DE PIPAS DO PARQUE\nData: 24 de outubro, a partir das 14 horas.\nInscrições: Gratuitas, no quiosque central até as 13h30.\nRegra importante: É proibido o uso de linha cortante (cerol). Traga apenas linha de algodão comum para garantir a segurança de todos.",
    enunciado: "Segundo as instruções do cartaz, que tipo de linha é permitido utilizar no festival?",
    alternativas: [
      "Linha de náilon reforçada.",
      "Linha com cerol colorido.",
      "Linha de algodão comum.",
      "Linha encerada de pesca."
    ],
    correta: 2,
    comentario: "O cartaz orienta com clareza: 'Traga apenas linha de algodão comum para garantir a segurança de todos'. O cerol é expressamente proibido."
  },
  {
    id: "PT-063",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "Geleia de Morango Caseira\nIngredientes: 500 g de morangos picados, 1 xícara de açúcar cristal e suco de meio limão.\nPreparo: Em uma panela de fundo grosso, coloque todos os ingredientes. Cozinhe em fogo baixo por 25 minutos, mexendo de vez em quando com colher de pau.",
    enunciado: "Qual utensílio deve ser usado para mexer a geleia durante o cozimento?",
    alternativas: [
      "Uma concha de metal.",
      "Uma colher de pau.",
      "Um garfo de sobremesa.",
      "Um batedor de arame."
    ],
    correta: 1,
    comentario: "No modo de preparo está escrito claramente: 'mexendo de vez em quando com colher de pau'. As outras alternativas não foram citadas."
  },
  {
    id: "PT-064",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "O beija-flor bate as asas até 80 vezes por segundo. Por gastar muita energia nesse voo tão rápido, ele precisa visitar cerca de duas mil flores diariamente para sugar o néctar doce que sustenta seu pequeno corpo.",
    enunciado: "Quantas flores o beija-flor precisa visitar por dia para manter sua energia?",
    alternativas: [
      "Cerca de oitenta flores.",
      "Cerca de quinhentas flores.",
      "Cerca de duas mil flores.",
      "Cerca de dez mil flores."
    ],
    correta: 2,
    comentario: "O texto informa diretamente o número: 'ele precisa visitar cerca de duas mil flores diariamente para sugar o néctar doce'. 80 é o número de batidas de asas por segundo."
  },
  {
    id: "PT-065",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 3,
    apoio: "O Museu Histórico funciona de terça a domingo, das 9h às 17h. Nas quartas-feiras a entrada é gratuita para estudantes do Ensino Fundamental. Crianças menores de 5 anos não pagam ingresso em nenhum dia da semana.",
    enunciado: "Em qual dia da semana os estudantes do Ensino Fundamental têm direito à entrada gratuita?",
    alternativas: [
      "Às terças-feiras.",
      "Às quartas-feiras.",
      "Aos sábados e domingos.",
      "Em todos os dias da semana."
    ],
    correta: 1,
    comentario: "O texto diz de forma explícita: 'Nas quartas-feiras a entrada é gratuita para estudantes do Ensino Fundamental'. Menores de 5 anos é que não pagam em nenhum dia."
  },
  {
    id: "PT-066",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "Vovô Bento sentou-se na cadeira de balanço da varanda e tirou dos bolsos do colete um relógio de prata antigo e um saquinho de balas de hortelã para oferecer aos netos que chegavam da escola.",
    enunciado: "Que sabor de balas o vovô Bento tirou do bolso para os netos?",
    alternativas: [
      "Balas de morango.",
      "Balas de hortelã.",
      "Balas de caramelo.",
      "Balas de coco."
    ],
    correta: 1,
    comentario: "O texto indica com clareza: 'um saquinho de balas de hortelã para oferecer aos netos'. As outras opções trazem sabores não mencionados."
  },
  {
    id: "PT-067",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 3,
    apoio: "A vitória-régia é uma planta aquática nativa da Amazônia. Suas folhas circulares podem atingir até 2 metros de diâmetro e flutuam sobre as águas calmas dos rios. As bordas levantadas da folha evitam que a água entre, permitindo suportar até 40 quilos sem afundar.",
    enunciado: "Qual característica da folha da vitória-régia impede que a água entre sobre ela?",
    alternativas: [
      "A cor esverdeada brilhante.",
      "As suas bordas levantadas.",
      "O aroma adocicado das flores.",
      "A raiz fixada no leito do rio."
    ],
    correta: 1,
    comentario: "O texto declara expressamente: 'As bordas levantadas da folha evitam que a água entre, permitindo suportar até 40 quilos sem afundar'."
  },
  {
    id: "PT-068",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "Querida professora Lúcia,\nMeu filho Daniel não pôde ir à aula hoje porque amanheceu com febre e precisou fazer exames no posto de saúde. Amanhã ele levará a lição de casa feita.\nAtenciosamente, Cláudia.",
    enunciado: "Qual motivo impediu Daniel de comparecer à aula hoje?",
    alternativas: [
      "Ele perdeu o ônibus escolar pela manhã.",
      "Amanheceu com febre e foi ao posto de saúde.",
      "Precisou viajar com a família para outra cidade.",
      "Ficou em casa terminando a lição de História."
    ],
    correta: 1,
    comentario: "O bilhete traz a justificativa explícita da mãe: 'não pôde ir à aula hoje porque amanheceu com febre e precisou fazer exames no posto de saúde'."
  },
  {
    id: "PT-069",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 3,
    apoio: "Na gincana ecológica do bairro, a Turma Verde recolheu 80 kg de plástico e 45 kg de papelão. A Turma Amarela recolheu 60 kg de plástico e 70 kg de papelão. Cada quilo de qualquer material reciclado valeu 2 pontos.",
    enunciado: "Quantos quilos de papelão a Turma Verde recolheu na gincana?",
    alternativas: [
      "45 kg de papelão.",
      "80 kg de papelão.",
      "70 kg de papelão.",
      "60 kg de papelão."
    ],
    correta: 0,
    comentario: "Lendo com atenção os dados da Turma Verde: 80 kg de plástico e 45 kg de papelão. O número 45 é exatamente a quantidade de papelão dessa equipe."
  },
  {
    id: "PT-070",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "A raposa andava faminta pela colina quando avistou uma videira carregada de cachos de uvas roxas e maduras. Tentou pular várias vezes, mas os ramos ficavam muito altos. Cansada de pular sem alcançar nada, virou as costas e disse que as uvas estavam verdes.",
    enunciado: "Por que a raposa não conseguiu comer as uvas da videira?",
    alternativas: [
      "Porque o dono da plantação apareceu com cães.",
      "Porque os ramos da videira ficavam muito altos.",
      "Porque as uvas tinham espinhos pontiagudos.",
      "Porque outro animal comeu todos os cachos antes."
    ],
    correta: 1,
    comentario: "O texto informa diretamente a causa: 'Tentou pular várias vezes, mas os ramos ficavam muito altos', impedindo o alcance."
  },

  // =========================================================================
  // HABILIDADE 2: Inferência e dedução (PT-071 a PT-080)
  // =========================================================================
  {
    id: "PT-071",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Beatriz guardou o pincel molhado no pote de água, limpou as mãos cheias de tinta azul no avental e olhou orgulhosa para a tela que secava perto da janela. O desenho de um navio no mar parecia quase se mexer.",
    enunciado: "As ações descritas no texto revelam que Beatriz:",
    alternativas: [
      "Estava com muita pressa para sair de casa.",
      "Havia acabado de concluir uma pintura artística.",
      "Ficou insatisfeita com o trabalho que realizou.",
      "Estava procurando suas tintas perdidas na sala."
    ],
    correta: 1,
    comentario: "Guardar pincel, limpar as mãos no avental, admirar a tela com orgulho e observar a pintura secar mostram que ela tinha acabado de finalizar uma obra de arte."
  },
  {
    id: "PT-072",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Assim que o sinal do recreio tocou, Marcelo correu até a lixeira para jogar a casca de maçã, pegou a corda de pular e chamou em voz alta: 'Gente, quem quer pular corda comigo hoje? Faltam duas pessoas para bater os lados!'.",
    enunciado: "A atitude de Marcelo durante o recreio indica que ele é uma criança:",
    alternativas: [
      "Tímida e que prefere brincar sempre sozinha.",
      "Sociável e que gosta de brincadeiras em grupo.",
      "Distraída e que esquece as regras dos jogos.",
      "Cansada e que deseja ficar sentada na sala."
    ],
    correta: 1,
    comentario: "Chamar os colegas, propor brincadeira coletiva e organizar quem bate a corda demonstram extroversão, sociabilidade e espírito de grupo."
  },
  {
    id: "PT-073",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "A mãe de Tiago encontrou a porta do armário da cozinha entreaberta e o pote de biscoitos de chocolate vazio sobre a bancada. No chão, pequenos farelos formavam uma trilha que terminava debaixo da mesa, onde Tiago brincava com seus carrinhos com as mãos cheias de farelo.",
    enunciado: "A partir das pistas encontradas pela mãe, pode-se deduzir com segurança que:",
    alternativas: [
      "Um gatinho da vizinhança entrou e comeu os biscoitos.",
      "Tiago pegou e comeu os biscoitos de chocolate escondido.",
      "A mãe esqueceu de comprar os biscoitos no supermercado.",
      "Os biscoitos estragaram e foram jogados no lixo."
    ],
    correta: 1,
    comentario: "A porta aberta, o pote vazio, a trilha de farelos até onde Tiago brincava e suas mãos fareladas formam pistas irrefutáveis de que ele comeu os biscoitos."
  },
  {
    id: "PT-074",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "O pescador puxou o barco para a areia e olhou com tristeza para a rede completamente vazia. Suspirou fundo, sentou-se na proa e começou a remendar os fios rompidos com um pedaço de barbante fino, pensando no almoço da família.",
    enunciado: "Pelo comportamento e sentimentos do pescador, deduz-se que:",
    alternativas: [
      "Ele conseguiu pescar muitos peixes grandes naquele dia.",
      "O dia de pescaria não teve sucesso e ele ficou preocupado.",
      "Ele estava muito feliz por ter consertado o motor do barco.",
      "Ele decidiu vender seu barco para nunca mais voltar ao mar."
    ],
    correta: 1,
    comentario: "A rede vazia, o olhar triste, o suspiro e a preocupação com o alimento da família indicam claramente um dia difícil e sem peixes."
  },
  {
    id: "PT-075",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "No dia da entrega de notas, Gabriela chegou em casa assobiando uma cantiga alegre, deu um abraço apertado no pai e colocou o boletim escolar bem no centro da mesa da cozinha antes mesmo que alguém perguntasse.",
    enunciado: "Pelo entusiasmo de Gabriela ao mostrar o boletim, podemos deduzir que:",
    alternativas: [
      "Ela teve um excelente desempenho e obteve boas notas.",
      "Ela estava com muito medo da reação de seus pais.",
      "O boletim foi entregue em branco sem nenhuma nota.",
      "Ela preferiu esconder o boletim dentro da mochila."
    ],
    correta: 0,
    comentario: "Chegar assobiando, abraçar o pai e exibir o boletim com orgulho no centro da mesa mostram total confiança e alegria pelas boas notas conquistadas."
  },
  {
    id: "PT-076",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "O pássaro construiu seu ninho na forquilha mais alta do ipê. Durante dias recolheu pequenos gravetos secos, folhas macias e fios de capim. Quando terminou, sentou-se sobre o ninho, aninhou as asas e não saiu dali mesmo sob ventos fortes.",
    enunciado: "A atitude do pássaro de permanecer no ninho sem sair indica que:",
    alternativas: [
      "Ele estava cansado demais para continuar voando.",
      "Ele estava protegendo e chocando seus ovos.",
      "Ele esqueceu o caminho de volta para a mata.",
      "Ele estava com medo de outros pássaros vizinhos."
    ],
    correta: 1,
    comentario: "Construir ninho forrado com material macio e permanecer aninhado nele mesmo no vento é o comportamento típico das aves que estão chocando e guardando seus ovos."
  },
  {
    id: "PT-077",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Quando dona Laura começou a calçar o par de tênis e pegou a coleira vermelha pendurada atrás da porta, o cachorro Totó começou a pular de quatro patas no ar, ganindo baixinho de alegria.",
    enunciado: "Totó pulou de alegria porque percebeu que:",
    alternativas: [
      "Era hora de tomar um banho de água fria no quintal.",
      "Dona Laura iria levá-lo para passear na rua.",
      "Iria tomar uma injeção de vacina no veterinário.",
      "Ficaria trancado sozinho dentro de casa o dia todo."
    ],
    correta: 1,
    comentario: "O par de tênis e a coleira nas mãos da dona são pistas claras para o cachorro de que ele sairá para o aguardado passeio diário."
  },
  {
    id: "PT-078",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "A tartaruguinha quebrou a casca do ovo sob a areia da praia na calada da noite. Sem nunca ter visto o oceano, guiou-se pelo reflexo prateado da lua sobre as ondas e caminhou com determinação até alcançar as primeiras espumas d'água.",
    enunciado: "O texto permite deduzir que a tartaruguinha recém-nascida:",
    alternativas: [
      "Precisou que a mãe tartaruga a carregasse até as águas.",
      "Seguiu seu instinto natural para encontrar o caminho do mar.",
      "Errou o caminho e caminhou na direção das dunas secas.",
      "Ficou perdida esperando o sol nascer para se movimentar."
    ],
    correta: 1,
    comentario: "Caminhar sozinha guiada pelo reflexo da lua sem nunca ter visto o mar é uma demonstração do instinto de sobrevivência natural das tartarugas marinhas."
  },
  {
    id: "PT-079",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Na hora do lanche, Juliana notou que Lucas olhava cabisbaixo para a mesa sem nenhuma lancheira. Ela repartiu seu sanduíche de queijo exatamente ao meio, colocou a metade em um guardanapo limpo e ofereceu a ele com um sorriso meigo.",
    enunciado: "O gesto de Juliana mostra que ela é uma colega:",
    alternativas: [
      "Egoísta e que não gosta de comer seu lanche.",
      "Generosa e atenta aos sentimentos dos amigos.",
      "Curiosa para saber o que os outros estão fazendo.",
      "Com pressa para terminar a refeição do recreio."
    ],
    correta: 1,
    comentario: "Perceber a situação difícil do amigo e dividir o próprio alimento com carinho revela empatia, atenção e grande generosidade."
  },
  {
    id: "PT-080",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "Durante uma noite de inverno, as luzes da cidade piscaram e se apagaram de repente. O pai acendeu duas velas e as crianças correram para pegar cobertores, sentando-se juntas no tapete para ouvir histórias contadas na penumbra.",
    enunciado: "Pela descrição do texto, deduz-se que as crianças reagiram à falta de energia elétrica com:",
    alternativas: [
      "Pânico e choro desesperado pela escuridão.",
      "Aproveitamento acolhedor daquele momento em família.",
      "Reclamações contínuas por não poderem ver televisão.",
      "Sono profundo antes mesmo de acenderem as velas."
    ],
    correta: 1,
    comentario: "Em vez de medo ou briga, elas pegaram cobertores e se aconchegaram para ouvir histórias ao redor das velas, tornando o imprevisto um momento prazeroso."
  },

  // =========================================================================
  // HABILIDADE 3: Vocabulário e efeitos de sentido (PT-081 a PT-090)
  // =========================================================================
  {
    id: "PT-081",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "O atleta dedicou-se intensamente aos treinos diários e superou todos os obstáculos com tenacidade admirável.",
    enunciado: "No texto, a palavra 'tenacidade' expressa a ideia de:",
    alternativas: [
      "Fraqueza e desistência.",
      "Firmeza, insistência e perseverança.",
      "Preguiça e desinteresse pelos treinos.",
      "Arrogância e desprezo pelos adversários."
    ],
    correta: 1,
    comentario: "'Tenacidade' significa persistência firme, capacidade de resistir às dificuldades sem desanimar. É sinônimo de perseverança e determinação."
  },
  {
    id: "PT-082",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Ao saber que o passeio ao zoológico havia sido cancelado por causa do temporal, o menino caiu das nuvens e ficou triste no quarto.",
    enunciado: "A expressão popular 'caiu das nuvens' significa que o menino:",
    alternativas: [
      "Sofreu uma queda de um brinquedo alto.",
      "Levou um grande choque de decepção e surpresa desagradável.",
      "Sonhou que estava voando pelo céu nublado.",
      "Ficou olhando para as nuvens de chuva pela janela."
    ],
    correta: 1,
    comentario: "'Cair das nuvens' é uma expressão figurada usada quando alguém é surpreendido por uma notícia frustrante ou desilusão repentina."
  },
  {
    id: "PT-083",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "A água cristalina da nascente corria suave entre as pedras verdes do riacho.",
    enunciado: "Qual das opções apresenta o sentido contrário (antônimo) de 'cristalina'?",
    alternativas: [
      "Límpida.",
      "Turva (barrenta).",
      "Transparente.",
      "Fria."
    ],
    correta: 1,
    comentario: "Água cristalina é água limpa e transparente. O oposto exato (antônimo) é água turva, escura ou barrenta."
  },
  {
    id: "PT-084",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "A bailarina movia-se pelo palco como uma pluma levada pela brisa suave da primavera.",
    enunciado: "Ao comparar os movimentos da bailarina a uma 'pluma', o autor quis destacar a sua:",
    alternativas: [
      "Pesadez e lentidão.",
      "Leveza e delicadeza.",
      "Velocidade estrondosa.",
      "Falta de equilíbrio nos passos."
    ],
    correta: 1,
    comentario: "A pluma (pena) é símbolo clássico de delicadeza e peso mínimo; a comparação foi feita para enfatizar a extrema leveza e graça dos movimentos da bailarina."
  },
  {
    id: "PT-085",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 3,
    apoio: "O detetive analisou minuciosamente cada pista encontrada no jardim da mansão antes de tirar suas conclusões.",
    enunciado: "No texto, a palavra 'minuciosamente' significa que a análise foi feita de forma:",
    alternativas: [
      "Descuidada e sem interesse.",
      "Superficial e muito rápida.",
      "Muito detalhada e atenta a pequenas coisas.",
      "Incorreta e cheia de enganos."
    ],
    correta: 2,
    comentario: "'Minuciosamente' vem de minúcia (pequeno detalhe). Analisar minuciosamente significa examinar com enorme atenção aos menores detalhes."
  },
  {
    id: "PT-086",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "O avô disse ao neto: 'Meu filho, não coloque a carroça na frente dos bois! Espere o momento certo para tomar a decisão'.",
    enunciado: "A frase 'colocar a carroça na frente dos bois' adverte contra:",
    alternativas: [
      "Cuidar mal dos animais da fazenda.",
      "Fazer as coisas na ordem errada com precipitação.",
      "Andar de carroça em estradas de terra perigosas.",
      "Trabalhar durante a noite sem iluminação."
    ],
    correta: 1,
    comentario: "Na vida real os bois puxam a carroça à frente. Inverter essa ordem é uma metáfora para quem se precipita e faz as etapas antes da hora certa."
  },
  {
    id: "PT-087",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 3,
    apoio: "As instruções do jogo eram tão complexas e cheias de regras confusas que os alunos resolveram brincar de outra coisa.",
    enunciado: "Qual das palavras a seguir é o sinônimo mais apropriado para a palavra 'complexas'?",
    alternativas: [
      "Simples.",
      "Complicadas.",
      "Curtas.",
      "Divertidas."
    ],
    correta: 1,
    comentario: "'Complexo' é aquilo que é formado por muitas partes intrincadas e difíceis de compreender; portanto, é sinônimo de 'complicado'."
  },
  {
    id: "PT-088",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "O quarto das crianças estava impecável: roupas dobradas nas gavetas, brinquedos nas caixas e cama estendida.",
    enunciado: "Na frase, a palavra 'impecável' tem o mesmo sentido de:",
    alternativas: [
      "Bagunçado.",
      "Perfeitamente arrumado e limpo.",
      "Escuro e empoeirado.",
      "Pequeno e apertado."
    ],
    correta: 1,
    comentario: "'Impecável' descreve algo que não apresenta nenhum defeito ou falha; no contexto de arrumação de quarto, significa totalmente organizado e limpo."
  },
  {
    id: "PT-089",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "O jovem músico estava com frio na barriga minutos antes de pisar no palco do teatro municipal pela primeira vez.",
    enunciado: "A expressão figurada 'frio na barriga' indica uma sensação física de:",
    alternativas: [
      "Vontade urgente de comer um doce.",
      "Ansiedade e nervosismo diante de um grande momento.",
      "Dor de estômago por causa de alimentos estragados.",
      "Sensação térmica provocada pelo ar-condicionado."
    ],
    correta: 1,
    comentario: "'Frio na barriga' é a expressão utilizada para ilustrar o nervosismo, a ansiedade ou o suspense antes de uma apresentação ou desafio importante."
  },
  {
    id: "PT-090",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 3,
    apoio: "Aquele cientista tem uma mente brilhante: desenvolveu um purificador de água acessível com materiais de baixo custo para comunidades ribeirinhas.",
    enunciado: "A palavra 'brilhante', no sentido figurado usado na frase, destaca que o cientista é:",
    alternativas: [
      "Uma pessoa com pele iluminada por lâmpadas.",
      "Alguém extremamente inteligente e engenhoso.",
      "Um homem que usa roupas reluzentes e prateadas.",
      "Uma pessoa que gosta de olhar o brilho das estrelas."
    ],
    correta: 1,
    comentario: "Dizer que uma mente ou pessoa é 'brilhante' é um uso conotativo (figurado) para elogiar alta inteligência, talento e criatividade notável."
  },

  // =========================================================================
  // HABILIDADE 4: Organização textual e ideia principal (PT-091 a PT-100)
  // =========================================================================
  {
    id: "PT-091",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "As florestas tropicais abrigam mais da metade das espécies de plantas e animais de todo o planeta Terra. Além de proteger o solo contra a erosão das chuvas, as árvores absorvem gás carbônico e liberam oxigênio para a atmosfera, ajudando no equilíbrio do clima global.",
    enunciado: "Qual é a ideia central apresentada no parágrafo?",
    alternativas: [
      "A variedade de tipos de solo das áreas secas.",
      "A relevância vital das florestas tropicais para o meio ambiente.",
      "O perigo dos animais predadores que vivem nas matas.",
      "A quantidade de chuva que cai durante os invernos."
    ],
    correta: 1,
    comentario: "O parágrafo foi organizado para expor a enorme biodiversidade e a importância ecológica das matas para o clima e a vida no planeta."
  },
  {
    id: "PT-092",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Primeiro, Lucas encheu um balde com água e xampu automotivo. Em seguida, ensaboou toda a lataria do carro com uma esponja macia. Por fim, enxaguou o veículo com a mangueira e secou tudo com panos limpos.",
    enunciado: "As palavras 'Primeiro', 'Em seguida' e 'Por fim' foram empregadas no texto com o objetivo de:",
    alternativas: [
      "Descrever as cores da lataria do automóvel.",
      "Marcar a ordem temporal e a sequência das ações.",
      "Fazer uma crítica à quantidade de água utilizada.",
      "Explicar por que o carro estava tão sujo."
    ],
    correta: 1,
    comentario: "Marcadores temporais e ordinais como 'primeiro', 'em seguida' e 'por fim' estabelecem a ordem cronológica correta dos fatos narrados."
  },
  {
    id: "PT-093",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 3,
    apoio: "O uso prolongado e excessivo de telas eletrônicas antes de dormir pode prejudicar a qualidade do sono de crianças e adultos. A luz azul emitida por celulares e tablets inibe a produção de melatonina, o hormônio do sono, provocando insônia e cansaço no dia seguinte.",
    enunciado: "De acordo com o texto, qual é a consequência do uso de telas na hora de dormir?",
    alternativas: [
      "Aceleração do aprendizado de línguas estrangeiras.",
      "Aumento da produção natural de melatonina no corpo.",
      "Dificuldade para adormecer e cansaço no dia seguinte.",
      "Melhora imediata na visão das pessoas."
    ],
    correta: 2,
    comentario: "A relação de causa e efeito é explícita no texto: a luz azul inibe o hormônio do sono e provoca insônia e cansaço no dia seguinte."
  },
  {
    id: "PT-094",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 1,
    apoio: "VACINE SEU CÃO OU GATO CONTRA A RAIVA!\nData: 10 de setembro em todas as unidades de saúde da família.\nA vacina é gratuita e protege seu animalzinho contra uma doença perigosa. Traga a carteirinha de vacinação!",
    enunciado: "Esse texto tem a finalidade comunicativa de:",
    alternativas: [
      "Convidar os moradores para um concurso de beleza canina.",
      "Divulgar uma campanha pública de vacinação de animais.",
      "Ensinar como alimentar cães e gatos filhotes em casa.",
      "Vender remédios e vitaminas veterinárias com desconto."
    ],
    correta: 1,
    comentario: "O texto é um cartaz oficial de campanha de saúde pública informando data, gratuidade e necessidade da vacina contra a raiva."
  },
  {
    id: "PT-095",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Uma formiguinha carregava com sacrifício uma semente pesada até o formigueiro. Um gafanhoto a observava tocando violino e rindo de tanto trabalho. Quando o inverno gelado chegou e a comida sumiu, o gafanhoto faminto bateu à porta da formiga pedindo abrigo e alimento.",
    enunciado: "O ensinamento transmitido por essa fábula é:",
    alternativas: [
      "O trabalho e a previdência garantem segurança no futuro.",
      "Tocar instrumentos musicais é a melhor profissão que existe.",
      "O inverno é a estação mais fácil para encontrar frutos.",
      "As formigas devem alimentar todos os insetos da mata."
    ],
    correta: 0,
    comentario: "A moral clássica da fábula Formiga e Gafanhoto ensina que quem trabalha e se previne tem sustento nos momentos de dificuldade."
  },
  {
    id: "PT-096",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Estimada dona Clara,\nConfirmamos a sua consulta odontológica de rotina para a próxima terça-feira, às 15h30. Caso necessite remarcar, por gentileza avise com 24 horas de antecedência.\nClínica Sorriso Aberto.",
    enunciado: "Esse texto classifica-se como:",
    alternativas: [
      "Uma carta pessoal com desabafos afetivos.",
      "Uma mensagem formal de confirmação de compromisso.",
      "Um poema com rimas e estrofes líricas.",
      "Uma notícia de jornal sobre saúde bucal."
    ],
    correta: 1,
    comentario: "Trata-se de uma comunicação de serviço de uma clínica para paciente confirmando data, horário e orientando sobre cancelamento."
  },
  {
    id: "PT-097",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 3,
    apoio: "Na primeira semana, os operários cavaram os alicerces profundos do prédio. No mês seguinte, ergueram as vigas de sustentação e as paredes de tijolos. No terceiro mês, cobriram o telhado e instalaram portas e janelas de vidro.",
    enunciado: "O que os operários realizaram imediatamente antes da instalação do telhado e das janelas?",
    alternativas: [
      "A pintura colorida de toda a fachada externa.",
      "A escavação inicial dos alicerces no solo.",
      "O levantamento das vigas de sustentação e paredes.",
      "A compra dos móveis planejados para os cômodos."
    ],
    correta: 2,
    comentario: "Cronologicamente: 1º alicerces, 2º vigas e paredes, 3º telhado e janelas. Portanto, antes do telhado foram erguidas as vigas e paredes."
  },
  {
    id: "PT-098",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Muitas cidades brasileiras vêm implementando ciclovias segregadas nas grandes avenidas. Além de oferecer segurança aos ciclistas, o uso da bicicleta reduz o número de veículos motorizados nas ruas, diminui os engarrafamentos e ajuda a despoluir o ar que respiramos.",
    enunciado: "De acordo com o texto lido, um dos maiores benefícios do incentivo às ciclovias é:",
    alternativas: [
      "O aumento da venda de carros importados velozes.",
      "A redução de engarrafamentos e da poluição do ar.",
      "A diminuição das calçadas para pedestres idosos.",
      "O encerramento do transporte por ônibus coletivos."
    ],
    correta: 1,
    comentario: "O texto elenca claramente as vantagens: diminui o trânsito, traz segurança e melhora a qualidade do ar que a população respira."
  },
  {
    id: "PT-099",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 3,
    apoio: "A água evapora dos mares e rios com o calor do sol, sobe em forma de vapor e condensa-se formando nuvens. Quando as nuvens ficam carregadas e pesadas, a água precipita em forma de chuva, retornando ao solo para reiniciar o ciclo.",
    enunciado: "Qual título melhor sintetiza o assunto de todo o texto lido?",
    alternativas: [
      "Os Peixes dos Mares Profundos.",
      "O Ciclo Natural da Água.",
      "Como Navegar em Dias Nublados.",
      "A Temperatura da Água do Mar."
    ],
    correta: 1,
    comentario: "O texto descreve a evaporação, condensação e precipitação da chuva, ou seja, as etapas do ciclo hidrológico (ciclo da água)."
  },
  {
    id: "PT-100",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 1,
    apoio: "Venha participar do Clube de Leitura da nossa escola!\nEncontros toda quinta-feira às 10 horas na biblioteca.\nNeste mês leremos juntos histórias de lendas do folclore brasileiro. Não perca!",
    enunciado: "O objetivo desse comunicado escolar é:",
    alternativas: [
      "Avisar sobre o conserto das lâmpadas da biblioteca.",
      "Convidar os alunos a participarem do clube de leitura.",
      "Cobrar a devolução de livros atrasados pelos alunos.",
      "Informar o cardápio da merenda de quinta-feira."
    ],
    correta: 1,
    comentario: "O texto conclama a comunidade escolar ('Venha participar do Clube de Leitura'), indicando local, dias e o tema dos encontros."
  },

  // =========================================================================
  // HABILIDADE 5: Ortografia e acentuação (PT-101 a PT-110)
  // =========================================================================
  {
    id: "PT-101",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Qual das opções abaixo completa corretamente as palavras com M ou N: ta___pa, ci___to e ca___po?",
    alternativas: [
      "M, N, M.",
      "N, M, N.",
      "M, M, N.",
      "N, N, M."
    ],
    correta: 0,
    comentario: "Usamos M antes de P e B: tampa e campo. Antes de outras consoantes (como a letra T em cinto), usamos a letra N."
  },
  {
    id: "PT-102",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "A palavra 'MÁGICO' recebe acento gráfico obrigatório porque:",
    alternativas: [
      "É oxítona terminada na letra O.",
      "É proparoxítona (e todas as proparoxítonas são acentuadas).",
      "É paroxítona terminada em ditongo crescente.",
      "É monossílabo com vogal aberta."
    ],
    correta: 1,
    comentario: "Em 'má-gi-co', a sílaba tônica é a antepenúltima (má). Pela regra da língua portuguesa, todas as palavras proparoxítonas recebem acento gráfico."
  },
  {
    id: "PT-103",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "Assinale a alternativa em que todas as palavras estão grafadas corretamente com as letras G ou J:",
    alternativas: [
      "Girafa, tijolo e viagem.",
      "Jirafa, tigolo e viajem.",
      "Girafa, tigolo e viajem.",
      "Jirafa, tijolo e viagem."
    ],
    correta: 0,
    comentario: "A grafia correta no português é girafa (com G), tijolo (com J) e o substantivo viagem (com G). As outras opções trazem erros de escrita."
  },
  {
    id: "PT-104",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 3,
    enunciado: "Assinale o conjunto no qual todas as palavras são paroxítonas acentuadas pelas regras ortográficas:",
    alternativas: [
      "Tórax, régua e álbum.",
      "Café, dominó e urubu.",
      "Música, médico e sábado.",
      "Sol, pé e flor."
    ],
    correta: 0,
    comentario: "'Tó-rax' (terminada em X), 'ré-gua' (terminada em ditongo) e 'ál-bum' (terminada em UM) são paroxítonas acentuadas. O grupo com música são proparoxítonas e café são oxítonas."
  },
  {
    id: "PT-105",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Em qual das palavras a seguir ocorre o dígrafo RR para indicar o som forte do R entre vogais?",
    alternativas: [
      "Arara.",
      "Barraca.",
      "Prato.",
      "Porta."
    ],
    correta: 1,
    comentario: "Em 'barraca' usamos RR para reproduzir o som forte entre as duas vogais A. Em arara o R é brando; em prato e porta são encontros consonantais."
  },
  {
    id: "PT-106",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "Assinale a alternativa em que todas as palavras são escritas corretamente com X:",
    alternativas: [
      "Xícara, peixe e caixa.",
      "Chícara, peiche e caicha.",
      "Xícara, peiche e caixa.",
      "Chícara, peixe e caicha."
    ],
    correta: 0,
    comentario: "Escrevemos com X as palavras 'xícara', 'peixe' e 'caixa' (após ditongo 'ai' usamos a consoante X)."
  },
  {
    id: "PT-107",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 3,
    enunciado: "Na palavra 'GUITARRA', as letras GU e as letras RR são classificadas gramaticalmente como:",
    alternativas: [
      "Encontros consonantais com sons separados.",
      "Dígrafos (duas letras que representam um som só).",
      "Vogais nasais com acento circunflexo.",
      "Ditongos orais decrescentes."
    ],
    correta: 1,
    comentario: "Em 'guitarra', o 'gu' (antes de i sem pronunciar o u) e o 'rr' formam dois dígrafos, pois cada par de letras produz apenas um som na fala."
  },
  {
    id: "PT-108",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "Assinale a alternativa que traz a separação silábica correta da palavra 'PÁSSARO':",
    alternativas: [
      "pás-sa-ro",
      "pá-ssa-ro",
      "páss-a-ro",
      "pá-ss-aro"
    ],
    correta: 0,
    comentario: "Na separação silábica, os dígrafos SS e RR devem sempre se separar em sílabas vizinhas: 'pás-sa-ro' e 'car-ro'."
  },
  {
    id: "PT-109",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 3,
    enunciado: "A palavra 'MARACUJÁ' é acentuada com acento agudo porque:",
    alternativas: [
      "É uma oxítona terminada na vogal A.",
      "É uma proparoxítona com sílaba antepenúltima forte.",
      "É uma paroxítona terminada em consoante.",
      "É um monossílabo com vogal nasal."
    ],
    correta: 0,
    comentario: "'Ma-ra-cu-já' tem a última sílaba forte (oxítona). Pela regra, acentuam-se as oxítonas terminadas nas vogais A, E, O (seguidas ou não de S)."
  },
  {
    id: "PT-110",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Em qual das seguintes opções o uso do hífen na palavra composta está adequado:",
    alternativas: [
      "Guarda-chuva.",
      "Guardachuva.",
      "Guarda chuva.",
      "Guarda_chuva."
    ],
    correta: 0,
    comentario: "A palavra composta 'guarda-chuva' é grafada com hífen, unindo o verbo guardar ao substantivo chuva para formar um novo objeto."
  },

  // =========================================================================
  // HABILIDADE 6: Pontuação e conhecimentos linguísticos (PT-111 a PT-120)
  // =========================================================================
  {
    id: "PT-111",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    apoio: "O professor de Ciências perguntou:\n— Quantos planetas giram em torno do Sol?",
    enunciado: "Os dois-pontos (:) usados no primeiro verso servem para:",
    alternativas: [
      "Finalizar a história com emoção.",
      "Anunciar que uma personagem vai falar a seguir.",
      "Separar uma pergunta de uma exclamação.",
      "Indicar uma dúvida que ninguém sabe responder."
    ],
    correta: 1,
    comentario: "Na estrutura do diálogo, os dois-pontos servem para anunciar a fala de uma personagem, que se inicia no parágrafo seguinte com travessão."
  },
  {
    id: "PT-112",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Na frase 'O gato rajado dormia no tapete vermelho', as palavras 'rajado' e 'vermelho' têm a função de:",
    alternativas: [
      "Verbos (ações que o gato praticava).",
      "Substantivos (nomes de animais e móveis).",
      "Adjetivos (características que qualificam o gato e o tapete).",
      "Pronomes (que substituem os nomes das coisas)."
    ],
    correta: 2,
    comentario: "'Rajado' é adjetivo que qualifica o substantivo gato; 'vermelho' é adjetivo que caracteriza a cor do substantivo tapete."
  },
  {
    id: "PT-113",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    enunciado: "Assinale a alternativa que traz um exemplo de substantivo coletivo (palavra no singular que indica um conjunto de seres da mesma espécie):",
    alternativas: [
      "Constelação (conjunto de estrelas).",
      "Estrelas brilhantes.",
      "Céu azul.",
      "Planetas distantes."
    ],
    correta: 0,
    comentario: "'Constelação' é o substantivo coletivo que nomeia o conjunto de estrelas. As outras opções são substantivos comuns no plural ou adjetivos."
  },
  {
    id: "PT-114",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Na frase 'Ontem os alunos brincaram no pátio', o verbo 'brincaram' expressa uma ação que ocorreu no tempo:",
    alternativas: [
      "Presente (agora).",
      "Passado / Pretérito (já aconteceu).",
      "Futuro (ainda acontecerá).",
      "Impossível de identificar."
    ],
    correta: 1,
    comentario: "A terminação verbal '-aram' acompanhada da palavra 'Ontem' indica que o fato já aconteceu, pertencendo ao tempo passado (pretérito)."
  },
  {
    id: "PT-115",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 3,
    enunciado: "Em qual frase a pontuação está perfeitamente correta para indicar uma fala direta com vocativo (chamamento)?",
    alternativas: [
      "— Mariana, venha ver as fotos da viagem!",
      "— Mariana venha ver as fotos, da viagem!",
      "— Mariana venha, ver as fotos da viagem!",
      "— Mariana venha ver as, fotos da viagem!"
    ],
    correta: 0,
    comentario: "O termo usado para chamar alguém (vocativo 'Mariana') deve ser isolado por vírgula logo no início da oração: '— Mariana, venha ver as fotos da viagem!'."
  },
  {
    id: "PT-116",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Qual das opções apresenta o antônimo e o plural corretos para a palavra 'FELIZ'?",
    alternativas: [
      "Antônimo: infeliz / Plural: felizes.",
      "Antônimo: alegre / Plural: felizs.",
      "Antônimo: infeliz / Plural: felizas.",
      "Antônimo: contente / Plural: felizis."
    ],
    correta: 0,
    comentario: "O antônimo (oposto) de feliz é infeliz. O plural das palavras terminadas em Z é feito acrescentando -ES: feliz -> felizes."
  },
  {
    id: "PT-117",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    apoio: "Felipe comprou um estojo novo e ele emprestou uma borracha para o colega.",
    enunciado: "Na frase, a palavra 'ele' funciona como:",
    alternativas: [
      "Um pronome pessoal do caso reto que substitui Felipe.",
      "Um adjetivo que qualifica a borracha.",
      "Um verbo que indica a ação de comprar.",
      "Um substantivo comum com letra minúscula."
    ],
    correta: 0,
    comentario: "'Ele' é um pronome pessoal do caso reto utilizado para substituir o nome Felipe, garantindo que o texto não fique repetitivo."
  },
  {
    id: "PT-118",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 3,
    enunciado: "Assinale a alternativa que apresenta concordância perfeita entre o artigo, o substantivo e o adjetivo:",
    alternativas: [
      "As meninas dedicadas venceram o torneio.",
      "Os meninas dedicado venceram o torneio.",
      "As meninas dedicado venceram o torneio.",
      "Os meninas dedicadas venceram o torneio."
    ],
    correta: 0,
    comentario: "Em 'As meninas dedicadas', o artigo 'As' e o adjetivo 'dedicadas' concordam rigorosamente em gênero (feminino) e número (plural) com o substantivo 'meninas'."
  },
  {
    id: "PT-119",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    enunciado: "Qual sinal de pontuação deve ser usado para encerrar uma frase que expressa uma afirmação simples e completa, como: 'O sol se põe no horizonte'?",
    alternativas: [
      "Ponto final (.).",
      "Ponto de interrogação (?).",
      "Vírgula (,).",
      "Dois-pontos (:)."
    ],
    correta: 0,
    comentario: "Nas frases declarativas afirmativas simples, encerramos a frase com o ponto final (.), indicando o término da ideia declarada."
  },
  {
    id: "PT-120",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 3,
    enunciado: "Na frase 'No jardim da escola floriram rosas brancas, margaridas amarelas e cravos vermelhos', as vírgulas foram utilizadas para:",
    alternativas: [
      "Separar elementos de uma enumeração de flores.",
      "Indicar que alguém fez uma pergunta retórica.",
      "Mostrar que o narrador esqueceu o nome das flores.",
      "Substituir o ponto final da oração."
    ],
    correta: 0,
    comentario: "As vírgulas separam os itens listados numa série de mesma função sintática (rosas brancas, margaridas amarelas e cravos vermelhos)."
  }
];
