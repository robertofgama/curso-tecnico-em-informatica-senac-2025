### Controle de Fluxo com `Switch`

#### 1. Abertura: O Problema dos "Múltiplos Ifs" (15 min)

Comece relembrando a estrutura `if / else if / else`. Mostre um exemplo no quadro ou projetor de um sistema de menu onde o usuário digita uma opção de 1 a 4.

- **A provocação:** Mostre como o código fica repetitivo e visualmente poluído quando escrevemos `if (opcao === 1) ... else if (opcao === 2) ... else if (opcao === 3)`.
- **O conceito:** Explique que o `switch` (chaveador) foi criado exatamente para esses casos: quando queremos comparar **uma única variável** contra **vários valores exatos diferentes**.

#### 2. A Estrutura e Sintaxe do `Switch` (20 min)

Apresente a anatomia do `switch` fazendo uma analogia com os trilhos de um trem, onde a variável escolhe em qual "estação" (caso) vai parar.

**Exemplo no Projetor:**

JavaScript

```
let opcaoMenu = 2;

switch (opcaoMenu) {
  case 1:
    console.log("Abrindo: Novo Arquivo");
    break;
  case 2:
    console.log("Abrindo: Salvar Arquivo");
    break;
  case 3:
    console.log("Saindo do sistema...");
    break;
  default:
    console.log("Opção inválida! Digite um número de 1 a 3.");
}
```

- **Pontos de atenção para a turma:**
  - O `switch` faz uma **comparação estrita** (equivalente a usar `===`). Ou seja, se a variável for `"2"` (texto) e o caso for `2` (número), ele não vai entrar.
  - O papel do `default`: Funciona exatamente como o `else`. É a rota de fuga caso nenhum dos valores acima seja correspondido.

#### 3. A Armadilha Clássica: O Esquecimento do `break` (15 min)

Este é o erro número um de iniciantes. Mostre o que acontece se apagarmos os `break`s do código anterior.

- **Efeito Cascata (Fall-through):** Explique que, ao encontrar o caso correto, o JavaScript entra e **continua executando todos os casos de baixo** se não encontrar um aviso de parada (o `break`).
- **O lado bom do Efeito Cascata:** Mostre que podemos usar isso a nosso favor quando múltiplos casos devem fazer a mesma coisa (veremos no Exercício 5).

### 6 Exercícios Práticos para a Turma (com Gabarito)

Dê um tempo para a turma tentar resolver. Você pode contextualizar os exercícios dentro da ideia de softwares de desktop.

**Exercício 1: Dias da Semana** Crie uma variável `diaSemana` recebendo um número de 1 a 7. Use o `switch` para imprimir no console o nome do dia correspondente (Ex: 1 = "Domingo", 2 = "Segunda", etc.). Se o número não for de 1 a 7, use o `default` para avisar: "Dia inválido".

**Exercício 2: Sistema de Cargos e Permissões** Em um software de gestão, precisamos definir o nível de acesso do usuário. Crie uma variável `perfil` com o valor `"gerente"`. Use o `switch` para verificar a variável:

- Se for `"admin"`, imprima: "Acesso total liberado."
- Se for `"gerente"`, imprima: "Acesso a relatórios liberado."
- Se for `"usuario"`, imprima: "Acesso restrito."
- Se não for nenhum, imprima: "Perfil não reconhecido."

**Exercício 3: Mapeamento de Teclas (Simulando Desktop)** Crie uma variável `tecla` com o valor `"F1"`. Crie um `switch` que simule a ação do sistema:

- `"F1"`: "Abrindo o manual de ajuda do sistema."
- `"F5"`: "Recarregando os dados da tela."
- `"F12"`: "Abrindo ferramentas de desenvolvedor."
- Para qualquer outra tecla: "Nenhum atalho configurado."

**Exercício 4: O Tipo de Dado (A Pegadinha)** Crie uma variável `codigo` e atribua a ela o número `5`. Crie um `switch` com três casos:

- `case "5":` (como String)
- `case 5:` (como Número)
- `default:` Dentro de cada caso, avise se ele entrou como texto, como número ou no default. Explique aos colegas por que ele entrou no caso específico (lembrando da igualdade estrita).

**Exercício 5: Empilhando Casos (O uso inteligente do Fall-through)** Um aplicativo de streaming classifica seus planos. Crie uma variável `plano` (ex: "Básico", "Padrão" ou "Premium"). Se o plano for "Básico" ou "Padrão", o sistema deve imprimir: "Qualidade máxima: 1080p". Se for "Premium", deve imprimir: "Qualidade máxima: 4K". _Desafio: Resolva isso usando o `switch`, mas escrevendo o comando `console.log("Qualidade máxima: 1080p")` apenas UMA vez, empilhando dois `case`s seguidos._

**Exercício 6: A Calculadora Básica** Crie três variáveis: `valor1 = 10`, `valor2 = 5` e `operacao = "+"`. Crie um `switch` que olhe para a variável `operacao`. Baseado nela, crie os casos `"+"`, `"-"`, `"*"` e `"/"`. Dentro de cada caso, faça o cálculo matemático com `valor1` e `valor2` e exiba o resultado.

**Exercício 7: O Gerenciador de Arquivos do Sistema (Dificuldade Intermediária)**
Em um sistema operacional desktop, quando o usuário clica duas vezes em um arquivo, o sistema lê a extensão e decide qual programa acionar.
Crie uma variável `extensao` recebendo o valor ".png". Construa um switch que agrupe múltiplos casos para entregar o mesmo resultado (usando o Efeito Cascata/Fall-through de forma estratégica):

- Se for ".txt" ou ".md", imprima: "Executando: Editor de Texto".
- Se for ".jpg", ".png" ou ".gif", imprima: "Executando: Visualizador de Imagens".
- Se for ".mp4" ou ".mkv", imprima: "Executando: Reprodutor de Vídeo".
- Para qualquer outra extensão, exiba: "Erro: Nenhum aplicativo padrão associado a este formato."
- Para qualquer outra extensão, exiba: "Erro: Nenhum aplicativo padrão associado a este formato."

**Exercício 8: O Terminal Administrativo (Dificuldade Avançada)**
Um software possui comandos de terminal que exigem privilégios diferentes. Crie duas variáveis: comando = "formatar" e privilegio = "usuario". Crie um switch avaliando o comando:

- Casos "abrir" e "salvar": Imprima diretamente "Comando liberado. Executando operação...".
- Caso "formatar": Aqui mora o desafio. Dentro deste caso, crie uma estrutura if/else. Se o privilegio for estritamente igual a "admin", imprima: "Atenção: Formatando o disco rígido principal!".
- Senão, imprima: "Acesso Negado: Apenas administradores podem executar esta ação."Caso padrão: Imprima "Comando inexistente."- Senão, imprima: "Acesso Negado: Apenas administradores podem executar esta ação."Caso padrão: Imprima "Comando inexistente."
