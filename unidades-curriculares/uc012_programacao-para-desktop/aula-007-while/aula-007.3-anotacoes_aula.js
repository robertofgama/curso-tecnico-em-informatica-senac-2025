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

let contador = 10;

while (contador >= 1) {
  console.log(contador);
  contador--;
  if (contador === 1) {
    console.log("DECOLAR");
  }
}
