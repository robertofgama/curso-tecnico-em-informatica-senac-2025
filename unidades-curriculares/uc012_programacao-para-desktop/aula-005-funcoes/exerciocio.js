function calcularDesconto(precoOriginal, cupom) {
  if (cupom === "PROMO20") {
    return precoOriginal * 0.2;
  }

  if (cupom === "BLACKFRIDAY") {
    return precoOriginal * 0.5;
  }

  return precoOriginal;
}

function avaliarAluno(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(avaliarAluno(3, 4));
