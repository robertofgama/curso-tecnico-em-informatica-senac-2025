Diferente do `while` tradicional, que pode nunca rodar se a condição inicial já for falsa, o `do/while` age primeiro e verifica depois. Ele é ideal para aplicações de linha de comando (CLI) construídas para o terminal, como menus interativos, onde as opções precisam ser renderizadas na tela do usuário antes de qualquer tomada de decisão.

**Sintaxe Básica e Exemplo**

JavaScript

```
// Utilizando a declaração moderna de variáveis
let tentativas = 0;

do {
  console.log("Processando tentativa número:", tentativas);
  tentativas++;
} while (tentativas < 3);
```

**Ponto de Atenção para a Turma:**

Demonstre o que acontece se a variável inicializar com uma condição já inválida. Se `let tentativas = 5`, o bloco interno será executado uma única vez, imprimindo "Processando tentativa número: 5". Somente depois ele chegará no `while (5 < 3)`, que retornará `false` e interromperá a repetição.

**Exercícios Práticos**

Estes exercícios reforçam o uso de variáveis modernas (`let` e `const`) e a construção lógica no ambiente do terminal via Node.js, abolindo a dependência do navegador.   

1. **O Contador Crescente** Crie uma variável `let contador = 1`. Utilize a estrutura `do/while` para imprimir sequencialmente no terminal todos os números de 1 até 15.   

2. **A Contagem Regressiva**

   Crie uma variável com o valor `10`. Faça um loop `do/while` que imprima o número atual e subtraia 1 a cada repetição. Quando o loop for encerrado, imprima a palavra "Lançamento!" no terminal.

3. **O Filtro de Números Pares** Inicie uma variável de controle em `0`. Usando `do/while` em conjunto com a estrutura de decisão `if` e o operador matemático de módulo (`%`), exiba no terminal apenas os números pares compreendidos entre 0 e 20.   

4. **O Somatório Acumulado** Crie duas variáveis: `numero = 1` e `somaTotal = 0`. Use o `do/while` para acumular a soma de todos os números de 1 a 50 dentro da variável `somaTotal`. O comando de exibição (`console.log`) deve ficar fora do loop, imprimindo apenas o resultado matemático final.

5. **A Tabuada Dinâmica**

   Defina uma variável `multiplicador = 7` e um `iterador = 1`. Construa um `do/while` que imprima a tabuada do número 7 (exemplo: "7 x 1 = 7", "7 x 2 = 14") incrementando o iterador a cada volta, até que ele atinja o limite de 10.

6. **O Simulador de Menu CLI** Crie uma variável `opcaoSelecionada = 0`. Construa um bloco `do/while` para simular um menu de terminal. Dentro do bloco `do`, imprima as opções: "1. Novo Arquivo | 2. Editar | 3. Sair". Em seguida, reatribua o valor da variável para `3` (simulando a escolha do usuário). A condição do `while` deve manter o loop rodando apenas enquanto `opcaoSelecionada !== 3`, exigindo o uso do operador de diferença estrita[cite: 1].