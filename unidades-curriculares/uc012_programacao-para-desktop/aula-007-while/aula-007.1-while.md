# Aula 007 (15/09/2026) - Laço de Repetição while

> Estrutura que repete um bloco de código **enquanto** uma condição for verdadeira — mesmo que não se saiba quantas voltas isso vai levar.

## Tópicos

- for x while: número de voltas conhecido ou desconhecido
- Anatomia do while
- Rastreando o laço passo a passo
- O laço que nunca roda
- O laço infinito
- Acumuladores e consumo de valores
- Sentinela: repetir até alguém dizer "pare"
- break e continue
- Quando usar for e quando usar while

## 1. O problema: e quando não sabemos quantas voltas?

O `for` da aula passada é perfeito quando o número de repetições é **conhecido**: dez linhas
de tabuada, trinta bilhetes de rifa, cinco linhas de pirâmide.

Mas pense em situações reais:

- Descontar passagens de um cartão de transporte **até o saldo acabar**.
- Pedir a senha ao usuário **até ele acertar**.
- Vender **até bater a meta** do mês.

Em nenhum desses casos sabemos o número de voltas antes de começar. Sabemos apenas **a
condição para continuar**. É aí que entra o `while` (em português, "enquanto").

## 2. Anatomia do while

```js
while (condição) {
  // Instruções que serão repetidas
}
```

Só isso: uma condição entre parênteses. Enquanto ela for `true`, o bloco repete.

E o contador? As três partes do `for` continuam existindo — mas agora **você** as escreve
manualmente, em lugares diferentes:

```js
let contador = 1; // 1. Inicialização: ANTES do laço

while (contador <= 3) {
  // 2. Condição: dentro dos parênteses
  console.log("Volta número: ", contador);
  contador++; // 3. Incremento: DENTRO do bloco, escrito por você
}
// Retorna: Volta número: 1
// Retorna: Volta número: 2
// Retorna: Volta número: 3
```

### O mesmo resultado, os dois jeitos

```js
// Com for: as três partes ficam juntas, na mesma linha
for (let contador = 1; contador <= 3; contador++) {
  console.log(contador);
}

// Com while: as três partes ficam espalhadas
let numero = 1;
while (numero <= 3) {
  console.log(numero);
  numero++;
}
```

Os dois imprimem `1, 2, 3`. Quando o número de voltas é conhecido, o `for` é mais organizado
justamente porque mantém tudo à vista.

> [!NOTE]
> A variável do `for` nasce **dentro** dos parênteses e morre com o laço. No `while`, ela
> nasce **antes** do laço — e por isso continua existindo depois que ele termina. Isso é
> muito útil: dá para consultar em quantas voltas o laço parou.

## 3. Rastreando o laço passo a passo

```js
let combustivel = 20;

while (combustivel >= 6) {
  combustivel = combustivel - 6;
  console.log("Restam ", combustivel, "litros");
}
```

| Passo    | `combustivel` vale | `combustivel >= 6` | O que acontece                  |
| -------- | ------------------ | ------------------ | ------------------------------- |
| Antes    | 20                 | —                  | A variável nasce valendo 20     |
| 1ª volta | 20                 | `true`             | Gasta 6 e imprime "Restam 14"   |
| 2ª volta | 14                 | `true`             | Gasta 6 e imprime "Restam 8"    |
| 3ª volta | 8                  | `true`             | Gasta 6 e imprime "Restam 2"    |
| Fim      | 2                  | `false`            | 2 é menor que 6: o laço termina |

Repare: em nenhum momento escrevemos "repita 3 vezes". O número 3 foi **consequência** da
condição — e é exatamente essa a força do `while`.

## 4. O laço que nunca roda

Se a condição já começa `false`, o bloco **não executa nenhuma vez**:

```js
let saldo = 0;

while (saldo >= 10) {
  console.log("Comprando um item de R$ 10...");
  saldo = saldo - 10;
}

console.log("Fim. Saldo: ", saldo); // Retorna: Fim. Saldo: 0
```

A mensagem "Comprando..." nunca aparece, porque `0 >= 10` é `false` desde o início. Isso não
é um erro: é o comportamento correto. Ninguém deve comprar nada com saldo zero.

## 5. O laço infinito

Este é **o** erro clássico do `while`. Como o incremento é escrito por você, esquecer dele
significa que a condição nunca muda:

```js
// ❌ NÃO RODE: falta o contador++ dentro do bloco
let contador = 1;

while (contador <= 3) {
  console.log("Sempre a mesma volta...");
}
```

> [!WARNING]
> O `contador` fica valendo 1 para sempre, a condição `1 <= 3` é eternamente `true` e o
> programa nunca para. Se isso acontecer, pressione **Ctrl + C** no terminal para interromper.
>
> Antes de rodar um `while`, faça sempre esta pergunta: **o que, dentro do bloco, vai fazer
> essa condição virar `false`?** Se não houver resposta, o laço é infinito.

## 6. Acumuladores e consumo de valores

Assim como no `for`, a variável que guarda o resultado nasce fora do laço. No `while` há dois
movimentos muito comuns:

**Consumindo** um valor até ele acabar:

```js
let combustivel = 20; // Litros no tanque
const consumoPorVolta = 6; // Litros gastos em cada volta na pista
let voltas = 0;

while (combustivel >= consumoPorVolta) {
  combustivel = combustivel - consumoPorVolta;
  voltas++;
  console.log("Volta ", voltas, "- restam ", combustivel, "litros");
}

console.log("Voltas completadas: ", voltas); // Retorna: 3
console.log("Sobrou no tanque: ", combustivel); // Retorna: 2
```

**Acumulando** até atingir um alvo:

```js
const meta = 100;
const pontosPorPartida = 30;
let pontos = 0;
let partidas = 0;

while (pontos < meta) {
  pontos = pontos + pontosPorPartida;
  partidas++;
}

console.log("Partidas jogadas: ", partidas); // Retorna: 4
console.log("Pontos no fim: ", pontos); // Retorna: 120
```

Repare que o total **passa** da meta (120, não 100). A última volta só acontece porque, no
momento do teste, ainda faltavam pontos.

## 7. Sentinela: repetir até alguém dizer "pare"

A condição do `while` não precisa ser um contador. Pode ser uma variável booleana — chamada
de **sentinela** ou _flag_ — que o próprio bloco desliga quando o objetivo é alcançado:

```js
let senhaCorreta = false;
let tentativa = 0;

while (senhaCorreta === false) {
  tentativa++;
  console.log("Tentativa ", tentativa);

  // Simulando o usuário: na terceira tentativa ele acerta a senha
  if (tentativa === 3) {
    senhaCorreta = true; // Aqui a sentinela desliga e o laço termina
  }
}

console.log("Cofre aberto em ", tentativa, "tentativas"); // Retorna: 3
```

Esse padrão é impossível de escrever bem com `for`: não existe um número de voltas para
colocar na condição — existe um **evento** que encerra o laço.

## 8. break e continue

Funcionam exatamente como no `for`:

```js
let numero = 0;

while (numero <= 10) {
  numero++;

  if (numero === 3) {
    continue; // Pula só esta volta
  }

  if (numero === 6) {
    break; // Abandona o laço
  }

  console.log(numero);
}
// Retorna: 1, 2, 4, 5
```

## 9. for ou while?

| Situação                                           | Melhor escolha |
| -------------------------------------------------- | -------------- |
| "Repita 10 vezes"                                  | `for`          |
| "Imprima a tabuada de 1 a 10"                      | `for`          |
| "Desconte do saldo até ele acabar"                 | `while`        |
| "Continue até o usuário acertar"                   | `while`        |
| "Some vendas até bater a meta"                     | `while`        |
| Número de voltas **conhecido** antes de começar    | `for`          |
| Número de voltas **descoberto** durante a execução | `while`        |

Na prática: tudo que o `for` faz, o `while` também faz — e vice-versa. A escolha é sobre
deixar a intenção clara para quem lê o código depois.

> [!NOTE]
> Existe ainda um terceiro laço, o `do/while`, que garante **pelo menos uma volta** mesmo
> quando a condição já começa `false` (lembra do exemplo da seção 4?). Ele é o assunto da
> próxima aula.

---

## Exercícios

### Exercício 1: A Contagem Regressiva, Agora com while

Refaça o exercício 1 da aula passada, mas trocando o `for` por um `while`: exiba os números
de **10 até 1**, um por linha, e depois do laço exiba "Decolar!".

> Dica: as três partes ainda existem. Onde vai cada uma delas agora?

### Exercício 2: O Cartão de Transporte

Você carregou **R$ 50,00** no cartão de transporte e cada passagem custa **R$ 4,50**.

Use um `while` para descontar uma passagem por vez, **enquanto o saldo der para pagar** a
próxima. Exiba o saldo restante a cada viagem. No fim, informe quantas viagens foram feitas
e quanto sobrou no cartão.

### Exercício 3: A Meta de Vendas

Um vendedor tem a meta de **R$ 10.000,00** no mês e cada venda que ele fecha vale
**R$ 750,00**.

Use um `while` para acumular as vendas **enquanto o total estiver abaixo da meta**, exibindo
o acumulado a cada venda. No fim, informe quantas vendas foram necessárias e qual foi o total
alcançado.

### Exercício 4: O Jogo de Adivinhação

O número secreto do sorteio é **7**. Um robô muito simples tenta adivinhar chutando a partir
do **1**, somando 1 a cada nova tentativa.

Crie um `while` que continue **enquanto o chute for diferente do número secreto** (use `!==`),
exibindo cada tentativa. Quando acertar, exiba "Acertou! O número era 7" e quantos chutes
foram necessários.

### Exercício 5: O Investimento que Dobra

Crie uma função `calcularAnos` que receba dois parâmetros: `valorInicial` e `valorDesejado`.

Dentro dela, use um `while` para dobrar o valor investido a cada ano, **enquanto ele for
menor que o valor desejado**, contando os anos que passaram. A função deve usar `return` para
devolver a quantidade de anos.

Teste com `calcularAnos(1000, 10000)` e `calcularAnos(500, 2000)`.

### Exercício 6 (Desafio): O Detector de Números Primos

Um número é **primo** quando só pode ser dividido por 1 e por ele mesmo — ou seja, nenhum
outro número deixa resto zero na divisão.

Crie uma variável `numero = 91` e uma sentinela `ehPrimo = true`. Use um `while` que teste os
divisores a partir do **2**, e:

- se algum divisor deixar resto zero (`%`), desligue a sentinela e use `break` para abandonar
  o laço;
- ao terminar, exiba se o número é primo ou não, informando qual divisor o denunciou.

Depois teste com outros números, como 7, 13 e 100.
