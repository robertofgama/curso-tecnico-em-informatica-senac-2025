# Curso Técnico em Informática - Senac (2026)

Repositório oficial de apoio às aulas do **Curso Técnico em Informática do Senac — turma 2026**.

Aqui ficam disponíveis, para consulta e download dos alunos, todos os conteúdos
desenvolvidos em sala: códigos-fonte, exemplos, exercícios, projetos e materiais
complementares de cada unidade curricular.

---

## 📁 Organização do repositório

O material das aulas fica na pasta [unidades-curriculares/](unidades-curriculares/),
com **uma subpasta por matéria (unidade curricular)**. Conteúdos que não pertencem a
uma aula específica, como a apresentação da palestra sobre inteligência artificial,
ficam em [extras/](extras/):

```text
senac_curso-tecnico-em-informatica_2026/
├── README.md
├── extras/                              # materiais complementares, como palestras
└── unidades-curriculares/
    └── uc012_programacao-para-desktop/
        ├── README.md                    # cronograma e tópicos da unidade curricular
        ├── aula-003-operadores_aritmeticos/
        ├── aula-004-if_else/
        ├── ...
        ├── aula-010-arrays/
        │   ├── aula-010.1-arrays.md                 # teoria e exercícios
        │   ├── aula-010.2-resolucao_exercicios.js   # resolução dos exercícios
        │   └── aula-010.3-anotacoes_aula.js         # anotações feitas ao vivo em aula
        └── ...
```

O nome da pasta de cada matéria segue o padrão `ucNNN_nome-da-materia`, onde `NNN` é o
número da unidade curricular com três dígitos (a UC 12 vira `uc012`). Dentro dela há
**uma pasta por aula**, com o número e o assunto da aula
(`aula-003-operadores_aritmeticos`, `aula-004-if_else`, ...). Em cada uma, os arquivos
são numerados na ordem em que o conteúdo foi apresentado: o material teórico com os
exercícios em `.md` e as resoluções e anotações de aula em `.js`.

## 📚 Unidades curriculares

| Unidade curricular              | Pasta                                                                                                        | Conteúdo                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| UC12 — Programação para Desktop | [unidades-curriculares/uc012_programacao-para-desktop/](unidades-curriculares/uc012_programacao-para-desktop/) | Códigos e exemplos das aulas |

> A tabela é atualizada conforme novas unidades curriculares forem iniciadas ao
> longo do ano.

## 🚀 Como usar

### Baixar o material

Clone o repositório para ter todo o conteúdo na sua máquina e entre na pasta criada:

```bash
git clone https://github.com/robertofgama/Senac---Curso-T-cnico-em-Inform-tica---2026.git
cd Senac---Curso-T-cnico-em-Inform-tica---2026
```

Não usa Git? Também dá para baixar tudo em `.zip` pelo botão **Code → Download ZIP**
na página do repositório.

### Manter o material atualizado

O repositório recebe conteúdo novo a cada aula. Para atualizar sua cópia local, rode
dentro da pasta do repositório:

```bash
git pull
```

## 💡 Recomendações de estudo

- Acompanhe o código da aula rodando os exemplos na sua própria máquina — ler o
  código não substitui executá-lo.
- Antes de olhar a solução de um exercício, tente resolvê-lo sozinho.
- Faça suas anotações e experimentos em **cópias** dos arquivos. Se você alterar um
  arquivo original e ele for atualizado no repositório, o `git pull` recusa a
  atualização para não apagar o que você mudou, com a mensagem
  `Your local changes to the following files would be overwritten by merge`.

## ❓ Dúvidas e sugestões

Dúvidas sobre o conteúdo devem ser trazidas em aula. Se encontrar algum erro no
material (código que não roda, arquivo faltando, link quebrado), avise o professor
ou abra uma _issue_ no repositório.

## 📄 Uso do material

Material didático produzido para uso dos alunos do Curso Técnico em Informática do
Senac. O uso é livre para fins de estudo.

---

**Professor:** [Roberto Gama](https://robertogama.site/)
