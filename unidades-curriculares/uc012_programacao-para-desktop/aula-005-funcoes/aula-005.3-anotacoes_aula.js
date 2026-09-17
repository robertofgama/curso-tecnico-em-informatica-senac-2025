const numeroA = 5;
const numeroB = 6;
const numeroC = 10;

function somar(numeroA, numeroB) {
  const resultado = numeroA + numeroB + numeroC;
  return console.log(`A soma é: ${resultado}`);
}

function subtrair(numeroA, numeroB) {
  const resultado = numeroA - numeroB - numeroC;
  return console.log(`A subtração é: ${resultado}`);
}

// somar(3, 8);
// somar(5, 10);
// somar(numeroA, numeroB);

// subtrair(5, 10);

function calculo(operacao, numeroA, numeroB) {
  if (operacao === "soma") {
    return somar(numeroA, numeroB);
  }
  if (operacao === "subtrair") {
    return subtrair(numeroA, numeroB);
  } else {
    return console.log("Operação não reconhecida");
  }
}

calculo("soma", 5, 9);
calculo("subtrair", 5, 9);

const minhaFuncao = (numberA, numberB) => numberA + numberB;

minhaFuncao(4, 6);
