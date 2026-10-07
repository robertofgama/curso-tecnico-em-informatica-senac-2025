// Solução - Exercício 1

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

// Solução - Exercício 2

let perfil = "gerente";

switch (perfil) {
  case "admin":
    console.log("Acesso total liberado.");
    break;
  case "gerente":
    console.log("Acesso a relatórios liberado.");
    break;
  case "usuario":
    console.log("Acesso restrito.");
    break;
  default:
    console.log("Perfil não reconhecido.");
}
//
// Solução - Exercício 3
let tecla = "F1";

switch (tecla) {
  case "F1":
    console.log("Abrindo o manual de ajuda do sistema.");
    break;
  case "F5":
    console.log("Recarregando os dados da tela.");
    break;
  case "F12":
    console.log("Abrindo ferramentas de desenvolvedor.");
    break;
  default:
    console.log("Nenhum atalho configurado.");
}

// Solução - Exercício 4
let codigo = 5; // number

switch (codigo) {
  case "5": // string
    console.log("O sistema leu como Texto (String)!");
    break;
  case 5: // number
    console.log("O sistema leu como Número!"); // Entrará aqui, pois usa comparação estrita ===
    break;
  default:
    console.log("Caiu no default.");
}

// Solução - Exercício 5
let plano = "Básico";

switch (plano) {
  // Empilhando cases propositalmente sem o break
  case "Básico":
  case "Padrão":
    console.log("Qualidade máxima: 1080p");
    break;
  case "Premium":
    console.log("Qualidade máxima: 4K");
    break;
  default:
    console.log("Plano inválido");
}

// Solução - Exercício 6
let valor1 = 10;
let valor2 = 5;
let operacao = "+";

switch (operacao) {
  case "+":
    console.log("Resultado:", valor1 + valor2);
    break;
  case "-":
    console.log("Resultado:", valor1 - valor2);
    break;
  case "*":
    console.log("Resultado:", valor1 * valor2);
    break;
  case "/":
    console.log("Resultado:", valor1 / valor2);
    break;
  default:
    console.log("Operação inválida!");
}
