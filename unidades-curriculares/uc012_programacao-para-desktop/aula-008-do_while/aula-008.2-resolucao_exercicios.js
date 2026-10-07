// Solução 1: O Contador Crescente

let contador = 1;

do {
  console.log(contador);
  contador++; // Incrementa 1 a cada volta para não gerar um loop infinito
} while (contador <= 15);

// Solução 2: A Contagem Regressiva
let contagem = 10;

do {
  console.log(contagem);
  contagem--; // Subtrai 1 a cada volta
} while (contagem > 0); // O loop para quando chegar a 0

console.log("Lançamento!"); // Executado apenas após o fim do loop

// Solução 3: O Filtro de Números Pares
let numeroAtual = 0;

do {
  // Verifica se o resto da divisão por 2 é zero (ou seja, se é par)
  if (numeroAtual % 2 === 0) {
    console.log(numeroAtual);
  }
  numeroAtual++;
} while (numeroAtual <= 20);

// Solução 4: O Somatório Acumulado
let numero = 1;
let somaTotal = 0;

do {
  somaTotal = somaTotal + numero; // Acumula o valor atual na soma total
  numero++;
} while (numero <= 50);

// Exibe apenas o resultado matemático final fora do loop
console.log("O somatório total é:", somaTotal);

// Solução 5: A Tabuada Dinâmica
let multiplicador = 7;
let iterador = 1;

do {
  let resultado = multiplicador * iterador;
  console.log(multiplicador + " x " + iterador + " = " + resultado);
  iterador++;
} while (iterador <= 10);

// Solução 6: O Simulador de Menu CLI
let opcaoSelecionada = 0;

do {
  console.log("1. Novo Arquivo | 2. Editar | 3. Sair");

  // Simulando o usuário digitando a opção 3 no terminal
  opcaoSelecionada = 3;
} while (opcaoSelecionada !== 3); // Como o valor virou 3, a condição retorna 'false' e o loop encerra
