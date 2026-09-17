//Você foi contratado para criar a função de checkout de um e-commerce. Crie uma função chamada calcularDesconto que receba dois parâmetros: precoOriginal e cupom.
// - Se o cupom for estritamente igual a "PROMO20", aplique 20% de desconto.
// - Se o cupom for estritamente igual a "BLACKFRIDAY", aplique 50% de desconto.
// - Se não for nenhum dos dois (ou for vazio), não dê desconto nenhum.
//  A função deve usar o return para devolver o preço final atualizado. Teste a função com diferentes cupons e preços!
function calcularDesconto(precoOriginal, cupom) {
  if (cupom === "PROMO20") {
    // Calcula 20% do preço e subtrai do original
    let desconto = precoOriginal * 0.2;
    return precoOriginal - desconto;
  } else if (cupom === "BLACKFRIDAY") {
    // Calcula 50% do preço
    let desconto = precoOriginal * 0.5;
    return precoOriginal - desconto;
  } else {
    // Se o cupom for inválido, retorna o preço normal
    return precoOriginal;
  }
}

// Testando os cenários no console:
let precoTenis = 200;

console.log("Com PROMO20:", calcularDesconto(precoTenis, "PROMO20"));
// Esperado: 160

console.log("Com BLACKFRIDAY:", calcularDesconto(precoTenis, "BLACKFRIDAY"));
// Esperado: 100

console.log("Cupom inválido:", calcularDesconto(precoTenis, "CUPOMERRADO"));
// Esperado: 200
