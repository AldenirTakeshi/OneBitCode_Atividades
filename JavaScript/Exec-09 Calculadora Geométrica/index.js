function areaTriangulo() {
  base = prompt("Informe a base do triângulo:");
  altura = prompt("Informe a altura:");
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
  let resultado = lado * lado;
  alert("A area do Quadrado é igual a: " + resultado);
}

function AreaTrapezio() {
  let baseMaior = Number(prompt("Informe a Base Maior do Trapézio"));
  let baseMenor = Number(prompt("Informe a Base Menor do Trapézio"));
  let altura = prompt("Informe a Altura do Trapézio");
  let resultado = ((baseMaior + baseMenor) * altura) / 2;
  alert(resultado);
}

function AreaCirculo() {
  let raio = prompt("Informe o raio do circulo: ");
  let pi = 3.14;
  let resultado = pi * (raio * raio);
  alert(resultado);
}

function exibirMenu() {
  return prompt(
    "Qual das opções abaixo deseja calcular?\n" +
      "\n1-Calcular a area do triângulo" +
      "\n2-Calcular a area do triângulo" +
      "\n3-Calcular a area do triângulo" +
      "\n4-Calcular a area do triângulo" +
      "\n5-Calcular a area do triângulo" +
      "\n6-Sair"
  );
}

function executar() {
  opcao = "";
  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        areaTriangulo();
        break;
      case "2":
        AreaRetangulo();
        break;
      case "3":
        AreaQuadrado();
        break;
      case "4":
        AreaTrapezio();
        break;
      case "5":
        AreaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida!");
        break;
    }
  } while (opcao != "6");
}

exibirMenu();
