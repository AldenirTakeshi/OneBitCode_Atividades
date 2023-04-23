function calcularMedia(a, b) {
  let = media = a + b / 2;
  console.log(media);
  return media;
}

let resultado = calcularMedia(2, 6);
console.log(resultado);

function criarProduto(nome, preco) {
  let produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

let notebook = criarProduto("Notebook intel core i3 8gb", 2500);

// console.log(notebook);
console.log(criarProduto("Notebook intel core i3 8gb", 2500));

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaRetangular(3, 5));
console.log(areaQuadrada(9));

function ola() {
  let text = "...";
  return text;
  // pos return nao segue mais a função
  text = "Olá mundo";
  console.log(text);
}

console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maioridade(29));
console.log(maioridade(9));
