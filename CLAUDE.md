# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Natureza do repositório

Repositório de **material didático**, não de software: conteúdos das aulas do Curso Técnico em
Informática do Senac (turma 2026), ministradas por Roberto Gama. Os alunos clonam o repositório e
rodam `git pull` a cada aula, então tudo que é commitado é material publicado — deve estar em
**Português do Brasil**, didático e com exemplos que rodam sem ajustes.

Consequências práticas:

- Não existe `package.json`, build, testes, linter ou CI. Não invente nenhum deles.
- Cada `.js` é um script autônomo executado direto no Node (v25 disponível):
  `node unidades-curriculares/uc012_programacao-para-desktop/aula-005/aula-005.2-funcoes-resolucao-exercicios.js`
- A saída dos exemplos é sempre `console.log` — é assim que o aluno "vê" o resultado em aula.

## Estrutura e nomenclatura

```text
unidades-curriculares/
└── ucNNN_nome-da-materia/          # ex.: uc012_programacao-para-desktop
    ├── README.md                   # cronograma (semanas S01..S07 + datas) e tópicos da UC
    └── aula-NNN/                   # uma pasta por aula, numerada com 3 dígitos
        ├── aula-NNN.1-assunto.md   # teoria + exercícios
        ├── aula-NNN.2-...-resolucao_exercicios.js
        └── aula-NNN.3-anotacoes_aula.js   # rascunho feito ao vivo em aula
```

O sufixo `.1`, `.2`, `.3` indica a ordem dos arquivos **dentro** da aula, seguido de um slug do
assunto em `snake_case` ou `kebab-case`. A numeração da aula (`aula-004`) e a data no título do
markdown têm que bater com o cronograma do `README.md` da UC.

## Anatomia de uma aula

Todo assunto novo entra como um par teoria/prática. O markdown segue este formato:

```markdown
# Aula NNN (DD/MM/AAAA) - Assunto

## Tópicos            <!-- lista dos pontos cobertos (nem toda aula tem) -->
## <seções de teoria> <!-- explicação curta + exemplo em bloco js comentado com "// Retorna: X" -->
## Exercícios
### Exercício N: Título   <!-- enunciado narrativo, contextualizado (e-commerce, radar, notas) -->
```

Alertas usam callouts do GitHub (`> [!WARNING]`). A resolução em `.js` **repete o enunciado do
exercício em comentários** logo acima do código, e o código comenta o resultado esperado
(`// Esperado: 160`).

## Convenções de código dos exemplos

- Identificadores em português (`nota1`, `media`, `calcularDesconto`, `precoOriginal`).
- Formatação estilo Prettier: aspas duplas, ponto-e-vírgula, indentação de 2 espaços.
- `console.log` com rótulo descritivo: `console.log("Média do Aluno: ", media);`
- Use apenas construções já ensinadas até aquela aula (a ordem está em "Tópicos" no README da UC:
  variáveis → operadores → if/else → funções → for → while → do/while → arrays). Não antecipe
  sintaxe que a turma ainda não viu.
- Arquivos `anotacoes_aula` acumulam trechos comentados de tentativas feitas ao vivo; é esperado
  que fiquem majoritariamente comentados — não "limpe" isso.

## Commits

**Nunca faça commit automaticamente.** Só rode `git add` / `git commit` quando for pedido
expressamente — terminar uma alteração não autoriza commitá-la. O mesmo vale, com mais razão,
para `git push`. Ao concluir uma mudança, apenas relate o que foi alterado e deixe o commit a
cargo do professor.

Quando o commit for solicitado, use mensagens em português, no padrão emoji + Conventional
Commits **sem espaço** entre eles, com a data da aula no assunto:

```text
📚docs: aula 004 - 2026-09-08
🐛fix(aula-003): corrigido erro no titulo.
```

O escopo, quando usado, é a pasta da aula (`aula-003`).

## Pontos de atenção

- O `README.md` da raiz é a porta de entrada do aluno e descreve a organização das pastas. Ao criar
  uma unidade curricular nova ou mudar a estrutura, atualize lá o bloco de estrutura **e** a tabela
  de unidades curriculares, além do `README.md` da própria UC (cronograma e tópicos).
- `faltas.md` na raiz é controle pessoal do professor (chamada por semana/data), não material do
  aluno.
- A pasta é sincronizada por Syncthing; `.stfolder/` e afins já estão no `.gitignore`.
