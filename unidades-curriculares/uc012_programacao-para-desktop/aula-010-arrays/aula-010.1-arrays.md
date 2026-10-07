# Aula 010 (07/10/2026) - Arrays

> Uma única variável capaz de guardar uma **lista** de valores, organizados em posições numeradas.

## Tópicos

- O problema das variáveis numeradas
- Criando um array
- Índices: a contagem começa no zero
- `length`: o tamanho da lista
- Alterando valores
- Adicionando e removendo: `push`, `pop`, `unshift` e `shift`
- Percorrendo um array com `for`
- Padrões clássicos: somar, achar o maior, filtrar e buscar
- Arrays e funções
- Consumindo um array com `while`

## 1. O problema: e quando são 30 notas?

Até agora, cada valor do programa morava na sua própria variável:

```js
let nota1 = 8;
let nota2 = 6.5;
let nota3 = 9;
let nota4 = 7;
let nota5 = 10;

const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
console.log("Média: ", media); // Retorna: Média: 8.1
```

Funciona para cinco notas. Mas pense na turma inteira:

- 30 alunos significam **30 variáveis** e uma soma enorme escrita à mão.
- Se entrar um aluno novo, é preciso criar `nota31` **e** mexer na conta da média.
- O `for` não ajuda: `nota1`, `nota2` e `nota3` são nomes diferentes, e o laço não consegue
  "montar" o nome de uma variável a cada volta.

O que precisamos é de **uma** variável que guarde **todas** as notas, e um jeito de pedir
"a nota da posição tal". Isso é um **array** (também chamado de vetor ou lista).

## 2. Criando um array

Um array é escrito entre **colchetes** `[]`, com os valores (chamados de **elementos**)
separados por vírgula:

```js
const notas = [8, 6.5, 9, 7, 10];
const frutas = ["maçã", "banana", "uva"];
const carrinho = []; // Array vazio: os itens vão entrar depois

console.log(notas); // Retorna: [ 8, 6.5, 9, 7, 10 ]
console.log(frutas); // Retorna: [ 'maçã', 'banana', 'uva' ]
```

> [!NOTE]
> Repare que o Node exibe os textos de dentro do array com aspas **simples**. É só a forma de
> exibição do terminal; no código, continuamos usando aspas duplas.

Um array até aceita tipos misturados (`["Ana", 17, true]`), mas evite: uma lista organizada
guarda **um tipo de informação** — só notas, só nomes, só preços.

## 3. Índices: a contagem começa no zero

Cada elemento ocupa uma posição numerada, chamada **índice**. E aqui está a maior pegadinha
dos arrays: **o primeiro índice é 0**, não 1. Veja como fica o array `notas`:

| Índice | 0   | 1   | 2   | 3   | 4   |
| ------ | --- | --- | --- | --- | --- |
| Valor  | 8   | 6.5 | 9   | 7   | 10  |

Para ler um elemento, escreva o nome do array e o índice entre colchetes:

```js
const notas = [8, 6.5, 9, 7, 10];

console.log(notas[0]); // Retorna: 8   (o primeiro)
console.log(notas[2]); // Retorna: 9   (o terceiro!)
console.log(notas[4]); // Retorna: 10  (o último)
console.log(notas[5]); // Retorna: undefined
```

Pense no elevador de um prédio: o térreo é o andar **0**, e o "primeiro andar" já é o segundo
nível do prédio. No array é igual: o índice diz **quantas posições você anda a partir do
início**.

> [!WARNING]
> Pedir um índice que não existe (`notas[5]`) **não dá erro**: o JavaScript devolve
> `undefined` em silêncio. Se aparecer um `undefined` inesperado na sua saída, desconfie de
> um índice errado.

O índice também pode ser uma **variável** — e é isso que vai permitir usar o `for` mais à
frente:

```js
let posicao = 1;
console.log(notas[posicao]); // Retorna: 6.5
```

## 4. `length`: o tamanho da lista

Todo array sabe quantos elementos tem. Essa informação fica em `.length` (comprimento):

```js
const notas = [8, 6.5, 9, 7, 10];

console.log("Quantidade de notas: ", notas.length); // Retorna: 5
console.log("Última nota: ", notas[notas.length - 1]); // Retorna: 10
```

Como o índice começa no zero, **o último índice é sempre `length - 1`**: um array de 5
elementos vai do índice 0 ao 4. Usar `notas.length - 1` em vez de digitar `4` faz o código
continuar certo mesmo quando a lista crescer.

## 5. Alterando valores

Para trocar um elemento, atribua um novo valor à posição desejada:

```js
const notas = [8, 6.5, 9, 7, 10];

notas[1] = 7.5; // O aluno fez a prova de recuperação
console.log(notas); // Retorna: [ 8, 7.5, 9, 7, 10 ]
```

> [!NOTE]
> "Mas `notas` não é `const`?" É, e o `const` continua valendo: ele impede que a variável
> receba **outro array** (`notas = [1, 2]` dá erro). O que está **dentro** da lista pode ser
> trocado, adicionado e removido normalmente. Por isso arrays costumam ser declarados com
> `const`.

## 6. Adicionando e removendo: `push`, `pop`, `unshift` e `shift`

Arrays vêm com **métodos**: funções prontas que pertencem a eles e são chamadas com um ponto,
do mesmo jeito que o `log` do `console.log`. Os quatro mais usados mexem nas pontas da lista:

| Método           | O que faz                   | Onde mexe |
| ---------------- | --------------------------- | --------- |
| `push(valor)`    | Adiciona um elemento        | No fim    |
| `pop()`          | Remove e devolve o último   | No fim    |
| `unshift(valor)` | Adiciona um elemento        | No início |
| `shift()`        | Remove e devolve o primeiro | No início |

Uma fila de banco mostra os quatro funcionando:

```js
const fila = ["Ana", "Bruno"];

fila.push("Carla"); // Chegou alguém no fim da fila
console.log(fila); // Retorna: [ 'Ana', 'Bruno', 'Carla' ]

fila.unshift("Dona Maria"); // Atendimento prioritário: entra na frente
console.log(fila); // Retorna: [ 'Dona Maria', 'Ana', 'Bruno', 'Carla' ]

const atendida = fila.shift(); // O caixa chama o primeiro da fila
console.log("Atendida: ", atendida); // Retorna: Atendida: Dona Maria

const desistente = fila.pop(); // O último cansou de esperar e foi embora
console.log("Desistiu: ", desistente); // Retorna: Desistiu: Carla

console.log(fila); // Retorna: [ 'Ana', 'Bruno' ]
console.log("Ainda na fila: ", fila.length); // Retorna: 2
```

Repare que `pop()` e `shift()` **devolvem** o elemento removido (como o `return` de uma
função), então dá para guardá-lo numa variável.

## 7. Percorrendo um array com `for`

Agora o `for` encaixa perfeitamente: o contador vira o **índice**, começando em 0 e indo até
o fim da lista.

```js
const notas = [8, 6.5, 9, 7, 10];

for (let i = 0; i < notas.length; i++) {
  console.log("Posição", i, "- nota:", notas[i]);
}
// Retorna: Posição 0 - nota: 8
// Retorna: Posição 1 - nota: 6.5
// Retorna: Posição 2 - nota: 9
// Retorna: Posição 3 - nota: 7
// Retorna: Posição 4 - nota: 10
```

| Passo    | `i` vale | `i < notas.length` | `notas[i]` | O que acontece                    |
| -------- | -------- | ------------------ | ---------- | --------------------------------- |
| 1ª volta | 0        | `0 < 5` → `true`   | 8          | Imprime a nota 8                  |
| 2ª volta | 1        | `1 < 5` → `true`   | 6.5        | Imprime a nota 6.5                |
| ...      | ...      | ...                | ...        | ...                               |
| 5ª volta | 4        | `4 < 5` → `true`   | 10         | Imprime a nota 10                 |
| Fim      | 5        | `5 < 5` → `false`  | —          | O laço termina sem ler `notas[5]` |

Essa linha vale ser decorada, porque vai aparecer no curso inteiro:

```js
for (let i = 0; i < lista.length; i++)
```

> [!WARNING]
> Use `<` e não `<=`. Com `i <= notas.length`, o laço dá uma volta a mais, tenta ler
> `notas[5]` e imprime `undefined` no final.

## 8. Padrões clássicos

Quase todo problema com arrays é uma variação de um destes quatro padrões.

### Somar (e calcular a média)

O acumulador nasce **fora** do laço, como já fazíamos com o `for` e o `while`:

```js
const notas = [8, 6.5, 9, 7, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log("Soma: ", soma); // Retorna: 40.5
console.log("Média: ", media); // Retorna: 8.1
```

Compare com a seção 1: se a turma tiver 30 notas, **esse código não muda nada**. É só a lista
que fica maior.

### Achar o maior (ou o menor)

A ideia é guardar um "campeão provisório" e trocá-lo sempre que aparecer alguém melhor:

```js
const temperaturas = [12, 17, -1, 21, 8];
let maior = temperaturas[0]; // Supõe que o primeiro é o maior

for (let i = 1; i < temperaturas.length; i++) {
  if (temperaturas[i] > maior) {
    maior = temperaturas[i]; // Achou um maior: troca o campeão
  }
}

console.log("Maior temperatura: ", maior); // Retorna: 21
```

> [!NOTE]
> Por que começar com `temperaturas[0]` e não com `0`? Porque, num inverno na serra, todas as
> temperaturas podem ser negativas — e aí o `0` "venceria" sem nem estar na lista. Começando
> pelo primeiro elemento, o campeão provisório é sempre um valor de verdade. Pelo mesmo
> motivo, o laço já pode começar no índice 1.

### Filtrar (montar uma nova lista)

Junte o `for`, o `if` e o `push` para separar só os elementos que interessam:

```js
const velocidades = [55, 72, 60, 81, 48, 66];
const limite = 60;
const infracoes = []; // Começa vazia e vai sendo preenchida

for (let i = 0; i < velocidades.length; i++) {
  if (velocidades[i] > limite) {
    infracoes.push(velocidades[i]);
  }
}

console.log("Multas aplicadas: ", infracoes.length); // Retorna: 3
console.log("Velocidades multadas: ", infracoes); // Retorna: [ 72, 81, 66 ]
```

### Buscar

Para descobrir **se** um valor está na lista e **onde**, percorra até encontrar e use `break`
para não continuar procurando à toa:

```js
const convidados = ["Ana", "Bruno", "Carla", "Diego"];
const procurado = "Carla";
let posicaoEncontrada = -1; // -1 significa "ainda não encontrei"

for (let i = 0; i < convidados.length; i++) {
  if (convidados[i] === procurado) {
    posicaoEncontrada = i;
    break; // Achou: não precisa olhar o resto
  }
}

if (posicaoEncontrada === -1) {
  console.log(procurado, "não está na lista");
} else {
  console.log(procurado, "está na posição", posicaoEncontrada); // Retorna: Carla está na posição 2
}
```

Usamos `-1` porque nenhum índice válido é negativo: se a variável continuar valendo `-1`
depois do laço, é sinal de que a busca falhou.

> [!TIP]
> Essa busca é tão comum que o JavaScript já tem métodos prontos para ela:
> `convidados.includes("Carla")` devolve `true` e `convidados.indexOf("Carla")` devolve `2`
> (ou `-1` se não encontrar). Escrever a busca à mão primeiro ajuda a entender o que eles
> fazem por dentro.

## 9. Arrays e funções

Um array pode ser passado como **parâmetro**, o que deixa a função útil para listas de
qualquer tamanho:

```js
function calcularMedia(listaDeNotas) {
  let soma = 0;

  for (let i = 0; i < listaDeNotas.length; i++) {
    soma += listaDeNotas[i];
  }

  return soma / listaDeNotas.length;
}

console.log("Média da Ana: ", calcularMedia([8, 6.5, 9, 7, 10])); // Retorna: 8.1
console.log("Média do Bruno: ", calcularMedia([5, 6, 7])); // Retorna: 6
```

E uma função também pode **devolver** um array montado lá dentro:

```js
function gerarTabuada(numero, limite) {
  const resultados = [];

  for (let i = 1; i <= limite; i++) {
    resultados.push(numero * i);
  }

  return resultados;
}

console.log(gerarTabuada(3, 5)); // Retorna: [ 3, 6, 9, 12, 15 ]
```

## 10. Consumindo um array com `while`

Lembra que o `while` brilha quando o número de voltas é descoberto durante a execução? Uma
fila é exatamente isso: atende-se **enquanto houver gente**.

```js
const fila = ["Ana", "Bruno", "Carla"];

while (fila.length > 0) {
  const pessoa = fila.shift(); // Tira o primeiro da fila
  console.log("Atendendo:", pessoa, "- ainda esperando:", fila.length);
}

console.log("Fila vazia, caixa fechado!");
// Retorna: Atendendo: Ana - ainda esperando: 2
// Retorna: Atendendo: Bruno - ainda esperando: 1
// Retorna: Atendendo: Carla - ainda esperando: 0
// Retorna: Fila vazia, caixa fechado!
```

Aqui não há laço infinito: cada `shift()` diminui o `length` em 1, então a condição
`fila.length > 0` inevitavelmente vira `false`.

---

## Exercícios

Os exercícios de 1 a 6 fixam o básico. Os exercícios 7 e 8 são de nível **médio** e juntam
vários padrões no mesmo programa. Os exercícios 9 e 10 são de nível **difícil**: leia o
enunciado com calma e planeje no papel antes de escrever o código.

### Exercício 1: A Lista de Chamada

O professor guardou os alunos da turma num array:

```js
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eduarda", "Felipe"];
```

Exiba no terminal:

- a quantidade de alunos da turma;
- o nome do primeiro aluno;
- o nome do último aluno, **sem digitar o número 5** (use o `length`);
- a chamada completa com um `for`, numerada a partir de **1**: "1 - Ana", "2 - Bruno"...

> Dica: o índice começa em 0, mas a chamada começa em 1. Qual conta transforma um no outro?

### Exercício 2: O Boletim

As notas de um aluno no semestre foram `[7.5, 8, 5.5, 9, 6]`.

Use um `for` para somar as notas e depois calcule a média. Em seguida, exiba a média e a
situação do aluno:

- média maior ou igual a 7: "Aprovado";
- média maior ou igual a 5: "Recuperação";
- abaixo disso: "Reprovado".

### Exercício 3: O Carrinho de Compras

Uma loja de informática controla o carrinho do cliente com um array que começa **vazio**.
Simule a compra passo a passo, exibindo o carrinho e a quantidade de itens depois de cada
etapa:

1. O cliente adiciona, nesta ordem: "Mouse", "Teclado", "Monitor" e "Webcam".
2. Ele desiste do **último** item que colocou. Remova-o e exiba "Removido: Webcam".
3. O sistema avisa que o **primeiro** item está esgotado. Remova-o e exiba qual foi.
4. Ele lembra de um "Headset" e o adiciona ao carrinho.

Use apenas `push`, `pop` e `shift` — nenhum índice digitado à mão.

### Exercício 4: O Sorteio de Brindes

No evento de aniversário do Senac, foram sorteados os números
`[12, 7, 33, 40, 18, 5, 21, 8]`. Os números **pares** ganham uma caneca e os **ímpares**
ganham uma camiseta.

Crie dois arrays vazios, `ganhadoresCaneca` e `ganhadoresCamiseta`. Percorra os números
sorteados e use o `%` e o `push` para colocar cada número na lista certa. No fim, exiba as
duas listas e quantos brindes de cada tipo serão entregues.

### Exercício 5: O Histórico do Navegador

O navegador guardou os sites visitados na ordem em que foram abertos:

```js
const visitas = [
  "senac.br",
  "github.com",
  "nodejs.org",
  "developer.mozilla.org",
];
```

Mas o histórico deve mostrar o **mais recente primeiro**. Crie um novo array `historico`,
inicialmente vazio, e use um `for` que percorra `visitas` **de trás para frente**, colocando
cada site no `historico` com `push`. Exiba o histórico numerado a partir de 1.

Resolva sem usar o método `reverse()`: descubra onde o contador começa, onde ele termina e se
ele sobe ou desce.

### Exercício 6: A Lista VIP

O segurança de uma festa precisa conferir se o nome da pessoa está na lista de convidados.

Crie uma função `estaNaLista` que receba dois parâmetros, `lista` e `nome`, e use um `for`
para procurar o nome. A função deve usar `return` para devolver `true` se encontrar e `false`
se não encontrar. Resolva **sem** usar `includes` ou `indexOf`.

Depois, com a lista `["Ana", "Bruno", "Carla", "Diego"]`, teste a função com "Carla" e com
"Zeca", exibindo "Entrada liberada" ou "Nome não encontrado" para cada um.

### Exercício 7 (Médio): A Estação Meteorológica

Uma estação na Serra Gaúcha registrou as temperaturas mínimas de uma semana de inverno:

```js
const temperaturas = [14, 9, -2, 5, 11, 17, 9];
```

Usando **um único** `for`, descubra:

- a maior temperatura da semana;
- a menor temperatura da semana;
- a média da semana;
- quantos dias ficaram **abaixo de 10 graus**.

Exiba os quatro resultados depois do laço.

### Exercício 8 (Médio): A Fila do Banco

A fila do caixa começa com `["Ana", "Bruno", "Carla", "Diego"]`. Antes de o caixa abrir:

- chega a "Dona Maria", que tem atendimento prioritário e vai para o **início** da fila;
- chega o "Eduardo", que vai para o **fim** da fila.

Cada atendimento leva **5 minutos**. Use um `while` que continue **enquanto houver gente na
fila**, retirando uma pessoa por vez e exibindo em que minuto ela foi chamada
("Minuto 0: atendendo Dona Maria", "Minuto 5: atendendo Ana"...). No fim, informe quantas
pessoas foram atendidas e quanto tempo o caixa levou no total.

### Exercício 9 (Difícil): O Controle de Estoque

O estoque de uma loja de informática é guardado em **dois arrays paralelos**: o produto de
cada índice corresponde à quantidade do **mesmo índice** no outro array.

```js
const produtos = ["Mouse", "Teclado", "Monitor", "Headset", "Webcam"];
const quantidades = [25, 4, 12, 0, 3];
const estoqueMinimo = 5;
```

Ou seja: há 25 mouses, 4 teclados, 12 monitores, nenhum headset e 3 webcams.

1. Crie uma função `listarParaRepor` que receba os dois arrays e o estoque mínimo e
   **devolva um novo array** com os nomes dos produtos que estão **abaixo** do mínimo.
2. Exiba a lista de reposição e quantos produtos precisam ser comprados.
3. Descubra o produto com **mais** unidades em estoque e exiba o **nome** e a quantidade dele.
4. Exiba o total de unidades guardadas no estoque.

> Dica: para o item 3 não basta guardar a maior quantidade. Guarde também **o índice** onde
> ela está, porque é ele que leva até o nome no outro array.

### Exercício 10 (Difícil): O Pódio do Campeonato

Num campeonato de jogos da turma, os jogadores e suas pontuações foram registrados em dois
arrays paralelos, na ordem de inscrição:

```js
const jogadores = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];
const pontos = [72, 95, 88, 60, 91];
```

Ordene os jogadores da **maior para a menor** pontuação e exiba o ranking completo
("Posição 1 - Bruno com 95 pontos"...) e, depois, só o pódio (os 3 primeiros). Resolva
**sem** usar o método `sort()`, com a técnica chamada **Bubble Sort** (ordenação por bolha):

- compare cada elemento com o **vizinho da direita**; se estiverem fora de ordem, troque os
  dois de lugar;
- uma passada inteira pelo array leva o menor valor para o fim, como uma bolha que afunda;
- repita as passadas até a lista inteira estar em ordem. Isso pede **dois laços aninhados**.

Para trocar dois valores de lugar, use uma variável auxiliar, como quem troca o conteúdo de
dois copos usando um terceiro copo vazio:

```js
let copoA = "suco";
let copoB = "água";

let copoVazio = copoA; // O suco vai para o copo vazio
copoA = copoB; // A água vai para o copo A
copoB = copoVazio; // O suco vai para o copo B

console.log(copoA, copoB); // Retorna: água suco
```

> [!WARNING]
> Sempre que trocar duas pontuações de lugar, troque também os **nomes** nos mesmos índices.
> Senão, os pontos ficam ordenados, mas cada um vai parar ao lado do jogador errado.
