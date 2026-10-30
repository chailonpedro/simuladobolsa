import { Questao } from '../types';

/**
 * BANCO DEFINITIVO DE LÍNGUA PORTUGUESA - 60 QUESTÕES (4º ANO DO ENSINO FUNDAMENTAL)
 * Referência: Edital 003/ColégioUnochapecó/2026 – Bolsa Mérito Estudantil.
 * 
 * Distribuição rigorosa: exatamente 10 questões para cada uma das 6 habilidades:
 * 1. Localização de informação explícita no texto (PT-001, PT-007 a PT-015)
 * 2. Inferência e dedução (PT-002, PT-016 a PT-024)
 * 3. Vocabulário e efeitos de sentido (PT-003, PT-025 a PT-033)
 * 4. Organização textual e ideia principal (PT-004, PT-034 a PT-042)
 * 5. Ortografia e acentuação (PT-005, PT-043 a PT-051)
 * 6. Pontuação e conhecimentos linguísticos (PT-006, PT-052 a PT-060)
 */
export const QUESTOES_PORTUGUES: Questao[] = [
  // =========================================================================
  // HABILIDADE 1: LOCALIZAÇÃO DE INFORMAÇÃO EXPLÍCITA NO TEXTO (10 QUESTÕES)
  // =========================================================================
  {
    id: "PT-001",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "A arara-azul é uma ave muito bonita que vive no Pantanal e em matas brasileiras. Ela se alimenta principalmente de castanhas de palmeiras, como o buriti e o acuri. Com seu bico forte e curvo, consegue quebrar as cascas duras com facilidade. Ela costuma voar em duplas ou em bandos barulhentos no início da manhã.",
    enunciado: "De acordo com o texto, qual é o alimento principal da arara-azul?",
    alternativas: [
      "Frutas maduras caídas no chão da mata.",
      "Castanhas de palmeiras como buriti e acuri.",
      "Pequenos peixes encontrados na beira do rio.",
      "Folhas verdes colhidas nos galhos mais altos."
    ],
    correta: 1,
    comentario: "O texto afirma com todas as letras que a arara-azul 'se alimenta principalmente de castanhas de palmeiras, como o buriti e o acuri'. As outras opções não constam no texto."
  },
  {
    id: "PT-007",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "Bolo de Cenoura da Vovó Elza\nIngredientes: 3 cenouras médias raladas, 3 ovos, 1 xícara de óleo, 2 xícaras de açúcar, 2 xícaras de farinha de trigo e 1 colher de fermento em pó.\nModo de preparo: Bata as cenouras, os ovos e o óleo no liquidificador. Misture o açúcar e a farinha. Asse por 40 minutos em forno médio.",
    enunciado: "De acordo com a receita, por quanto tempo o bolo deve assar no forno?",
    alternativas: [
      "Por 20 minutos.",
      "Por 30 minutos.",
      "Por 40 minutos.",
      "Por 50 minutos."
    ],
    correta: 2,
    comentario: "No modo de preparo da receita, está escrito com clareza: 'Asse por 40 minutos em forno médio'. As outras alternativas indicam tempos diferentes que não estão no texto."
  },
  {
    id: "PT-008",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "Oi, Mariana!\nDeixei o livro de Ciências que você me pediu em cima da mesa da sala, ao lado do estojo verde. Não se esqueça de levar para a escola amanhã, pois a professora pediu a lição pronta.\nBeijos, Bia.",
    enunciado: "Onde o livro de Ciências foi deixado por Bia?",
    alternativas: [
      "Dentro da mochila escolar de Bia.",
      "Na prateleira do quarto de dormir.",
      "Em cima da mesa da sala.",
      "No banco de trás do carro."
    ],
    correta: 2,
    comentario: "O bilhete de Bia afirma de forma explícita: 'Deixei o livro de Ciências [...] em cima da mesa da sala, ao lado do estojo verde'. As outras opções não constam no bilhete."
  },
  {
    id: "PT-009",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "A Prefeitura inaugurou nesta terça-feira a nova biblioteca infantil do Parque das Águas. O espaço conta com mais de 2.000 livros ilustrados e funcionará de segunda a sexta-feira, das 8h às 17h. Para retirar livros emprestados, basta levar um documento com foto e comprovante de residência.",
    enunciado: "Segundo a notícia, quais documentos são necessários para retirar livros emprestados?",
    alternativas: [
      "Carteira de vacinação e comprovante de renda.",
      "Documento com foto e comprovante de residência.",
      "Apenas a autorização assinada pelos pais.",
      "Certidão de nascimento e foto 3x4 recente."
    ],
    correta: 1,
    comentario: "O texto informa expressamente na última frase: 'basta levar um documento com foto e comprovante de residência'. Essa informação está escrita de forma direta na notícia."
  },
  {
    id: "PT-010",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "O leão dormia tranquilamente sob a sombra fresca de uma árvore quando um ratinho começou a correr sobre seu nariz. O leão acordou assustado, prendeu o ratinho com a pata e abriu a boca para engoli-lo. O ratinho implorou: 'Por favor, rei da floresta, deixe-me viver! Um dia poderei retribuir sua bondade'.",
    enunciado: "O que fez o leão acordar assustado na fábula?",
    alternativas: [
      "O barulho do vento nas folhas secas.",
      "O rugido distante de outro leão feroz.",
      "O ratinho correndo sobre seu nariz.",
      "O passo pesado de um caçador na mata."
    ],
    correta: 2,
    comentario: "O texto conta diretamente que o leão acordou assustado porque 'um ratinho começou a correr sobre seu nariz'. As outras alternativas apresentam fatos inventados."
  },
  {
    id: "PT-011",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "CAMPANHA DE ADOÇÃO DE FILHOTES\nVenha encontrar seu novo companheiro de quatro patas!\nData: 15 de novembro (sábado), das 9h às 14h.\nLocal: Praça Central, ao lado do coreto.\nImportante: Todos os animais já estão vacinados. Traga uma caixa de transporte para levar seu pet.",
    enunciado: "O cartaz orienta que as pessoas que forem adotar devem trazer consigo:",
    alternativas: [
      "Um saco de ração seca de filhote.",
      "Uma caixa própria de transporte.",
      "A coleira antiga de outro animal.",
      "Uma cobertinha limpa para o filhote."
    ],
    correta: 1,
    comentario: "Na seção 'Importante' do cartaz está escrito claramente: 'Traga uma caixa de transporte para levar seu pet'. Não se pede ração, coleira antiga ou cobertinha."
  },
  {
    id: "PT-012",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "O caracol viaja devagar,\nNão tem nenhuma pressa de chegar.\nLeva a sua casa nas costas,\nFaça chuva ou faça sol,\nPelo jardim vai passear\nO sossegado caracol.",
    enunciado: "De acordo com os versos do poema, o que o caracol carrega nas costas?",
    alternativas: [
      "Uma folha fresca de alface.",
      "A sua própria casa.",
      "Uma gotinha fria de sereno.",
      "Uma mochila pequena de viagem."
    ],
    correta: 1,
    comentario: "O terceiro verso do poema diz de forma explícita: 'Leva a sua casa nas costas', numa referência poética à concha do caracol."
  },
  {
    id: "PT-013",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "O tamanduá-bandeira é um animal que não tem dentes. Para se alimentar, ele usa suas garras dianteiras fortes para cavar formigueiros e cupinzeiros. Em seguida, enfia sua língua comprida e pegajosa, que pode medir até 60 centímetros, capturando centenas de formigas com facilidade.",
    enunciado: "Qual parte do corpo o tamanduá-bandeira usa diretamente para capturar os insetos?",
    alternativas: [
      "Suas garras dianteiras afiadas.",
      "Seus dentes pontiagudos e pequenos.",
      "Sua língua comprida e pegajosa.",
      "Sua cauda longa e felpuda."
    ],
    correta: 2,
    comentario: "O texto informa que as garras servem para cavar e que ele captura os insetos enfiando 'sua língua comprida e pegajosa'. O animal nem sequer tem dentes."
  },
  {
    id: "PT-014",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 1,
    apoio: "No primeiro quadrinho, Pedro procura seu gatinho Mingau debaixo da cama. No segundo quadrinho, chama pelo gato no quintal sacudindo a tigela de ração. No terceiro quadrinho, encontra Mingau dormindo profundamente em cima do cesto de roupas limpas.",
    enunciado: "Onde Pedro finalmente encontrou o gatinho Mingau?",
    alternativas: [
      "Debaixo da cama de seu quarto.",
      "Dormindo em cima do cesto de roupas.",
      "Perto do portão no quintal dos fundos.",
      "Escondido atrás do sofá da sala."
    ],
    correta: 1,
    comentario: "A descrição do terceiro quadrinho mostra diretamente que Pedro 'encontra Mingau dormindo profundamente em cima do cesto de roupas limpas'."
  },
  {
    id: "PT-015",
    disciplina: "Portugues",
    habilidade: "Localização de informação explícita no texto",
    nivel: 2,
    apoio: "No domingo ensolarado, dona Clara organizou uma cesta de piquenique com suco de uva, pãezinhos de queijo e fatias de melancia. Convidou seus dois filhos, Gabriel e Luísa, para irem de bicicleta até o bosque municipal da cidade.",
    enunciado: "Quem dona Clara convidou para o piquenique no bosque municipal?",
    alternativas: [
      "Os avós maternos de Gabriel e Luísa.",
      "Seus dois filhos, Gabriel e Luísa.",
      "Os vizinhos do prédio onde ela mora.",
      "Os professores da escola do bairro."
    ],
    correta: 1,
    comentario: "O texto declara expressamente: 'Convidou seus dois filhos, Gabriel e Luísa'. As outras alternativas trazem pessoas que nem foram citadas na história."
  },

  // =========================================================================
  // HABILIDADE 2: INFERÊNCIA E DEDUÇÃO (10 QUESTÕES)
  // =========================================================================
  {
    id: "PT-002",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "No sábado bem cedinho, Lucas calçou as chuteiras novas e arrumou a garrafinha de água na mochila. Olhou pela janela, viu o sol brilhando e abriu um sorriso largo. Logo gritou para a cozinha: 'Papai, não esquece que hoje nós jogamos contra o 4º ano B!'",
    enunciado: "A partir das pistas do texto, podemos concluir que Lucas estava...",
    alternativas: [
      "preocupado com a previsão de chuva no sábado.",
      "animado para disputar uma partida de futebol.",
      "cansado porque precisou acordar muito cedo.",
      "com pressa para terminar a lição de casa."
    ],
    correta: 1,
    comentario: "Lucas calçou chuteiras, guardou garrafa de água, sorriu ao ver o sol e falou do jogo contra outra turma. Todas essas pistas mostram que ele estava muito animado para jogar futebol."
  },
  {
    id: "PT-016",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Camila entrou na sala na ponta dos pés, cobriu o irmãozinho com uma manta suave e desligou o aparelho de televisão. Depois, puxou as cortinas para diminuir a luz do sol e saiu do quarto sem fazer nenhum barulho.",
    enunciado: "Pelas ações de Camila, podemos deduzir que o irmão dela:"
    ,
    alternativas: [
      "estava estudando com atenção para a prova.",
      "havia adormecido no sofá da sala.",
      "estava zangado com o programa de televisão.",
      "brincava de se esconder atrás da cortina."
    ],
    correta: 1,
    comentario: "Cobrir com cobertor, desligar a TV, diminuir a claridade e andar na ponta dos pés são ações cuidadosas voltadas a quem pegou no sono. As outras opções não combinam com as pistas."
  },
  {
    id: "PT-017",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Ao descer do carro na cidadezinha da serra, Felipe vestiu luvas grossas, cachecol e gorro de lã. Ao falar, pequenas nuvenzinhas de vapor branco saíam de sua boca. Ele esfregava as mãos e pulava de um lado para o outro sem parar.",
    enunciado: "As atitudes e vestimentas de Felipe permitem deduzir que o clima no local estava:"
    ,
    alternativas: [
      "Muito quente e ensolarado.",
      "Fazendo bastante frio.",
      "Com ventania e muita poeira.",
      "Chovendo de maneira torrencial."
    ],
    correta: 1,
    comentario: "Roupas de lã, vapor de água saindo pela boca ao falar e esfregar as mãos para aquecer são sinais claros de que a temperatura estava muito baixa (tempo frio)."
  },
  {
    id: "PT-018",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "O corvo segurava um queijo saboroso no bico. A raposa aproximou-se da árvore e disse: 'Que penas brilhantes você tem! Se sua voz for tão encantadora quanto sua beleza, você é o verdadeiro rei das aves!'. Vaidoso, o corvo abriu o bico para cantar, e o queijo caiu direto na boca da raposa.",
    enunciado: "O elogio feito pela raposa revela que a sua verdadeira intenção era:"
    ,
    alternativas: [
      "Elogiar com sinceridade a bela voz do corvo.",
      "Fazer amizade duradoura com o corvo da mata.",
      "Enganar o corvo para conseguir pegar o queijo.",
      "Pedir que o corvo lhe ensinasse a voar alto."
    ],
    correta: 2,
    comentario: "A raposa usou a vaidade do corvo como artifício: elogiou sua voz justamente para que ele abrisse o bico e soltasse o queijo, permitindo que ela ficasse com o alimento."
  },
  {
    id: "PT-019",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "Pingos grossos batem na calçada,\nO chão seco logo vira barro.\nO guarda-chuva esquecido em casa\nNão deu tempo de buscar,\nE o menino aperta o passo ligeiro\nPara não se ensopar.",
    enunciado: "Pelos versos do poema, deduz-se que o menino começou a correr porque:"
    ,
    alternativas: [
      "A chuva começou de surpresa e ele estava desprotegido.",
      "Estava apostando uma corrida veloz com seus colegas.",
      "Queria brincar com o barro que se formou no chão.",
      "Lembrou que havia esquecido a chave de casa na escola."
    ],
    correta: 0,
    comentario: "Os pingos grossos, o guarda-chuva que ficou em casa e o medo de 'se ensopar' mostram que uma chuva forte começou repentinamente e o menino precisou se abrigar depressa."
  },
  {
    id: "PT-020",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Durante a aula de Arte, Tiago olhou para o estojo vazio e depois para a folha branca de desenho. Suspirou baixinho, virou-se para a colega da carteira ao lado e perguntou com as bochechas coradas: 'Mari, você pode me emprestar dois lápis de cor?'.",
    enunciado: "A atitude de Tiago permite concluir que ele:"
    ,
    alternativas: [
      "Não gostava de desenhar na aula de Arte.",
      "Havia esquecido seus lápis de cor em casa.",
      "Achava a folha de papel grande demais.",
      "Queria apenas chamar a atenção da turma toda."
    ],
    correta: 1,
    comentario: "O estojo vazio, o suspiro desanimado e o pedido tímido à colega mostram claramente que ele estava sem materiais naquele momento porque esqueceu seus lápis."
  },
  {
    id: "PT-021",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "O cachorrinho Pipoca começou a abanar o rabo vigorosamente, deu dois latidinhos curtos de alegria e correu em direção à porta da frente girando em círculos assim que ouviu o barulho suave da chave girando na fechadura.",
    enunciado: "O comportamento de Pipoca demonstra que ele:"
    ,
    alternativas: [
      "Ficou assustado com um barulho ameaçador.",
      "Percebeu que seu tutor estava chegando em casa.",
      "Queria fugir em disparada para o meio da rua.",
      "Estava sentindo uma dor aguda em sua patinha."
    ],
    correta: 1,
    comentario: "Abanar o rabo com vigor, dar latidos de contentamento e correr até a porta ao ouvir a chave na fechadura são reações típicas de quem reconhece o retorno do dono."
  },
  {
    id: "PT-022",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 3,
    apoio: "Moradores de um bairro plantaram 40 mudas de árvores nativas em uma praça pública e organizaram uma escala entre os vizinhos para que cada família regasse o canteiro em um dia diferente durante o período de estiagem.",
    enunciado: "A organização da escala de rega entre os vizinhos revela:"
    ,
    alternativas: [
      "Falta de cooperação entre as pessoas daquele bairro.",
      "União e cuidado comunitário com a preservação da praça.",
      "Que os moradores foram obrigados por lei a trabalhar.",
      "Que as árvores plantadas não precisavam de nenhum cuidado."
    ],
    correta: 1,
    comentario: "Organizar uma escala voluntária e dividir o trabalho de cuidar das plantinhas demonstra espírito comunitário, cooperação e zelo conjunto pelo ambiente da praça."
  },
  {
    id: "PT-023",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Ao receber o envelope pardo pelo correio, dona Teresa abriu-o com dedos trêmulos. Ao ler o cabeçalho, lágrimas de emoção desceram por seu rosto, ela levou a mão ao coração e exclamou: 'Ele conseguiu! O Pedro foi aprovado na prova!'.",
    enunciado: "Pelo texto, deduz-se que dona Teresa vivenciou um sentimento de:"
    ,
    alternativas: [
      "Imensa alegria e alívio pela conquista de Pedro.",
      "Grande preocupação com uma dívida desconhecida.",
      "Profunda tristeza por uma notícia decepcionante.",
      "Irritação com a demora do carteiro em entregar a carta."
    ],
    correta: 0,
    comentario: "Lágrimas de emoção aliadas ao grito de comemoração pela aprovação de Pedro indicam pura felicidade, orgulho e alívio com a conquista alcançada."
  },
  {
    id: "PT-024",
    disciplina: "Portugues",
    habilidade: "Inferência e dedução",
    nivel: 2,
    apoio: "Mãe, o ensaio da nossa apresentação de música demorou um pouco mais porque estávamos afinando os instrumentos. Fui para a casa do Léo terminar o cartaz de Ciências e chego em casa antes das seis.\nBeijos, Rodrigo.",
    enunciado: "A finalidade principal de Rodrigo ao escrever esse bilhete foi:"
    ,
    alternativas: [
      "Pedir permissão para faltar à aula no dia seguinte.",
      "Informar onde estava para manter a mãe tranquila.",
      "Reclamar que o ensaio de música foi muito cansativo.",
      "Pedir dinheiro emprestado para comprar tintas novas."
    ],
    correta: 1,
    comentario: "O menino explica o motivo do atraso, avisa seu paradeiro atual e estipula o horário de retorno. O objetivo do bilhete é comunicar e acalmar a mãe."
  },

  // =========================================================================
  // HABILIDADE 3: VOCABULÁRIO E EFEITOS DE SENTIDO (10 QUESTÕES)
  // =========================================================================
  {
    id: "PT-003",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Durante a brincadeira de pega-pega no parque, o avô olhou para o céu e avisou: 'Crianças, juntem as bicicletas! O tempo está fechando e precisamos voltar para casa antes que comece a chover'.",
    enunciado: "No texto, a expressão 'o tempo está fechando' significa que...",
    alternativas: [
      "o relógio do parque parou de marcar as horas.",
      "os portões do parque seriam trancados pelo guarda.",
      "o céu estava ficando escuro e cheio de nuvens de chuva.",
      "as crianças deveriam parar a brincadeira imediatamente."
    ],
    correta: 2,
    comentario: "A expressão 'o tempo está fechando' é uma forma figurada de dizer que o céu está escurecendo com nuvens de temporal. Não tem relação literal com trancar portas ou relógios."
  },
  {
    id: "PT-025",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "O pequeno esquilo era muito ligeiro: escalava os galhos mais altos num piscar de olhos para esconder as sementes que havia encontrado no gramado.",
    enunciado: "No texto, a palavra 'ligeiro' expressa a mesma ideia de:"
    ,
    alternativas: [
      "Distraído e descuidado.",
      "Rápido e veloz.",
      "Pesado e desajeitado.",
      "Preguiçoso e sonolento."
    ],
    correta: 1,
    comentario: "'Ligeiro' é sinônimo de rápido, ágil, veloz. O texto reforça esse sentido ao dizer que ele subia 'num piscar de olhos'. As outras palavras trazem sentidos opostos."
  },
  {
    id: "PT-026",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "A menina ficou radiante quando soube que a sua história em quadrinhos havia sido selecionada para o jornalzinho da escola.",
    enunciado: "Na frase, a palavra 'radiante' foi utilizada para expressar que a menina ficou:"
    ,
    alternativas: [
      "Extremamente feliz e empolgada.",
      "Com muito calor por causa do sol forte.",
      "Cansada depois de desenhar a tirinha.",
      "Com vergonha de mostrar seus desenhos."
    ],
    correta: 0,
    comentario: "Em sentido figurado, dizer que alguém está 'radiante' significa que a pessoa brilha de felicidade e contentamento. Não se refere a calor do sol nem a cansaço."
  },
  {
    id: "PT-027",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "Durante a prova de atletismo, os corredores mantinham um ritmo moderado, mas na última volta Pedro acelerou as passadas para cruzar a fita de chegada.",
    enunciado: "Qual das palavras abaixo representa o sentido contrário (antônimo) de 'acelerou'?"
    ,
    alternativas: [
      "Apressou.",
      "Diminuiu.",
      "Adiantou.",
      "Intensificou."
    ],
    correta: 1,
    comentario: "'Acelerar' significa aumentar o ritmo ou a velocidade. O sentido oposto (antônimo) é 'diminuir' ou reduzir a marcha. As outras opções são quase sinônimos."
  },
  {
    id: "PT-028",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "O professor de Ciências explicou como funciona o ciclo da água com tantas maquetes e desenhos que os alunos disseram: 'Agora essa lição virou sopa no mel!'."
    ,
    enunciado: "No texto, a expressão 'virou sopa no mel' quer dizer que a matéria explicada ficou:"
    ,
    alternativas: [
      "Com gosto muito doce para a turma.",
      "Muito simples e fácil de entender.",
      "Enrolada e difícil de memorizar.",
      "Sem graça e demorada para terminar."
    ],
    correta: 1,
    comentario: "A expressão popular 'sopa no mel' é uma metáfora utilizada para indicar que uma tarefa ou assunto se tornou facílimo e muito acessível."
  },
  {
    id: "PT-029",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Muitos animais da floresta possuem hábitos noturnos: passam as horas de sol dormindo abrigados em tocas e despertam somente ao anoitecer para procurar alimento.",
    enunciado: "No texto, a expressão 'hábitos noturnos' refere-se a animais que:"
    ,
    alternativas: [
      "Realizam a maior parte de suas atividades durante a noite.",
      "Dormem profundamente a noite inteira sem acordar.",
      "Habitam unicamente cavernas muito escuras e fundas.",
      "Gostam de tomar banho de sol no meio da tarde."
    ],
    correta: 0,
    comentario: "'Noturno' relaciona-se à noite. Animais de hábitos noturnos são aqueles que caçam, voam ou se locomovem no período da noite (como corujas e morcegos)."
  },
  {
    id: "PT-030",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "No momento decisivo da gincana escolar, o diretor pegou o microfone e falou devagar: 'E a turma campeã deste ano é... o 4º ano A!'."
    ,
    enunciado: "O uso das reticências (...) na fala do diretor serviu para criar um efeito de:"
    ,
    alternativas: [
      "Dúvida sobre qual turma havia vencido.",
      "Suspense e expectativa antes de revelar o campeão.",
      "Pressa para terminar o anúncio rapidamente.",
      "Tristeza pelo encerramento da gincana."
    ],
    correta: 1,
    comentario: "As reticências na fala do diretor representam uma pausa proposital para aumentar o suspense e a expectativa de todos os que ouviam o resultado."
  },
  {
    id: "PT-031",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Jonas queria muito contar para a prima qual seria o presente que ela ganharia no aniversário, mas seu pai o advertiu: 'Jonas, cuidado para não dar com a língua nos dentes!'."
    ,
    enunciado: "A expressão popular 'dar com a língua nos dentes' significa:"
    ,
    alternativas: [
      "Morder a ponta da língua por acidente.",
      "Comer muito rápido sem mastigar direito.",
      "Contar um segredo antes da hora certa.",
      "Ficar em silêncio absoluto sem responder."
    ],
    correta: 2,
    comentario: "A expressão 'dar com a língua nos dentes' significa revelar uma surpresa ou segredo que deveria ter sido guardado, estragando o suspense."
  },
  {
    id: "PT-032",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 1,
    apoio: "A velha fortaleza erguia-se imponente no cume do morro, com sólidas torres de pedra que vigiavam toda a planície ao redor.",
    enunciado: "No texto, a palavra 'imponente' pode ser substituída sem alterar o sentido por:"
    ,
    alternativas: [
      "Minúscula.",
      "Majestosa.",
      "Quebradiça.",
      "Apagada."
    ],
    correta: 1,
    comentario: "'Imponente' transmite a ideia de algo grandioso, magnífico, majestoso, que impressiona pelo seu porte. 'Minúscula' e 'quebradiça' dizem o contrário."
  },
  {
    id: "PT-033",
    disciplina: "Portugues",
    habilidade: "Vocabulário e efeitos de sentido",
    nivel: 2,
    apoio: "Aquele menino tem um coração de ouro: sempre compartilha seu lanche com quem esqueceu e ajuda os novos colegas a encontrarem as salas de aula.",
    enunciado: "A expressão 'coração de ouro' indica que o menino é:"
    ,
    alternativas: [
      "Muito rico e cheio de joias valiosas.",
      "Extremamente generoso e afetuoso com os outros.",
      "Um atleta forte que treina levantamento de peso.",
      "Um garoto que coleciona pedras douradas."
    ],
    correta: 1,
    comentario: "Dizer que alguém tem 'coração de ouro' é uma forma figurada de descrever uma pessoa repleta de bondade, generosidade e empatia."
  },

  // =========================================================================
  // HABILIDADE 4: ORGANIZAÇÃO TEXTUAL E IDEIA PRINCIPAL (10 QUESTÕES)
  // =========================================================================
  {
    id: "PT-004",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "As abelhas têm um papel fundamental na natureza. Ao voarem de flor em flor em busca de néctar, elas transportam o pólen e realizam a polinização. Esse processo permite que as plantas produzam frutos e sementes. Sem o trabalho incansável das abelhas, muitas frutas e verduras deixariam de existir na nossa alimentação.",
    enunciado: "Qual é a ideia principal do texto lido?",
    alternativas: [
      "O mel é o doce mais nutritivo que o ser humano consome.",
      "A importância das abelhas na polinização e na produção de alimentos.",
      "As abelhas voam apenas em flores que têm perfume adocicado.",
      "As sementes das plantas nascem sozinhas, sem precisar de insetos."
    ],
    correta: 1,
    comentario: "O texto todo foi escrito para explicar como as abelhas ajudam a natureza polinizando as plantas e garantindo nossos alimentos. As outras opções falam de coisas que não são o foco do texto."
  },
  {
    id: "PT-034",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "A reciclagem de papel desempenha um papel decisivo na preservação ambiental. Para fabricar papel novo virgem, muitas árvores precisam ser cortadas e milhares de litros de água são consumidos. Quando reciclamos papéis usados, poupamos florestas, economizamos água e reduzimos o volume de resíduos nos lixões.",
    enunciado: "Qual é o tema principal abordado no texto?"
    ,
    alternativas: [
      "O plantio de flores coloridas em jardins urbanos.",
      "A importância da reciclagem de papel para poupar recursos naturais.",
      "A história das fábricas de cadernos na antiguidade.",
      "O desperdício de tintas durante a produção de livros."
    ],
    correta: 1,
    comentario: "O objetivo de todo o texto é destacar como reciclar papel protege árvores, poupa água e reduz o lixo no planeta. Essa é a ideia central."
  },
  {
    id: "PT-035",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Na aula prática, os estudantes primeiro acomodaram os grãos de feijão sobre algodão molhado. Após três dias, brotaram as primeiras raízes alvas. Na semana seguinte, despontaram folhinhas verdes, e os alunos mudaram o feijoeiro para um vaso com terra adubada.",
    enunciado: "Na ordem dos acontecimentos, o que ocorreu logo depois de brotarem as raízes alvas?"
    ,
    alternativas: [
      "Os grãos foram colocados pela primeira vez no algodão.",
      "Despontaram as primeiras folhinhas verdes.",
      "Os feijões foram cozidos para o almoço da turma.",
      "O vaso de cerâmica foi comprado na feira."
    ],
    correta: 1,
    comentario: "Seguindo a ordem do texto: 1º grãos no algodão, 2º raízes alvas brotam, 3º despontam folhinhas verdes, 4º transferência para a terra. Portanto, logo após as raízes vieram as folhinhas."
  },
  {
    id: "PT-036",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Coloque 2 xícaras de farinha de aveia e 1 xícara de leite em uma tigela. Adicione uma banana amassada e misture bem com uma colher. Despeje pequenas porções em uma frigideira quente untada e doure dos dois lados por 3 minutos.",
    enunciado: "Pela presença de ingredientes e instruções ordenadas de preparo, esse texto é uma:"
    ,
    alternativas: [
      "Notícia de jornal informativo.",
      "Receita culinária instrutiva.",
      "Carta formal de agradecimento.",
      "Fábula com lição moral no final."
    ],
    correta: 1,
    comentario: "Textos estruturados com lista de medidas e passo a passo de como preparar um alimento pertencem ao gênero textual receita."
  },
  {
    id: "PT-037",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 1,
    apoio: "ÁGUA É VIDA: NÃO DESPERDICE!\nFeche a torneira ao escovar os dentes e reduza o tempo debaixo do chuveiro. Pequenas atitudes diárias garantem água limpa para o amanhã!",
    enunciado: "O objetivo comunicativo desse cartaz é:"
    ,
    alternativas: [
      "Fazer propaganda de um novo creme dental refrescante.",
      "Sensibilizar as pessoas sobre a economia e preservação da água.",
      "Ensinar a consertar torneiras que estão vazando.",
      "Convidar os moradores para uma competição de natação."
    ],
    correta: 1,
    comentario: "O cartaz tem a função social de campanha educativa: conscientizar a população para evitar o desperdício de água potável no dia a dia."
  },
  {
    id: "PT-038",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "A lebre gabava-se de sua velocidade imbatível. Ao disputar uma corrida com a tartaruga, saiu tão à frente que resolveu tirar uma soneca sob um carvalho. A tartaruga seguiu marchando passo a passo, sem parar. Ao despertar, a lebre viu a tartaruga atravessando vitoriosa a linha final.",
    enunciado: "Qual é a moral ou ensinamento principal dessa clássica fábula?"
    ,
    alternativas: [
      "Quem corre rápido sempre garante a vitória com facilidade.",
      "A constância e a disciplina superam o excesso de presunção.",
      "Tirar sonecas durante o dia é essencial para quem corre.",
      "As tartarugas nunca devem participar de corridas na mata."
    ],
    correta: 1,
    comentario: "A moral da história mostra que a determinação paciente da tartaruga foi capaz de derrotar a presunção e o relaxamento da lebre exibicionista."
  },
  {
    id: "PT-039",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Querida filha, deixei a lasanha pronta na travessa dentro do forno desligado. Antes de almoçar, peça ajuda ao seu pai para aquecer no micro-ondas. Não esqueça de regar a samambaia da varanda.\nUm beijo com carinho, Mãe.",
    enunciado: "Esse texto tem a finalidade de:"
    ,
    alternativas: [
      "Contar uma história inventada para adormecer.",
      "Deixar avisos e orientações práticas para a filha.",
      "Vender um forno de micro-ondas novo em folha.",
      "Convidar os amigos da filha para um almoço festivo."
    ],
    correta: 1,
    comentario: "O bilhete tem como propósito transmitir recados curtos, instruções do cotidiano e carinho entre pessoas próximas."
  },
  {
    id: "PT-040",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Choveu forte e continuamente por quatro dias seguidos na serra. As águas do córrego aumentaram rapidamente e cobriram a ponte de madeira, impedindo temporariamente a travessia dos ônibus escolares que levavam as crianças à cidade.",
    enunciado: "Qual foi o motivo que impediu a travessia dos ônibus escolares?"
    ,
    alternativas: [
      "A quebra mecânica dos motores dos ônibus escolares.",
      "A cheia do córrego que cobriu a ponte de madeira.",
      "A realização de uma corrida de bicicletas na serra.",
      "O cancelamento das aulas por causa das férias de verão."
    ],
    correta: 1,
    comentario: "A causa foi o excesso de chuvas que encheu o córrego até cobrir a ponte; a consequência direta foi o bloqueio da passagem dos ônibus."
  },
  {
    id: "PT-041",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 2,
    apoio: "Alunos do 4º ano construíram uma horta suspensa no pátio usando garrafas plásticas reaproveitadas. Eles plantaram alface, cebolinha e tomates-cereja, que agora reforçam as saladas servidas na merenda da escola.",
    enunciado: "O assunto central tratado na notícia é:"
    ,
    alternativas: [
      "A coleta seletiva de latinhas de refrigerante no bairro.",
      "A criação de uma horta reciclada que melhora a merenda escolar.",
      "Um campeonato esportivo realizado no pátio dos alunos.",
      "Uma aula teórica sobre tipos de solo e minerais."
    ],
    correta: 1,
    comentario: "A notícia foca na iniciativa dos estudantes de transformar garrafas em horta para enriquecer a merenda da escola com verduras frescas."
  },
  {
    id: "PT-042",
    disciplina: "Portugues",
    habilidade: "Organização textual e ideia principal",
    nivel: 1,
    apoio: "Te convido para festejar meus 9 anos!\nData: 12 de outubro, a partir das 15 horas.\nLocal: Casa do Beto, Rua das Acácias, nº 85.\nVenha pronto para muitas brincadeiras e bolo de chocolate!",
    enunciado: "O formato e as informações desse texto caracterizam-no como:"
    ,
    alternativas: [
      "Um convite de aniversário.",
      "Uma bula de remédio infantil.",
      "Uma reportagem científica de jornal.",
      "Um poema sobre flores e acácias."
    ],
    correta: 0,
    comentario: "O texto traz anfitrião, data, horário, endereço do evento e motivo da comemoração, sendo um clássico convite de aniversário."
  },

  // =========================================================================
  // HABILIDADE 5: ORTOGRAFIA E ACENTUAÇÃO (10 QUESTÕES)
  // =========================================================================
  {
    id: "PT-005",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Em qual das alternativas todas as palavras são proparoxítonas (possuem a antepenúltima sílaba mais forte e sempre levam acento)?",
    alternativas: [
      "Lâmpada, médico e pássaro.",
      "Café, jacaré e picolé.",
      "Boneca, escola e cadeira.",
      "Árvore, sofá e relógio."
    ],
    correta: 0,
    comentario: "Em 'lâm-pa-da', 'mé-di-co' e 'pás-sa-ro', a sílaba forte é a antepenúltima, por isso são proparoxítonas e acentuadas. Em café/jacaré (oxítonas) e sofá (oxítona), a última sílaba é a mais forte."
  },
  {
    id: "PT-043",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Conforme a regra ortográfica da língua portuguesa, emprega-se a consoante M antes de quais letras?",
    alternativas: [
      "Antes de P e B.",
      "Antes de T e D.",
      "Antes de F e V.",
      "Antes de C e G."
    ],
    correta: 0,
    comentario: "A regra tradicional determina que antes das consoantes P e B usamos sempre a letra M (ex: campo, tampa, tambor). Antes das demais consoantes, usamos N (canto, dente)."
  },
  {
    id: "PT-044",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Assinale a alternativa na qual todas as palavras estão grafadas corretamente com R ou RR:",
    alternativas: [
      "Barata, carroça e terra.",
      "Barroca, corida e amparo.",
      "Cachoro, pirulito e parede.",
      "Girafa, arame e feradura."
    ],
    correta: 0,
    comentario: "'Barata' possui R brando entre vogais; 'carroça' e 'terra' usam RR para o som forte entre vogais. As formas corretas das outras seriam corrida, cachorro e ferradura."
  },
  {
    id: "PT-045",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "A palavra 'PICOLÉ' tem sua sílaba tônica (mais forte) na última posição (pi-co-LÉ). Por esse motivo, ela é classificada como:",
    alternativas: [
      "Oxítona.",
      "Paroxítona.",
      "Proparoxítona.",
      "Monossílaba."
    ],
    correta: 0,
    comentario: "Palavras cuja sílaba tônica é a última são chamadas de oxítonas (ex: café, cipó, maracujá, picolé)."
  },
  {
    id: "PT-046",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Qual das opções preenche corretamente as lacunas das seguintes palavras: pá___aro, ro___a e pa___eio?",
    alternativas: [
      "SS, S, SS.",
      "S, SS, S.",
      "SS, SS, SS.",
      "S, S, S."
    ],
    correta: 0,
    comentario: "Escrevemos 'pássaro' e 'passeio' com dígrafo SS para manter o som de /s/ entre vogais. Já 'rosa' escreve-se com apenas um S porque tem som de /z/ entre vogais."
  },
  {
    id: "PT-047",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "Em qual palavra o uso da letra Ç (cê-cedilha) está correto pelas normas da nossa língua?",
    alternativas: [
      "Criança.",
      "Cebola.",
      "Cilindro.",
      "Céu."
    ],
    correta: 0,
    comentario: "Nunca se usa cedilha antes das vogais E ou I (cebola, cilindro usam apenas C). A cedilha é usada antes de A, O, U para som de /s/, como em 'criança' e 'açúcar'."
  },
  {
    id: "PT-048",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 1,
    enunciado: "Assinale a opção em que todos os monossílabos tônicos são obrigatoriamente acentuados graficamente:",
    alternativas: [
      "Pé, pó e pá.",
      "Sol, mar e luz.",
      "Pão, mel e sal.",
      "Noz, voz e flor."
    ],
    correta: 0,
    comentario: "Monossílabos tônicos terminados em A, E, O (seguidos ou não de S) recebem acento gráfico: pá, pé, pó. Monossílabos terminados em L, Z ou R não recebem acento."
  },
  {
    id: "PT-049",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "Em qual das seguintes palavras encontramos um dígrafo (duas letras representando um único fonema/som)?",
    alternativas: [
      "Chave.",
      "Prato.",
      "Livro.",
      "Braço."
    ],
    correta: 0,
    comentario: "Na palavra 'chave', as letras CH formam um dígrafo (produzem um som único de /x/). Já em 'prato', 'livro' e 'braço' ocorrem encontros consonantais, onde as duas consoantes são ouvidas."
  },
  {
    id: "PT-050",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "Assinale a alternativa em que todas as palavras são corretamente escritas com a letra H inicial:",
    alternativas: [
      "Hoje, hora e história.",
      "Homem, onda e horta.",
      "Hábito, olho e humor.",
      "Hélice, ilha e honra."
    ],
    correta: 0,
    comentario: "'Hoje', 'hora' e 'história' são escritas com H inicial mudo por razões etimológicas. Palavras como 'onda', 'olho' e 'ilha' iniciam com vogal direta, sem H."
  },
  {
    id: "PT-051",
    disciplina: "Portugues",
    habilidade: "Ortografia e acentuação",
    nivel: 2,
    enunciado: "A palavra 'FÁCIL' recebe acento agudo porque é uma palavra:",
    alternativas: [
      "Paroxítona terminada na consoante L.",
      "Oxítona terminada em vogal aberta.",
      "Proparoxítona com quatro sílabas.",
      "Monossílaba sem som tônico."
    ],
    correta: 0,
    comentario: "A palavra 'fá-cil' tem a penúltima sílaba tônica (paroxítona) e termina com a letra L. As paroxítonas terminadas em L, R, N, X são acentuadas."
  },

  // =========================================================================
  // HABILIDADE 6: PONTUAÇÃO E CONHECIMENTOS LINGUÍSTICOS (10 QUESTÕES)
  // =========================================================================
  {
    id: "PT-006",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    apoio: "Leia a frase de um livro de aventuras: 'O valente explorador encontrou um castelo antigo no meio da floresta'.",
    enunciado: "Nessa frase, as palavras 'valente' e 'antigo' servem para:",
    alternativas: [
      "indicar as ações realizadas pelo explorador.",
      "dar nome aos objetos encontrados no caminho.",
      "atribuir características e qualidades aos substantivos.",
      "ligar uma oração à outra como conjunções."
    ],
    correta: 2,
    comentario: "'Valente' diz como é o explorador e 'antigo' diz como é o castelo. Palavras que indicam qualidades, traços ou estados dos substantivos são chamadas de adjetivos."
  },
  {
    id: "PT-052",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    enunciado: "Qual sinal de pontuação deve ser utilizado no encerramento da frase: 'Você sabe a que horas começará o recreio'?",
    alternativas: [
      "Ponto de interrogação (?).",
      "Ponto final (.).",
      "Ponto de exclamação (!).",
      "Dois-pontos (:)."
    ],
    correta: 0,
    comentario: "A frase expressa uma pergunta direta feita a alguém. Nas frases interrogativas diretas, o sinal obrigatório de fechamento é o ponto de interrogação (?)."
  },
  {
    id: "PT-053",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    enunciado: "Na frase: 'Que dia maravilhoso para passear no parque!', o ponto de exclamação foi usado com o objetivo de expressar:",
    alternativas: [
      "Dúvida sobre o tempo.",
      "Entusiasmo e admiração.",
      "Uma ordem autoritária.",
      "A interrupção de um pensamento."
    ],
    correta: 1,
    comentario: "O ponto de exclamação (!) assinala estados de entusiasmo, admiração, alegria ou surpresa diante de uma situação bonita ou marcante."
  },
  {
    id: "PT-054",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    apoio: "O pai abriu a janela da sala e chamou:\n— Filhos, venham ver o arco-íris no céu!",
    enunciado: "No diálogo acima, o travessão (—) colocado na segunda linha serve para:",
    alternativas: [
      "Marcar o início da fala direta da personagem.",
      "Separar os ingredientes de uma lista.",
      "Indicar uma pergunta confusa do pai.",
      "Finalizar a história com suspense."
    ],
    correta: 0,
    comentario: "Em textos narrativos, o travessão no começo do parágrafo indica a fala direta de uma personagem que está dialogando."
  },
  {
    id: "PT-055",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    enunciado: "Assinale a alternativa que traz apenas substantivos próprios (nomes específicos de pessoas, cidades e países grafados com inicial maiúscula):",
    alternativas: [
      "Brasil, Chapecó e Mariana.",
      "Cachorro, cidade e menina.",
      "Escola, parque e brinquedo.",
      "Mesa, caderno e caneta."
    ],
    correta: 0,
    comentario: "Substantivos próprios nomeiam seres, cidades e países individualmente: Brasil (país), Chapecó (cidade) e Mariana (pessoa). Os demais são substantivos comuns."
  },
  {
    id: "PT-056",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Na oração: 'Amanhã os alunos plantarão novas árvores no pátio', a palavra 'plantarão' indica uma ação verbal que ocorrerá no tempo:",
    alternativas: [
      "Passado (já acontecido).",
      "Presente (que acontece agora).",
      "Futuro (que ainda vai acontecer).",
      "Indeterminado (sem época)."
    ],
    correta: 2,
    comentario: "A terminação '-ão' acompanhada do advérbio 'amanhã' mostra com clareza que o fato ainda vai acontecer, tratando-se do tempo futuro."
  },
  {
    id: "PT-057",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 1,
    enunciado: "Qual é o plural correto da frase: 'O animal veloz correu pelo campo'?",
    alternativas: [
      "Os animais velozes correram pelos campos.",
      "Os animal velozes correram pelo campo.",
      "Os animais veloz correu pelos campos.",
      "As animais velozes correu pelo campos."
    ],
    correta: 0,
    comentario: "No plural adequado, todos os elementos mantêm a concordância: O -> Os, animal -> animais, veloz -> velozes, correu -> correram, pelo campo -> pelos campos."
  },
  {
    id: "PT-058",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    enunciado: "Em qual das frases a vírgula foi empregada de forma adequada para listar (enumerar) itens comprados?",
    alternativas: [
      "Comprei maçãs, bananas, laranjas e peras na feira.",
      "Comprei, maçãs bananas laranjas, e peras na feira.",
      "Comprei maçãs bananas, laranjas e, peras na feira.",
      "Comprei maçãs bananas laranjas e peras, na feira."
    ],
    correta: 0,
    comentario: "A vírgula é usada para separar elementos enumerados em sequência de mesma função: 'maçãs, bananas, laranjas e peras'. O último item é antecedido pela conjunção 'e'."
  },
  {
    id: "PT-059",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    apoio: "Mariana e Sofia estudam bastante todos os dias. Elas adoram ler livros de aventuras na biblioteca.",
    enunciado: "No trecho lido, a palavra 'Elas' é um pronome pessoal que foi utilizado para:",
    alternativas: [
      "Substituir os nomes Mariana e Sofia, evitando repetição desnecessária.",
      "Mostrar uma característica física das duas alunas.",
      "Fazer uma pergunta sobre os livros de aventura.",
      "Dar uma ordem direta para as alunas estudarem."
    ],
    correta: 0,
    comentario: "O pronome pessoal 'Elas' substitui os substantivos próprios 'Mariana e Sofia' já citados, tornando a leitura fluida e sem repetições cansativas."
  },
  {
    id: "PT-060",
    disciplina: "Portugues",
    habilidade: "Pontuação e conhecimentos linguísticos",
    nivel: 2,
    apoio: "Um cachorro brincalhão pulou a cerca do jardim da praça.",
    enunciado: "Na oração, as palavras 'Um' e 'a' exercem a função gramatical de:",
    alternativas: [
      "Artigos (que acompanham os substantivos cachorro e cerca).",
      "Verbos (que indicam ações e movimentos da personagem).",
      "Adjetivos (que mostram as qualidades do cachorro).",
      "Sinais de pontuação (que indicam pausas na leitura)."
    ],
    correta: 0,
    comentario: "'Um' é um artigo indefinido e 'a' é um artigo definido. Eles acompanham os substantivos 'cachorro' e 'cerca' determinando-os ou indeterminando-os no contexto."
  }
];
