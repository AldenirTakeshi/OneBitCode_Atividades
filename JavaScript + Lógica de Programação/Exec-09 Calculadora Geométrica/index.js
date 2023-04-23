function areaTriangulo() {
  let base = prompt("Informe a base do triângulo:");
  let altura = prompt("Informe a altura do triângulo:");
  return (base * altura) / 2;
}

function areaRetangulo() {
  let base = prompt("Informe a base do triângulo:");
  let altura = prompt("Informe a altura do triângulo:");
  return base * altura;
}

function areaQuadrado() {
  let lado = prompt("Informe o lado do quadrado:");
  return lado * lado;
}

function areaTrapezio() {
  let baseMaior = Number(prompt("Informe a base Maior do Trapézio"));
  let baseMenor = Number(prompt("Informe a base Menor do Trapézio"));
  let altura = prompt("Informe a altura do Trapézio");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  let raio = prompt("Informe o raio do circulo:");
  let pi = 3.14;
  return pi * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Escolha uma das opções Abaixo:\n" +
      "\n1-Calcular a area do Triângulo " +
      "\n2-Calcular a area do Retângulo " +
      "\n3-Calcular a area do Quadrado " +
      "\n4-Calcular a area do Trapézio " +
      "\n5-Calcular a area do Círculo " +
      "\n6-Sair "
  );
}

function executarOpção() {
  let opcao = "";
  let resultado;

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida");
        break;
    }

    if (resultado) {
      alert("Resultado é : " + resultado);
    }
  } while (opcao !== "6");
}

exibirMenu();
