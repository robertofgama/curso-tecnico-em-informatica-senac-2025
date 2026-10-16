// ### Exercício 1: A Lista de Chamada

// O professor guardou os alunos da turma num array. Exiba no terminal:
// - a quantidade de alunos da turma;
// - o nome do primeiro aluno;
// - o nome do último aluno, sem digitar o número 5 (use o length);
// - a chamada completa com um for, numerada a partir de 1: "1 - Ana", "2 - Bruno"...
// Dica: o índice começa em 0, mas a chamada começa em 1. Qual conta transforma um no outro?

const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eduarda", "Felipe"];

// O length conta os elementos: aqui existem 6 nomes.
console.log("Quantidade de alunos: ", alunos.length);
// Esperado: 6

// O primeiro elemento SEMPRE está no índice 0.
console.log("Primeiro aluno: ", alunos[0]);
// Esperado: Ana

// Com 6 elementos, os índices vão de 0 a 5. Por isso o último é length - 1.
// Se entrar um aluno novo, essa linha continua certa sem precisar ser alterada.
console.log("Último aluno: ", alunos[alunos.length - 1]);
// Esperado: Felipe

// O i começa em 0 porque é o primeiro índice, e para ANTES de chegar ao length (<, e não <=).
for (let i = 0; i < alunos.length; i++) {
  // O índice i serve para buscar o nome; o i + 1 serve só para a numeração da chamada.
  console.log(`${i + 1} - ${alunos[i]}`);
}
// Esperado: 1 - Ana, 2 - Bruno, 3 - Carla, 4 - Diego, 5 - Eduarda, 6 - Felipe

// ### Exercício 2: O Boletim

// As notas de um aluno no semestre foram [7.5, 8, 5.5, 9, 6].
// Use um for para somar as notas e depois calcule a média. Em seguida, exiba a média e a
// situação do aluno:
// - média maior ou igual a 7: "Aprovado";
// - média maior ou igual a 5: "Recuperação";
// - abaixo disso: "Reprovado".

const notasSemestre = [7.5, 8, 5.5, 9, 6];

// O acumulador nasce FORA do laço e começa em 0, senão ele seria zerado a cada volta.
let somaNotas = 0;

for (let i = 0; i < notasSemestre.length; i++) {
  somaNotas += notasSemestre[i]; // Em cada volta, soma a nota da posição i
}

// Dividimos pelo length (e não por 5): se o semestre tiver mais provas, a conta continua certa.
const mediaSemestre = somaNotas / notasSemestre.length;
console.log("Média do semestre: ", mediaSemestre);
// Esperado: 7.2

// A ordem dos testes importa: começamos pela faixa mais alta.
// Se o teste ">= 5" viesse primeiro, uma média 7.2 cairia nele e seria "Recuperação".
if (mediaSemestre >= 7) {
  console.log("Situação: Aprovado");
} else if (mediaSemestre >= 5) {
  console.log("Situação: Recuperação");
} else {
  console.log("Situação: Reprovado");
}
// Esperado: Situação: Aprovado

// ### Exercício 3: O Carrinho de Compras

// Uma loja de informática controla o carrinho do cliente com um array que começa vazio.
// Simule a compra passo a passo, exibindo o carrinho e a quantidade de itens depois de cada
// etapa:
// 1. O cliente adiciona, nesta ordem: "Mouse", "Teclado", "Monitor" e "Webcam".
// 2. Ele desiste do último item que colocou. Remova-o e exiba "Removido: Webcam".
// 3. O sistema avisa que o primeiro item está esgotado. Remova-o e exiba qual foi.
// 4. Ele lembra de um "Headset" e o adiciona ao carrinho.
// Use apenas push, pop e shift — nenhum índice digitado à mão.

// O carrinho é const, mas pode receber itens: o const só impede trocar o array por OUTRO.
const carrinho = [];

// Etapa 1: o push sempre coloca o item no FIM da lista, então a ordem de chegada é mantida.
carrinho.push("Mouse");
carrinho.push("Teclado");
carrinho.push("Monitor");
carrinho.push("Webcam");
console.log("Carrinho: ", carrinho, "- itens: ", carrinho.length);
// Esperado: [ 'Mouse', 'Teclado', 'Monitor', 'Webcam' ] - itens: 4

// Etapa 2: o pop tira o ÚLTIMO item e o devolve, por isso dá para guardá-lo numa variável.
const itemRemovido = carrinho.pop();
console.log("Removido: ", itemRemovido);
// Esperado: Removido: Webcam
console.log("Carrinho: ", carrinho, "- itens: ", carrinho.length);
// Esperado: [ 'Mouse', 'Teclado', 'Monitor' ] - itens: 3

// Etapa 3: o shift tira o PRIMEIRO item e também o devolve.
const itemEsgotado = carrinho.shift();
console.log("Esgotado: ", itemEsgotado);
// Esperado: Esgotado: Mouse
console.log("Carrinho: ", carrinho, "- itens: ", carrinho.length);
// Esperado: [ 'Teclado', 'Monitor' ] - itens: 2

// Etapa 4: mais um push, o Headset entra no fim.
carrinho.push("Headset");
console.log("Carrinho: ", carrinho, "- itens: ", carrinho.length);
// Esperado: [ 'Teclado', 'Monitor', 'Headset' ] - itens: 3

// ### Exercício 4: O Sorteio de Brindes

// No evento de aniversário do Senac, foram sorteados os números [12, 7, 33, 40, 18, 5, 21, 8].
// Os números pares ganham uma caneca e os ímpares ganham uma camiseta.
// Crie dois arrays vazios, ganhadoresCaneca e ganhadoresCamiseta. Percorra os números
// sorteados e use o % e o push para colocar cada número na lista certa. No fim, exiba as
// duas listas e quantos brindes de cada tipo serão entregues.

const numerosSorteados = [12, 7, 33, 40, 18, 5, 21, 8];

// As duas listas começam vazias e vão sendo preenchidas durante o laço (padrão "filtrar").
const ganhadoresCaneca = [];
const ganhadoresCamiseta = [];

for (let i = 0; i < numerosSorteados.length; i++) {
  // O resto da divisão por 2 é 0 nos pares e 1 nos ímpares.
  if (numerosSorteados[i] % 2 === 0) {
    ganhadoresCaneca.push(numerosSorteados[i]);
  } else {
    ganhadoresCamiseta.push(numerosSorteados[i]);
  }
}

console.log("Ganhadores de caneca: ", ganhadoresCaneca);
// Esperado: [ 12, 40, 18, 8 ]
console.log("Ganhadores de camiseta: ", ganhadoresCamiseta);
// Esperado: [ 7, 33, 5, 21 ]

// Não precisamos de contadores extras: o length de cada lista já é a quantidade de brindes.
console.log("Canecas a entregar: ", ganhadoresCaneca.length);
// Esperado: 4
console.log("Camisetas a entregar: ", ganhadoresCamiseta.length);
// Esperado: 4

// ### Exercício 5: O Histórico do Navegador

// O navegador guardou os sites visitados na ordem em que foram abertos. Mas o histórico deve
// mostrar o mais recente primeiro. Crie um novo array historico, inicialmente vazio, e use um
// for que percorra visitas de trás para frente, colocando cada site no historico com push.
// Exiba o histórico numerado a partir de 1.
// Resolva sem usar o método reverse(): descubra onde o contador começa, onde ele termina e se
// ele sobe ou desce.

const visitas = [
  "senac.br",
  "github.com",
  "nodejs.org",
  "developer.mozilla.org",
];
const historico = [];

// Respondendo às três perguntas do enunciado:
// - Começa no ÚLTIMO índice: visitas.length - 1 (aqui, 3).
// - Termina no PRIMEIRO índice, o 0. Por isso a condição é i >= 0 (o 0 também precisa entrar).
// - DESCE: i-- em vez de i++.
for (let i = visitas.length - 1; i >= 0; i--) {
  historico.push(visitas[i]); // O mais recente entra primeiro no novo array
}

// Agora o historico já está na ordem certa: basta percorrê-lo normalmente, do 0 em diante.
for (let i = 0; i < historico.length; i++) {
  console.log(`${i + 1} - ${historico[i]}`);
}
// Esperado: 1 - developer.mozilla.org, 2 - nodejs.org, 3 - github.com, 4 - senac.br

// ### Exercício 6: A Lista VIP

// O segurança de uma festa precisa conferir se o nome da pessoa está na lista de convidados.
// Crie uma função estaNaLista que receba dois parâmetros, lista e nome, e use um for para
// procurar o nome. A função deve usar return para devolver true se encontrar e false se não
// encontrar. Resolva sem usar includes ou indexOf.
// Depois, com a lista ["Ana", "Bruno", "Carla", "Diego"], teste a função com "Carla" e com
// "Zeca", exibindo "Entrada liberada" ou "Nome não encontrado" para cada um.

function estaNaLista(lista, nome) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      // O return encerra a função na hora, e junto com ela o laço.
      // Funciona como um break: não perdemos tempo olhando o resto da lista.
      return true;
    }
  }

  // Só chegamos aqui se o laço terminou SEM encontrar o nome.
  // Atenção: esse return fica FORA do for. Se ficasse num else dentro do laço, a função
  // devolveria false logo no primeiro nome diferente, sem conferir os outros.
  return false;
}

const convidadosVip = ["Ana", "Bruno", "Carla", "Diego"];

// Como são vários nomes para conferir, guardamos eles também num array e testamos com um
// for, em vez de repetir o mesmo if para cada pessoa.
const nomesNaPortaria = ["Carla", "Zeca"];

for (let i = 0; i < nomesNaPortaria.length; i++) {
  if (estaNaLista(convidadosVip, nomesNaPortaria[i])) {
    console.log(nomesNaPortaria[i], "- Entrada liberada");
  } else {
    console.log(nomesNaPortaria[i], "- Nome não encontrado");
  }
}
// Esperado: Carla - Entrada liberada
// Esperado: Zeca - Nome não encontrado

// ### Exercício 7 (Médio): A Estação Meteorológica

// Uma estação na Serra Gaúcha registrou as temperaturas mínimas de uma semana de inverno.
// Usando um único for, descubra:
// - a maior temperatura da semana;
// - a menor temperatura da semana;
// - a média da semana;
// - quantos dias ficaram abaixo de 10 graus.
// Exiba os quatro resultados depois do laço.

const temperaturas = [14, 9, -2, 5, 11, 17, 9];

// Os "campeões provisórios" começam com o PRIMEIRO dia, e não com 0.
// Se começássemos a menor com 0, ela nunca seria trocada numa semana sem temperaturas
// negativas, e o resultado seria 0, um valor que nem está na lista.
let maiorTemperatura = temperaturas[0];
let menorTemperatura = temperaturas[0];

// O acumulador e o contador começam zerados, como sempre.
let somaTemperaturas = 0;
let diasFrios = 0;

// Um único laço resolve as quatro perguntas: em cada volta, o dia i é conferido por todas.
// Aqui o laço começa no 0 (e não no 1) porque a soma e a contagem precisam do primeiro dia.
for (let i = 0; i < temperaturas.length; i++) {
  const temperaturaDoDia = temperaturas[i];

  // Pergunta 1: esse dia bateu o recorde de calor?
  if (temperaturaDoDia > maiorTemperatura) {
    maiorTemperatura = temperaturaDoDia;
  }

  // Pergunta 2: esse dia bateu o recorde de frio?
  // São dois if separados (e não um else if), porque cada um responde uma pergunta diferente.
  if (temperaturaDoDia < menorTemperatura) {
    menorTemperatura = temperaturaDoDia;
  }

  // Pergunta 3: toda temperatura entra na soma, sem condição.
  somaTemperaturas += temperaturaDoDia;

  // Pergunta 4: só conta o dia se ele ficou abaixo de 10 graus.
  if (temperaturaDoDia < 10) {
    diasFrios++;
  }
}

// A média só pode ser calculada DEPOIS do laço, quando a soma já está completa.
const mediaSemana = somaTemperaturas / temperaturas.length;

console.log("Maior temperatura: ", maiorTemperatura);
// Esperado: 17
console.log("Menor temperatura: ", menorTemperatura);
// Esperado: -2
console.log("Média da semana: ", mediaSemana);
// Esperado: 9 (soma 63 dividida por 7 dias)
console.log("Dias abaixo de 10 graus: ", diasFrios);
// Esperado: 4 (9, -2, 5 e 9)

// ### Exercício 8 (Médio): A Fila do Banco

// A fila do caixa começa com ["Ana", "Bruno", "Carla", "Diego"]. Antes de o caixa abrir:
// - chega a "Dona Maria", que tem atendimento prioritário e vai para o início da fila;
// - chega o "Eduardo", que vai para o fim da fila.
// Cada atendimento leva 5 minutos. Use um while que continue enquanto houver gente na
// fila, retirando uma pessoa por vez e exibindo em que minuto ela foi chamada
// ("Minuto 0: atendendo Dona Maria", "Minuto 5: atendendo Ana"...). No fim, informe quantas
// pessoas foram atendidas e quanto tempo o caixa levou no total.

const filaBanco = ["Ana", "Bruno", "Carla", "Diego"];

// Prioridade entra pela FRENTE (unshift); quem chega normalmente vai para o FIM (push).
filaBanco.unshift("Dona Maria");
filaBanco.push("Eduardo");
console.log("Fila ao abrir o caixa: ", filaBanco);
// Esperado: [ 'Dona Maria', 'Ana', 'Bruno', 'Carla', 'Diego', 'Eduardo' ]

const tempoPorAtendimento = 5;
let minutoAtual = 0; // O caixa abre no minuto 0
let pessoasAtendidas = 0;

// Usamos while porque a pergunta é "ainda tem gente?", e não "repita N vezes".
// Não há risco de laço infinito: cada shift() tira uma pessoa e diminui o length em 1,
// então uma hora a condição vira false.
while (filaBanco.length > 0) {
  const pessoaDaVez = filaBanco.shift(); // Chama o primeiro da fila

  // O minuto é exibido ANTES de somar o tempo: a pessoa é chamada no início do atendimento.
  console.log(`Minuto ${minutoAtual}: atendendo ${pessoaDaVez}`);

  minutoAtual += tempoPorAtendimento; // O relógio anda 5 minutos
  pessoasAtendidas++;
}
// Esperado: Minuto 0: Dona Maria, 5: Ana, 10: Bruno, 15: Carla, 20: Diego, 25: Eduardo

console.log("Pessoas atendidas: ", pessoasAtendidas);
// Esperado: 6

// Depois do último atendimento, o relógio já somou os 5 minutos dele: 6 x 5 = 30.
console.log("Tempo total do caixa: ", minutoAtual, "minutos");
// Esperado: 30 minutos

// ### Exercício 9 (Difícil): O Controle de Estoque

// O estoque de uma loja de informática é guardado em dois arrays paralelos: o produto de
// cada índice corresponde à quantidade do mesmo índice no outro array.
// 1. Crie uma função listarParaRepor que receba os dois arrays e o estoque mínimo e
//    devolva um novo array com os nomes dos produtos que estão abaixo do mínimo.
// 2. Exiba a lista de reposição e quantos produtos precisam ser comprados.
// 3. Descubra o produto com mais unidades em estoque e exiba o nome e a quantidade dele.
// 4. Exiba o total de unidades guardadas no estoque.
// Dica: para o item 3 não basta guardar a maior quantidade. Guarde também o índice onde
// ela está, porque é ele que leva até o nome no outro array.

const produtos = ["Mouse", "Teclado", "Monitor", "Headset", "Webcam"];
const quantidades = [25, 4, 12, 0, 3];
const estoqueMinimo = 5;

// Arrays paralelos funcionam como as colunas de uma tabela: o índice é a LINHA.
//
// | Índice | produtos[i] | quantidades[i] |
// | ------ | ----------- | -------------- |
// | 0      | Mouse       | 25             |
// | 1      | Teclado     | 4              |
// | 2      | Monitor     | 12             |
// | 3      | Headset     | 0              |
// | 4      | Webcam      | 3              |

// Item 1: os parâmetros têm nomes próprios (nomes, estoque, minimo) para a função servir a
// qualquer loja, e não só a estes arrays.
function listarParaRepor(nomes, estoque, minimo) {
  const reposicao = []; // A lista nasce vazia DENTRO da função

  for (let i = 0; i < estoque.length; i++) {
    // Testamos a quantidade no índice i...
    if (estoque[i] < minimo) {
      // ...mas guardamos o NOME do mesmo índice i, que está no outro array.
      reposicao.push(nomes[i]);
    }
  }

  return reposicao; // Devolve o array montado para quem chamou a função
}

// Item 2: o array devolvido pela função fica guardado numa variável e é usado à vontade.
const paraRepor = listarParaRepor(produtos, quantidades, estoqueMinimo);
console.log("Produtos para repor: ", paraRepor);
// Esperado: [ 'Teclado', 'Headset', 'Webcam' ]
console.log("Quantidade de produtos a comprar: ", paraRepor.length);
// Esperado: 3

// Itens 3 e 4: um único laço resolve os dois.
// Em vez de guardar a maior quantidade, guardamos o ÍNDICE dela. Com o índice em mãos,
// chegamos tanto à quantidade (quantidades[indiceMaior]) quanto ao nome (produtos[indiceMaior]).
let indiceMaior = 0; // Supõe que o primeiro produto é o de maior estoque
let totalUnidades = 0;

for (let i = 0; i < quantidades.length; i++) {
  // Compara com a quantidade do campeão atual, buscada pelo índice dele.
  if (quantidades[i] > quantidades[indiceMaior]) {
    indiceMaior = i; // Troca o campeão: agora ele é o produto da posição i
  }

  totalUnidades += quantidades[i];
}

console.log(
  `Produto com maior estoque: ${produtos[indiceMaior]} (${quantidades[indiceMaior]} unidades)`,
);
// Esperado: Produto com maior estoque: Mouse (25 unidades)
console.log("Total de unidades no estoque: ", totalUnidades);
// Esperado: 44

// ### Exercício 10 (Difícil): O Pódio do Campeonato

// Num campeonato de jogos da turma, os jogadores e suas pontuações foram registrados em dois
// arrays paralelos, na ordem de inscrição.
// Ordene os jogadores da maior para a menor pontuação e exiba o ranking completo
// ("Posição 1 - Bruno com 95 pontos"...) e, depois, só o pódio (os 3 primeiros). Resolva
// sem usar o método sort(), com a técnica chamada Bubble Sort (ordenação por bolha):
// - compare cada elemento com o vizinho da direita; se estiverem fora de ordem, troque os
//   dois de lugar;
// - uma passada inteira pelo array leva o menor valor para o fim, como uma bolha que afunda;
// - repita as passadas até a lista inteira estar em ordem. Isso pede dois laços aninhados.
// Sempre que trocar duas pontuações de lugar, troque também os nomes nos mesmos índices.

const jogadores = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];
const pontos = [72, 95, 88, 60, 91];

// Laço de FORA: conta as passadas. Cada passada garante que mais um jogador chegou à
// posição final. Com 5 jogadores, 4 passadas bastam: quando 4 estão no lugar certo, o
// que sobrou também está.
for (let passada = 0; passada < pontos.length - 1; passada++) {
  // Laço de DENTRO: anda pelo array comparando cada posição j com a vizinha j + 1.
  // - Vai só até length - 1 porque o último elemento não tem vizinho da direita
  //   (pontos[j + 1] sairia do array e daria undefined).
  // - O "- passada" evita conferir o fim da lista, que as passadas anteriores já ordenaram.
  for (let j = 0; j < pontos.length - 1 - passada; j++) {
    // Queremos do MAIOR para o MENOR: se o da esquerda for menor que o da direita, está
    // fora de ordem e os dois trocam de lugar.
    if (pontos[j] < pontos[j + 1]) {
      // Troca dos pontos, usando a técnica dos três copos.
      const pontosAuxiliar = pontos[j];
      pontos[j] = pontos[j + 1];
      pontos[j + 1] = pontosAuxiliar;

      // Troca dos nomes NOS MESMOS ÍNDICES, para cada jogador continuar ao lado dos seus pontos.
      const jogadorAuxiliar = jogadores[j];
      jogadores[j] = jogadores[j + 1];
      jogadores[j + 1] = jogadorAuxiliar;
    }
  }
}

// Rastreando a 1ª passada (pontos começam em [72, 95, 88, 60, 91]):
// - j = 0: 72 < 95? Sim, troca  → [95, 72, 88, 60, 91]
// - j = 1: 72 < 88? Sim, troca  → [95, 88, 72, 60, 91]
// - j = 2: 72 < 60? Não         → [95, 88, 72, 60, 91]
// - j = 3: 60 < 91? Sim, troca  → [95, 88, 72, 91, 60]
// O menor (60) "afundou" até o fim. As próximas passadas fazem o mesmo com o restante.

// Depois de ordenado, o índice 0 é o 1º lugar, o índice 1 é o 2º lugar, e assim por diante.
console.log("--- Ranking completo ---");
for (let i = 0; i < jogadores.length; i++) {
  console.log(`Posição ${i + 1} - ${jogadores[i]} com ${pontos[i]} pontos`);
}
// Esperado: Posição 1 - Bruno com 95 pontos
// Esperado: Posição 2 - Eduarda com 91 pontos
// Esperado: Posição 3 - Carla com 88 pontos
// Esperado: Posição 4 - Ana com 72 pontos
// Esperado: Posição 5 - Diego com 60 pontos

// O pódio é o mesmo laço, mas parando no 3º colocado (índices 0, 1 e 2).
console.log("--- Pódio ---");
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1}º lugar: ${jogadores[i]} (${pontos[i]} pontos)`);
}
// Esperado: 1º lugar: Bruno (95 pontos)
// Esperado: 2º lugar: Eduarda (91 pontos)
// Esperado: 3º lugar: Carla (88 pontos)
