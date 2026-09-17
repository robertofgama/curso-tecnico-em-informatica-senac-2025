// ### Exercício 1: O Radar de Velocidade

// Crie uma variável velocidade com o valor de 90. Crie uma estrutura if/else. Se a velocidade for estritamente maior que 80, exiba no console: "Você foi multado!". Caso contrário, exiba: "Velocidade permitida, boa viagem!".
let velocidade = 90;

if (velocidade > 80) {
  console.log("Você foi multado!");
} else {
  console.log("Velocidade permitida, boa viagem!");
}

// ### Exercício 2: O Sistema de Notas
// Crie três variáveis com as notas de um aluno (nota1, nota2, nota3). Calcule a média das três notas e guarde o resultado em uma variável chamada media. Então crie uma variável mediaFinal = 6.5.
// - Se a média for maior ou igual a 7, exiba "Aprovado".
// - Se a média for menor que 7 mas for maior ou igual a 5, exiba "Recuperação".
// - Se for menor que 5, exiba "Reprovado".
let mediaFinal = 6.5;

// A ordem importa! Começamos da nota mais alta para a mais baixa.
if (mediaFinal >= 7) {
  console.log("Aprovado");
} else if (mediaFinal >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//### Exercício 3: Validação Simples de Formulário
//Crie uma variável nomeUsuario = "" (uma string vazia, simulando alguém que clicou em 'Enviar' sem digitar o nome).
// Crie uma verificação: Se o nomeUsuario for estritamente igual a "", mostre um erro: "Por favor, preencha seu nome!". Senão, mostre: "Usuário cadastrado com sucesso!".
let nomeUsuario = "";

if (nomeUsuario === "") {
  console.log("Por favor, preencha seu nome!");
} else {
  console.log("Usuário cadastrado com sucesso!");
}
