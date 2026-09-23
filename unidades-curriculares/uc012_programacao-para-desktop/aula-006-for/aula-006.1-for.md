# Aula 006 (10/09/2026) - Laço de Repetição for

> Estrutura que repete um bloco de código um número **conhecido** de vezes, sem precisar copiar e colar.

## Tópicos

- O problema da repetição
- Anatomia do for
- Rastreando o laço passo a passo
- Contagem crescente, decrescente e de N em N
- Acumuladores
- for com if/else
- for dentro de uma função
- break e continue
- Laços aninhados

## 1. O problema: código repetido

Imagine que você precisa dar boas-vindas aos 5 primeiros alunos da fila:

```js
console.log("Bem-vindo, aluno 1");
console.log("Bem-vindo, aluno 2");
console.log("Bem-vindo, aluno 3");
console.log("Bem-vindo, aluno 4");
console.log("Bem-vindo, aluno 5");
```

Funciona. Mas e se fossem 500 alunos? Copiar e colar 500 linhas não é programar — é digitar.
O `for` existe exatamente para isso: **descrever a repetição uma vez** e deixar o computador
repetir.

```js
for (let aluno = 1; aluno <= 5; aluno++) {
  console.log("Bem-vindo, aluno ", aluno);
}
```

Cinco linhas viraram três. E para atender 500 alunos, muda-se **um único número**.

## 2. Anatomia do for

```js
for (inicialização; condição; incremento) {
  // Instruções que serão repetidas
}
```

Dentro dos parênteses existem três partes, separadas por **ponto-e-vírgula**:

| Parte             | Quando roda                  | Para que serve                                      |
| ----------------- | ---------------------------- | --------------------------------------------------- |
| **Inicialização** | Uma única vez, antes de tudo | Criar a variável de controle (o "contador")         |
| **Condição**      | Antes de cada volta          | Enquanto for `true`, o bloco roda; se `false`, para |
| **Incremento**    | No fim de cada volta         | Mudar o contador para o laço poder chegar ao fim    |

```js
for (let contador = 1; contador <= 3; contador++) {
  console.log("Volta número: ", contador);
}
// Retorna: Volta número: 1
// Retorna: Volta número: 2
// Retorna: Volta número: 3
```

### O operador `++`

`contador++` é apenas um atalho para `contador = contador + 1`. Existe também o `--`, que
subtrai 1, e o `+=`, que soma um valor qualquer:

```js
let numero = 10;

numero++; // Agora numero vale 11 (mesmo que numero = numero + 1)
numero--; // Voltou para 10
numero += 5; // Agora vale 15 (mesmo que numero = numero + 5)
```

> [!NOTE]
> É muito comum ver o contador chamado de `i` (de _índice_ ou _iteração_): `for (let i = 1; i <= 3; i++)`.
> É uma convenção antiga e você vai encontrá-la em todo lugar. Enquanto estiver aprendendo,
> use nomes descritivos (`aluno`, `linha`, `multiplicador`) — o código fica muito mais fácil de ler.

## 3. Rastreando o laço passo a passo

Entender o `for` é entender **em que ordem** as três partes rodam. Vamos rastrear o exemplo acima:

| Passo         | `contador` vale | `contador <= 3` | O que acontece                                        |
| ------------- | --------------- | --------------- | ----------------------------------------------------- |
| Inicialização | 1               | —               | O contador nasce valendo 1                            |
| 1ª volta      | 1               | `true`          | Imprime "Volta número: 1" e o `++` deixa o contador 2 |
| 2ª volta      | 2               | `true`          | Imprime "Volta número: 2" e o `++` deixa o contador 3 |
| 3ª volta      | 3               | `true`          | Imprime "Volta número: 3" e o `++` deixa o contador 4 |
| Fim           | 4               | `false`         | A condição falhou: o laço termina e o programa segue  |

Repare que o contador chega a valer 4 — mas o bloco **não roda** com 4, porque a condição é
testada **antes** de cada volta.

## 4. Contando de outras formas

O contador não precisa começar em 1, nem subir de 1 em 1.

```js
// Contagem decrescente: começa em 5 e desce até 1
for (let contador = 5; contador >= 1; contador--) {
  console.log(contador);
}
// Retorna: 5, 4, 3, 2, 1

// De 2 em 2: só os números pares até 10
for (let par = 2; par <= 10; par += 2) {
  console.log(par);
}
// Retorna: 2, 4, 6, 8, 10
```

> [!WARNING]
> **Cuidado com o laço infinito!** Se o incremento nunca fizer a condição virar `false`,
> o programa repete para sempre e travará o terminal:
>
> ```js
> // ❌ NÃO RODE: contador começa em 1 e só diminui, então nunca ficará maior que 5
> for (let contador = 1; contador <= 5; contador--) {
>   console.log(contador);
> }
> ```
>
> Se acontecer, pressione **Ctrl + C** no terminal para interromper a execução.

> [!WARNING]
> A variável de controle precisa **mudar** de valor a cada volta, por isso ela é declarada com
> `let`, nunca com `const`. Usar `const` provoca o erro `TypeError: Assignment to constant variable`.

## 5. Acumuladores: guardando um resultado

Muitas vezes queremos somar algo a cada volta. Nesse caso, a variável que guarda o resultado
precisa nascer **fora** do laço — se ela for criada dentro, é zerada a cada volta.

```js
let total = 0; // Nasce FORA: sobrevive a todas as voltas

for (let numero = 1; numero <= 5; numero++) {
  total = total + numero;
  console.log("Somei ", numero, "- total até agora: ", total);
}

console.log("Soma final: ", total); // Retorna: 15
```

> [!NOTE]
> A variável criada na inicialização (`numero`, no exemplo) **só existe dentro do laço**.
> Tentar usá-la depois do fechamento das chaves gera o erro `ReferenceError: numero is not defined`.

## 6. for com if/else

Dentro do bloco do `for` cabe qualquer código — inclusive o `if/else` da aula passada:

```js
for (let numero = 1; numero <= 6; numero++) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
}
// Retorna: 1 é ímpar / 2 é par / 3 é ímpar / 4 é par / 5 é ímpar / 6 é par
```

O `%` (resto da divisão) da aula 003 é o jeito clássico de descobrir se um número é par:
se o resto da divisão por 2 é zero, é par.

## 7. for dentro de uma função

Juntando com as funções da aula 005, o laço fica **reutilizável**:

```js
function exibirTabuada(numero) {
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }
}

exibirTabuada(7); // Retorna: 7 x 1 = 7 ... até 7 x 10 = 70
exibirTabuada(3); // A mesma função serve para qualquer número
```

E com `return`, a função devolve o resultado acumulado em vez de imprimir:

```js
function somarAte(limite) {
  let soma = 0;

  for (let numero = 1; numero <= limite; numero++) {
    soma = soma + numero;
  }

  return soma;
}

console.log("Soma de 1 a 10: ", somarAte(10)); // Retorna: 55
console.log("Soma de 1 a 100: ", somarAte(100)); // Retorna: 5050
```

## 8. break e continue

Duas palavras que mudam o rumo do laço:

```js
// break: abandona o laço na hora, sem terminar as voltas restantes
for (let numero = 1; numero <= 10; numero++) {
  if (numero === 4) {
    break;
  }
  console.log(numero);
}
// Retorna: 1, 2, 3

// continue: pula APENAS a volta atual e segue para a próxima
for (let numero = 1; numero <= 5; numero++) {
  if (numero === 3) {
    continue;
  }
  console.log(numero);
}
// Retorna: 1, 2, 4, 5
```

## 9. Laços aninhados

Um `for` pode conter outro `for`. O de dentro roda **inteiro** a cada volta do de fora:

```js
for (let linha = 1; linha <= 3; linha++) {
  for (let coluna = 1; coluna <= 3; coluna++) {
    console.log(`Linha ${linha}, Coluna ${coluna}`);
  }
}
// Retorna: 9 linhas no console (3 voltas de fora x 3 voltas de dentro)
```

> [!WARNING]
> O número de execuções se **multiplica**. Dois laços de 1000 voltas cada resultam em
> 1.000.000 de execuções — o programa pode ficar bem lento.

---

## Exercícios

### Exercício 1: A Contagem Regressiva do Foguete

O centro de lançamento precisa exibir a contagem regressiva no telão. Crie um `for` que
exiba os números de **10 até 1**, um por linha. Quando o laço terminar, exiba a mensagem
"Decolar!".

> Dica: o contador precisa **descer**. Repense a condição e o incremento.

### Exercício 2: A Tabuada da Prova

O professor vai imprimir a folha de exercícios e precisa da tabuada do 8 formatada assim:
`8 x 1 = 8`, `8 x 2 = 16`, e assim por diante até o `8 x 10`.

Crie uma variável `numero = 8` e use um `for` para exibir as dez linhas da tabuada.

### Exercício 3: O Fechamento do Caixa da Lanchonete

A lanchonete vendeu **7 lanches** hoje, todos ao preço de **R$ 18,50**.

Sem usar multiplicação, use um `for` e um acumulador para somar o valor de cada lanche
vendido, exibindo o total parcial a cada venda. No fim do laço, exiba o faturamento do dia
com o rótulo "Faturamento do dia: ".

Depois, confira o resultado imprimindo `7 * 18.5` e compare os dois valores.

### Exercício 4: O Sorteio da Rifa

A rifa da turma vendeu os números de **1 a 30**. Apenas os números **pares** concorrem ao
prêmio extra.

- Percorra os números de 1 a 30 com um `for`.
- Exiba no console **somente** os números pares (use `%` e `if`).
- Conte quantos números pares foram encontrados, guardando o resultado em uma variável
  `totalPares`, e exiba esse total no fim.

### Exercício 5: O Boleto Parcelado

A loja precisa mostrar ao cliente como ficou o parcelamento da compra.

Crie uma função `gerarParcelas` que receba dois parâmetros: `valorTotal` e
`quantidadeParcelas`. Dentro dela, calcule o valor de cada parcela e use um `for` para
exibir uma linha por parcela, no formato:
`Parcela 1 de 3: R$ 300`

Teste a função com `gerarParcelas(900, 3)` e `gerarParcelas(1200, 12)`.

### Exercício 6 (Desafio): A Pirâmide de Asteriscos

Usando **dois laços aninhados** e uma variável de texto como acumulador, exiba no console
uma pirâmide de 5 linhas:

```text
*
**
***
****
*****
```

> Dica: o laço de fora controla a linha (1 a 5). O de dentro monta o texto daquela linha,
> concatenando um `"*"` de cada vez. O `console.log` da linha acontece **depois** do laço de
> dentro terminar.
