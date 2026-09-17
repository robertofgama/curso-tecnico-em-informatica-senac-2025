# Aula 005 (09/09/2026) - Funções

> Trecho de código reutilizável que pode receber parametros e retornar ou não informações

## Tipos de Funções

### Declaração Clássica

Forma mais clássica/comum de declaração de uma função, tem o efeito _hoisting_

```js
function nomeDaFuncao(parametros) {
  // Instruções
}
```

### Expressão de Função (Function Expression)

Neste formato, é criada uma função (geralmente sem nome, chamada de função anônima) e a guarda dentro de uma variável. Não sofre _hoisting_

```js
const nomeDaConstante = function (parametros) {
  // INSTRUÇÕES
};
```

### Funções de Seta (Arrow Functions)

Esta é a sintaxe moderna (introduzida no ES6). É a queridinha dos desenvolvedores atuais por ser mais curta e direta. Ela tem um retorno implicito caso tenha um linha de código.

```js
(parametros) => { // INSTRUÇÕES };
```

## Exercícios

Você foi contratado para criar a função de checkout de um e-commerce. Crie uma função chamada calcularDesconto que receba dois parâmetros: precoOriginal e cupom.

- Se o cupom for estritamente igual a "PROMO20", aplique 20% de desconto.
- Se o cupom for estritamente igual a "BLACKFRIDAY", aplique 50% de desconto.
- Se não for nenhum dos dois (ou for vazio), não dê desconto nenhum.
  A função deve usar o return para devolver o preço final atualizado. Teste a função com diferentes cupons e preços!

## Exercícios

Você precisa automatizar o fechamento de notas de uma escola. Para isso, crie uma função que calcule a média de um aluno e diga se ele passou de ano.
Declare uma função chamada avaliarAluno.
Configure a função para receber dois parâmetros: nota1 e nota2.
Dentro do bloco de código (o corpo da função), crie uma variável para calcular a média dessas duas notas.
Crie uma estrutura if/else baseada na média calculada:
Se a média for maior ou igual a 7, use o comando return para devolver o texto "Aprovado".
Caso contrário, use o comando return para devolver o texto "Reprovado".
Teste a sua função (ligue a máquina) passando diferentes notas e guarde o resultado em variáveis para exibir no console.log.

