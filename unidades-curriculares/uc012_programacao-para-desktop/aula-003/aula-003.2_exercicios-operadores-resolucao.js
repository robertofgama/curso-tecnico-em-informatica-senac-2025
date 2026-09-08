// #### Exercício 1: A Média Do Semestre
// Crie três variáveis com as notas de um aluno (nota1, nota2, nota3).
// Calcule a média das três notas e guarde o resultado em uma variável chamada media.
// Exiba a média no console.

const nota1 = 25;
const nota2 = 20;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média do Aluno: ", media);

// #### Exercício 2: O Carrinho de Compras
// Você comprou 3 camisetas que custam R$ 35 cada e um tênis que custa R$ 120. Você tem um saldo de R$ 200.
// - Calcule o valor total da compra.
// - Crie uma comparação que retorne true se você tem saldo suficiente para pagar a conta, ou false se não tiver.

const camisetas = 3 * 35;
const tenis = 120;
const saldo = 200;
const totalCompra = tenis + camisetas;
const existeSaldo = saldo >= totalCompra;

console.log("Total da compra é: ", totalCompra);
console.log("Voce tem saldo? ", existeSaldo);

// #### Exercício 3: O Mistério Da Idade
// Um formulário web salvou a idade do usuário como texto: let idadeUsuario = "25";.
// Um sistema VIP só permite a entrada de pessoas que tenham exatamente o número 25.
// Escreva a comparação correta (usando ===) que mostre que "25" (texto) não é aceito no lugar do 25 (número).
let idadeUsuario = "25";
let idadeVip = 25;

console.log(idadeUsuario === idadeVip); // false, pois um é string e o outro é number
