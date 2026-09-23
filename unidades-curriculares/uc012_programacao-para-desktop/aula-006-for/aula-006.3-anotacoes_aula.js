// for (let contador = 10; contador > 0; contador--) {
//   if (contador === 10) {
//     console.log("PREPARAR PARA O LANÇAMENTO");
//   }

//   if (contador === 5) {
//     console.log("TA NA METADE!!");
//   }

//   console.log(contador);

//   if (contador === 1) {
//     console.log("DECOLAR!");
//   }
// }

// const numero = 8;
// for (let i = 1; i <= 10; i++) {
//   const resultado = i * numero;
//   console.log(`${numero} x ${i} = ${resultado}`);
// }

// // console.log("fora do for: ", resultado);

// for (let i = 0; i <= 10; i += 4) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i -= 2) {
//   console.log(i);
// }

// 7 lanches 18,50
const valorLanche = 18.5;
let acumulador = 0;

for (let venda = 1; venda <= 7; venda++) {
  acumulador += valorLanche;
  console.log(`Venda ${venda} > total parcial R$${acumulador}`);
  if (venda === 7) {
    console.log(`Total do Dia: R$${acumulador}`);
  }
}
// Pablo eduardo, caua, dia 16
