function areaTriangulo() {
  base = prompt("Informe a base do triângulo:");
  altura = prompt("Informe a base do altura:");
  resultado = (base * altura) / 2;
  alert("A area do triângulo é: " + resultado);
  return resultado;
}

function AreaRetangulo() {
  let base = prompt("Informe a base do retângulo:");
  let altura = prompt("Informe a Altura do retângulo:");
  let resultado = base * altura;
  alert("Resultado é igual a : " + resultado);
  return resultado;
}

function AreaQuadrado() {
  let lado = prompt("Informe o lado do quadrado: ");
}

function AreaTrapezio() {
  let baseMaior = prompt("Informe a Base Maior do Trapézio");
  let baseMenor = prompt("Informe a Base Menor do Trapézio");
  let altura = prompt("Informe a Altura do Trapézio");
}

function AreaCirculo() {
  let raio = prompt("Informe o raio do circulo: ");
  let pi = 3.14;
}
do {
  opcao = prompt(
    "Qual das opções abaixo deseja calcular?\n" +
      "\n1-Calcular a area do triângulo" +
      "\n2-Calcular a area do triângulo" +
      "\n3-Calcular a area do triângulo" +
      "\n4-Calcular a area do triângulo" +
      "\n5-Calcular a area do triângulo" +
      "\n6-Sair"
  );

  switch (opcao) {
    case "1":
      areaTriangulo();
      break;
    case "2":
      AreaRetangulo();
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      break;

    default:
      alert("Opção Inválida!");
      break;
  }
} while (opcao != "6");
