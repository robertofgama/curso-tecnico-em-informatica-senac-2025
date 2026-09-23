// ### Exercício 1: A Contagem Regressiva do Foguete

// O centro de lançamento precisa exibir a contagem regressiva no telão. Crie um for que
// exiba os números de 10 até 1, um por linha. Quando o laço terminar, exiba a mensagem "Decolar!".
// Dica: o contador precisa descer. Repense a condição e o incremento.

// O contador começa no maior valor (10) e o "--" desce de 1 em 1.
// A condição >= 1 mantém o laço rodando até o número 1 inclusive.
for (let contador = 10; contador >= 1; contador--) {
  console.log(contador);
}

// Esta linha está FORA do laço, por isso só aparece uma vez, no fim.
console.log("Decolar!");
// Esperado: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 e depois "Decolar!"

// ### Exercício 2: A Tabuada da Prova

// O professor vai imprimir a folha de exercícios e precisa da tabuada do 8 formatada assim:
// 8 x 1 = 8, 8 x 2 = 16, e assim por diante até o 8 x 10.
// Crie uma variável numero = 8 e use um for para exibir as dez linhas da tabuada.

const numero = 8;

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  const resultado = numero * multiplicador;
  console.log(`${numero} x ${multiplicador} = ${resultado}`);
}
// Esperado: 8 x 1 = 8 / 8 x 2 = 16 / ... / 8 x 10 = 80

// ### Exercício 3: O Fechamento do Caixa da Lanchonete

// A lanchonete vendeu 7 lanches hoje, todos ao preço de R$ 18,50.
// Sem usar multiplicação, use um for e um acumulador para somar o valor de cada lanche
// vendido, exibindo o total parcial a cada venda. No fim do laço, exiba o faturamento do dia
// com o rótulo "Faturamento do dia: ".
// Depois, confira o resultado imprimindo 7 * 18.5 e compare os dois valores.

const precoLanche = 18.5;
const lanchesVendidos = 7;

// O acumulador nasce FORA do laço, senão voltaria a zero em cada volta.
let faturamento = 0;

for (let venda = 1; venda <= lanchesVendidos; venda++) {
  faturamento = faturamento + precoLanche;
  console.log("Venda ", venda, "- total parcial: ", faturamento);
}

console.log("Faturamento do dia: ", faturamento);
// Esperado: 129.5

// Conferindo com a multiplicação: o for somando 7 vezes dá o mesmo resultado.
console.log("Conferência (7 * 18.5): ", 7 * 18.5);
// Esperado: 129.5

// ### Exercício 4: O Sorteio da Rifa

// A rifa da turma vendeu os números de 1 a 30. Apenas os números pares concorrem ao prêmio extra.
// - Percorra os números de 1 a 30 com um for.
// - Exiba no console somente os números pares (use % e if).
// - Conte quantos números pares foram encontrados, guardando o resultado em uma variável
//   totalPares, e exiba esse total no fim.

let totalPares = 0;

for (let bilhete = 1; bilhete <= 30; bilhete++) {
  // Resto da divisão por 2 igual a zero significa número par.
  if (bilhete % 2 === 0) {
    console.log("Bilhete premiado: ", bilhete);
    totalPares++; // Conta mais um par encontrado
  }
}

console.log("Total de bilhetes que concorrem: ", totalPares);
// Esperado: 15

// ### Exercício 5: O Boleto Parcelado

// A loja precisa mostrar ao cliente como ficou o parcelamento da compra.
// Crie uma função gerarParcelas que receba dois parâmetros: valorTotal e quantidadeParcelas.
// Dentro dela, calcule o valor de cada parcela e use um for para exibir uma linha por parcela,
// no formato: Parcela 1 de 3: R$ 300
// Teste a função com gerarParcelas(900, 3) e gerarParcelas(1200, 12).

function gerarParcelas(valorTotal, quantidadeParcelas) {
  // A divisão acontece UMA vez, antes do laço: o valor da parcela não muda.
  const valorParcela = valorTotal / quantidadeParcelas;

  for (let parcela = 1; parcela <= quantidadeParcelas; parcela++) {
    console.log(
      `Parcela ${parcela} de ${quantidadeParcelas}: R$ ${valorParcela}`,
    );
  }
}

gerarParcelas(900, 3);
// Esperado: Parcela 1 de 3: R$ 300 / Parcela 2 de 3: R$ 300 / Parcela 3 de 3: R$ 300

gerarParcelas(1200, 12);
// Esperado: 12 linhas, de "Parcela 1 de 12: R$ 100" até "Parcela 12 de 12: R$ 100"

// ### Exercício 6 (Desafio): A Pirâmide de Asteriscos

// Usando dois laços aninhados e uma variável de texto como acumulador, exiba no console
// uma pirâmide de 5 linhas:
// *
// **
// ***
// ****
// *****
// Dica: o laço de fora controla a linha (1 a 5). O de dentro monta o texto daquela linha,
// concatenando um "*" de cada vez. O console.log da linha acontece DEPOIS do laço de dentro terminar.

for (let linha = 1; linha <= 5; linha++) {
  // O texto nasce vazio a cada nova linha: aqui zerar é justamente o que queremos.
  let asteriscos = "";

  // O laço de dentro vai de 1 até o número da linha atual:
  // na linha 1 roda 1 vez, na linha 2 roda 2 vezes, e assim por diante.
  for (let coluna = 1; coluna <= linha; coluna++) {
    asteriscos = asteriscos + "*";
  }

  // Só imprime quando a linha inteira já está montada.
  console.log(asteriscos);
}
// Esperado: * / ** / *** / **** / *****
