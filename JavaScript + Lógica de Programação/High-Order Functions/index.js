// Função que recebe outra função como parâmetro

function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");

  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração");
    return x - y;
  })
);

function exibirElementos(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maça", "Banana", "Laranja", "Limão"];

for (let i = 0; i < lista.length; i++) {
  exibirElementos(lista[i], i, lista);
}

lista.forEach(exibirElementos);
//Para cada item da lista

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
