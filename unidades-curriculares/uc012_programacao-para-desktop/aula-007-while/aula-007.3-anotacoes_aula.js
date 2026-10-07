// let senhaCorreta = false;
// let tentativa = 0;
// const minhaSenha = "casa";
// const senhaDigitada = "33";

// while (senhaCorreta === false) {
//   tentativa++;
//   console.log("Tentativa ", tentativa);

//   // Simulando o usuário: na terceira tentativa ele acerta a senha
//   if (tentativa === 3) {
//     senhaCorreta = true; // Aqui a sentinela desliga e o laço termina
//   }
//   //               ! ==
//   if (minhaSenha !== senhaDigitada) {
//     console.log("Senha Incorreta, tente novamente.");
//   } else {
//     console.log("Acertou Miseravel!!");
//   }
// }
// console.log("Cofre aberto em ", tentativa, "tentativas"); // Retorna: 3

// let contador = 10;

// while (contador >= 1) {
//   console.log(contador);
//   contador--;
//   if (contador === 1) {
//     console.log("DECOLAR");
//   }
// }

// Resolução Exercícios

// ### Exercício 02
// let saldo = 50;
// const passagem = 4.5;
// let viagens = 0;

// while (saldo >= passagem) {
//   saldo = saldo - passagem;
//   viagens++;
//   console.log("Saldo Atual: " + saldo);
// }

// console.log(
//   `Foram executadas ${viagens} viagens, restando o saldo de R$${saldo}`,
// );

// ### Exercício 03
const meta = 10000;
const valorVenda = 750;
let total = 0;
let vendas = 0;

while (total < meta) {
  total = total + valorVenda;
  // total += valorVenda
  vendas++;
  console.log("Acumulado de Vendas: " + total);
}

console.log(
  `Foram nessesárias ${vendas} para atingir a meta, somando R$${total}`,
);
