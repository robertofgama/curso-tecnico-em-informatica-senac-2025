// const fila = ["Ana", "Bruno"];

// console.log(fila); // ["Ana", "Bruno"]

// // Removendo o primeiro elemento da fila
// // const primeiro = fila.shift();

// console.log(fila.shift()); // "Ana"

// // console.log(fila); // ["Bruno", "Carlos"]

// console.log(fila); // ["Ana", "Bruno"]

// Funções
// 1 + 1 = 2
// function somaNumeros(numeroA, numeroB) {
//   return numeroA + 3 * numeroB;
// }
// console.log(somaNumeros(2, 6));

// NOVO EXEMPLO
// const notas = [1, 6, 8, 10, 50];

// function calculaMedia(arrayDeNotas) {
//   let soma = 0;
//   for (let i = 0; i < arrayDeNotas.length; i++) {
//     soma += arrayDeNotas[i];
//   }
//   return soma / arrayDeNotas.length;
// }

// const media = calculaMedia(notas);
// console.log("resultado: ", media);

// ###### EXERCICIOS

// EXERCICIO 1
// const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eduarda", "Felipe"];

// console.log("Quantidade de Alunos: ", alunos.length);
// console.log("O Primeiro Aluno é: ", alunos[0]);
// console.log("O Ultimo Aluno é: ", alunos[alunos.length - 1]);
// for (let i = 0; i < alunos.length; i++) {
//   console.log(` ${i + 1} - ${alunos[i]}`);
// }

// EXERCICIO 2
// const notas = [7.5, 1, 1, 9, 6];
// let total = 0;

// for (let i = 0; i < notas.length; i++) {
//   total += notas[i];
// }

// const media = total / notas.length;
// console.log("A média do Aluno é:" + media);
// if (media >= 7) {
//   console.log("Aluno Aprovado");
// } else if (media >= 5) {
//   console.log("Aluno em Recuperação");
// } else {
//   console.log("Aluno Reprovado");
// }

// EXERCICIO 3

// const carrinho = [];
// console.log("Carrinho de Compras");
// carrinho.push("Mouse");
// carrinho.push("Teclado");
// carrinho.push("Monitor");
// carrinho.push("WebCam");
// console.log("Removido: ", carrinho.pop());
// console.log("Item ", carrinho.shift(), "ESGOTADO");
// carrinho.push("Headset");
// console.log(carrinho);

// EXERCICIO 4
// const numerosSorteio = [12, 7, 33, 40, 18, 5, 21, 8];
// const ganhadoresCaneca = []; // pares
// const ganhadoresCamiseta = []; // impares

// for (let i = 0; i < numerosSorteio.length; i++) {
//   if (numerosSorteio[i] % 2 === 0) {
//     ganhadoresCaneca.push(numerosSorteio[i]);
//   } else {
//     ganhadoresCamiseta.push(numerosSorteio[i]);
//   }
// }

// console.log(
//   `Ganhadores Caneca ${ganhadoresCaneca} - Total ${ganhadoresCaneca.length}`,
// );
// console.log(
//   `Ganhadores Camiseta ${ganhadoresCamiseta} - Total ${ganhadoresCamiseta.length}`,
// );

// Exercicio 5
const visitas = [
  "senac.br",
  "github.com",
  "nodejs.org",
  "developer.mozilla.org",
];

const historico = [];
for (let i = visitas.length - 1; i >= 0; i--) {
  historico.push(visitas[i]);
}

for (let i = 0; i < historico.length; i++) {
  console.log(`${i + 1} - ${historico[i]}`);
}
