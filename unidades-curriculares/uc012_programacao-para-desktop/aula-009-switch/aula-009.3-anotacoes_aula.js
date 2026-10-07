// **Exercício 1: Dias da Semana** Crie uma variável `diaSemana` recebendo um número de 1 a 7.
// Use o `switch` para imprimir no console o nome do dia correspondente (Ex: 1 = "Domingo", 2 = "Segunda", etc.).
// Se o número não for de 1 a 7, use o `default` para avisar: "Dia inválido".
// let diaDaSemana = 3;

// switch (diaDaSemana) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda-Feira");
//     break;

//   default:
//     break;
// }

// EXERCICIO 02
// const perfil = "usuarioddd";

// switch (perfil) {
//   case "admin":
//     console.log("Acesso Total Liberado");
//     break;
//   case "gerente":
//     console.log("Acesso a relatórios liberado.");
//     break;
//   case "usuario":
//     console.log("Acesso restrito");
//     break;

//   default:
//     console.log("Perfil nao reconhecido");

//     break;
// }

// EXERCICIO 03
// const tecla = "F12";

// switch (tecla) {
//   case "F1":
//     console.log("Abrindo o manual de ajuda do sistema.");
//     break;

//   case "F5":
//     console.log("Recarregando os dados da tela.");
//     break;

//   case "F12":
//     console.log("Abrindo ferramentas de desenvolvedor.");
//     break;

//   default:
//     console.log("Nenhum atalho configurado.");
//     break;
// }

// EXERCICIO 04
const codigo = "ee";

switch (codigo) {
  case "5":
    console.log("como string");
    break;
  case 5:
    console.log("como número");
    break;

  default:
    console.log("tipo não reconhecido");

    break;
}
