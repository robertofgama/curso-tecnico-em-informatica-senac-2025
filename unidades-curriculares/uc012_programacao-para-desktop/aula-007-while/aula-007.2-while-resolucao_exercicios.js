// ### Exercício 1: A Contagem Regressiva, Agora com while

// Refaça o exercício 1 da aula passada, mas trocando o for por um while: exiba os números
// de 10 até 1, um por linha, e depois do laço exiba "Decolar!".
// Dica: as três partes ainda existem. Onde vai cada uma delas agora?

// 1. Inicialização: ANTES do laço.
let contador = 10;

// 2. Condição: dentro dos parênteses.
while (contador >= 1) {
  console.log(contador);
  contador--; // 3. Incremento (aqui decremento): DENTRO do bloco.
}

console.log("Decolar!");
// Esperado: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 e depois "Decolar!"

// ### Exercício 2: O Cartão de Transporte

// Você carregou R$ 50,00 no cartão de transporte e cada passagem custa R$ 4,50.
// Use um while para descontar uma passagem por vez, enquanto o saldo der para pagar a
// próxima. Exiba o saldo restante a cada viagem. No fim, informe quantas viagens foram feitas
// e quanto sobrou no cartão.

let saldo = 50;
const precoPassagem = 4.5;
let viagens = 0;

// A condição é "o saldo ainda paga uma passagem?", e não um número de voltas.
while (saldo >= precoPassagem) {
  saldo = saldo - precoPassagem;
  viagens++;
  console.log("Viagem ", viagens, "- saldo restante: ", saldo);
}

console.log("Total de viagens: ", viagens);
// Esperado: 11

console.log("Sobrou no cartão: ", saldo);
// Esperado: 0.5 (não dá para pagar a 12ª viagem)

// ### Exercício 3: A Meta de Vendas

// Um vendedor tem a meta de R$ 10.000,00 no mês e cada venda que ele fecha vale R$ 750,00.
// Use um while para acumular as vendas enquanto o total estiver abaixo da meta, exibindo
// o acumulado a cada venda. No fim, informe quantas vendas foram necessárias e qual foi o
// total alcançado.

const meta = 10000;
const valorPorVenda = 750;
let totalVendido = 0;
let vendas = 0;

while (totalVendido < meta) {
  totalVendido = totalVendido + valorPorVenda;
  vendas++;
  console.log("Venda ", vendas, "- acumulado: ", totalVendido);
}

console.log("Vendas necessárias: ", vendas);
// Esperado: 14

console.log("Total alcançado: ", totalVendido);
// Esperado: 10500 (a última venda faz o total PASSAR da meta)

// ### Exercício 4: O Jogo de Adivinhação

// O número secreto do sorteio é 7. Um robô muito simples tenta adivinhar chutando a partir
// do 1, somando 1 a cada nova tentativa.
// Crie um while que continue enquanto o chute for diferente do número secreto (use !==),
// exibindo cada tentativa. Quando acertar, exiba "Acertou! O número era 7" e quantos chutes
// foram necessários.

const numeroSecreto = 7;
let chute = 1;
let tentativas = 0;

while (chute !== numeroSecreto) {
  tentativas++;
  console.log("Tentativa ", tentativas, "- chutei ", chute, "e errei");
  chute++;
}

// Atenção: o laço termina ANTES de rodar o bloco com o chute certo.
// Por isso o acerto é contado aqui fora.
tentativas++;
console.log("Tentativa ", tentativas, "- chutei ", chute, "e acertei");

console.log("Acertou! O número era ", numeroSecreto);
console.log("Chutes necessários: ", tentativas);
// Esperado: 7

// ### Exercício 5: O Investimento que Dobra

// Crie uma função calcularAnos que receba dois parâmetros: valorInicial e valorDesejado.
// Dentro dela, use um while para dobrar o valor investido a cada ano, enquanto ele for
// menor que o valor desejado, contando os anos que passaram. A função deve usar return para
// devolver a quantidade de anos.
// Teste com calcularAnos(1000, 10000) e calcularAnos(500, 2000).

function calcularAnos(valorInicial, valorDesejado) {
  let valor = valorInicial;
  let anos = 0;

  while (valor < valorDesejado) {
    valor = valor * 2;
    anos++;
    console.log("Ano ", anos, "- investimento: ", valor);
  }

  return anos;
}

console.log("Anos para 1000 virar 10000: ", calcularAnos(1000, 10000));
// Esperado: 4 (1000 -> 2000 -> 4000 -> 8000 -> 16000)

console.log("Anos para 500 virar 2000: ", calcularAnos(500, 2000));
// Esperado: 2 (500 -> 1000 -> 2000)

// ### Exercício 6 (Desafio): O Detector de Números Primos

// Um número é primo quando só pode ser dividido por 1 e por ele mesmo — ou seja, nenhum
// outro número deixa resto zero na divisão.
// Crie uma variável numero = 91 e uma sentinela ehPrimo = true. Use um while que teste os
// divisores a partir do 2, e:
// - se algum divisor deixar resto zero (%), desligue a sentinela e use break para abandonar o laço;
// - ao terminar, exiba se o número é primo ou não, informando qual divisor o denunciou.
// Depois teste com outros números, como 7, 13 e 100.

const numero = 91;
let ehPrimo = true; // A sentinela começa ligada: presumimos que é primo
let divisor = 2; // O 1 divide todo mundo, então o teste começa no 2
let divisorEncontrado = 0; // Guarda quem denunciou o número

while (divisor < numero) {
  if (numero % divisor === 0) {
    ehPrimo = false; // Achamos um divisor: não é primo
    divisorEncontrado = divisor;
    break; // Não precisa testar o resto, a resposta já está definida
  }
  divisor++;
}

if (ehPrimo === true) {
  console.log(numero, "é primo");
} else {
  console.log(numero, "NÃO é primo, pois é divisível por ", divisorEncontrado);
}
// Esperado: 91 NÃO é primo, pois é divisível por 7

// Testando outros números: em vez de repetir o bloco acima quatro vezes,
// o mesmo código vira uma função reutilizável.
function verificarPrimo(numeroParaTestar) {
  let primo = true;
  let divisorAtual = 2;

  while (divisorAtual < numeroParaTestar) {
    if (numeroParaTestar % divisorAtual === 0) {
      primo = false;
      break;
    }
    divisorAtual++;
  }

  if (primo === true) {
    console.log(numeroParaTestar, "é primo");
  } else {
    console.log(
      `${numeroParaTestar} NÃO é primo (divisível por ${divisorAtual})`,
    );
  }
}

verificarPrimo(7); // Esperado: 7 é primo
verificarPrimo(13); // Esperado: 13 é primo
verificarPrimo(100); // Esperado: 100 NÃO é primo (divisível por 2)
