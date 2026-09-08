# Aula 002 (03/09/2026) - Operadores Matemáticos

> Os operadores são os símbolos que usamos para manipular os valores numéricos.

```js
let a = 10;
let b = 3;

// Soma (+)
console.log(a + b); // Retorna: 13

// Subtração (-)
console.log(a - b); // Retorna: 7

// Multiplicação (*)
console.log(a * b); // Retorna: 30

// Divisão (/)
console.log(a / b); // Retorna: 3.3333333333333335

// Resto da Divisão ou Módulo (%)
// É excelente para saber se um número é par ou ímpar.
console.log(a % b); // Retorna: 1 (pois 10 dividido por 3 é 9, e sobra 1)
```

> [!WARNING]
> **Atenção:** Sempre se certifique em uma soma de estar somando dois valores do tipo number, ao usar strings pode-se obter resultados indesejados
> `console.log("5" + 5); ` retornará "55" e não 10!.

## Exercícios

### Exercício 1: A Média do Semestre

Crie três variáveis com as notas de um aluno (nota1, nota2, nota3). Calcule a média das três notas e guarde o resultado em uma variável chamada media. Exiba a média no console.

### Exercício 2: O Carrinho de Compras

Você comprou 3 camisetas que custam R$ 35 cada e um tênis que custa R$ 120. Você tem um saldo de R$ 200.

- Calcule o valor total da compra.
- Crie uma comparação que retorne true se você tem saldo suficiente para pagar a conta, ou false se não tiver.

### Exercício 3: O Mistério da Idade

Um formulário web salvou a idade do usuário como texto: let idadeUsuario = "25";.
Um sistema VIP só permite a entrada de pessoas que tenham exatamente o número 25.
Escreva a comparação correta (usando ===) que mostre que "25" (texto) não é aceito no lugar do 25 (número).
