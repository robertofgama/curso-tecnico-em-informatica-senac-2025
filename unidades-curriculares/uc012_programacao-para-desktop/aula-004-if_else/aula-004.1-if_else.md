# Aula 004 (08/09/2026) - IF e Else

## 1. O if (Se) - A Condição Básica

O if verifica se uma condição é verdadeira (true). Se for, ele executa o bloco de código que está entre as chaves {}.

```js
let idade = 20;

// O código dentro das chaves só roda se a comparação retornar 'true'
if (idade >= 18) {
  console.log("Acesso liberado! Você é maior de idade.");
}
```

## 2. O else (Senão) - A Alternativa

O else é o "plano B". Ele nunca tem uma condição própria; ele capta tudo o que não passou no if.

```js
let saldo = 150;
let totalCompra = 225;

if (saldo >= totalCompra) {
  console.log("Compra aprovada! Processando pagamento...");
} else {
  console.log("Compra negada. Saldo insuficiente.");
}
```

## Exercícios

### Exercício 1: O Radar de Velocidade

Crie uma variável velocidade com o valor de 90. Crie uma estrutura if/else. Se a velocidade for estritamente maior que 80, exiba no console: "Você foi multado!". Caso contrário, exiba: "Velocidade permitida, boa viagem!".

### Exercício 2: O Sistema de Notas

Crie três variáveis com as notas de um aluno (nota1, nota2, nota3). Calcule a média das três notas e guarde o resultado em uma variável chamada media. Então crie uma variável mediaFinal = 6.5.

- Se a média for maior ou igual a 7, exiba "Aprovado".
- Se a média for menor que 7 mas for maior ou igual a 5, exiba "Recuperação".
- Se for menor que 5, exiba "Reprovado".

### Exercício 3: Validação Simples de Formulário

Crie uma variável nomeUsuario = "" (uma string vazia, simulando alguém que clicou em 'Enviar' sem digitar o nome).
Crie uma verificação: Se o nomeUsuario for estritamente igual a "", mostre um erro: "Por favor, preencha seu nome!". Senão, mostre: "Usuário cadastrado com sucesso!".
