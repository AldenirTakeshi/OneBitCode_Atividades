let listaCartas = ["1", "2"];
let opcao = "";

do {
  cartasBaralho = "";
  for (let i = 0; i < listaCartas.length; i++) {
    cartasBaralho += i + 1 + "° " + listaCartas[i] + "\n";
  }

  opcao = prompt(
    "Baralho de cartas: " +
      listaCartas.length +
      "\n\n1-Adicionar uma carta\n2-Puxar Carta\n3-Sair"
  );

  switch (opcao) {
    case "1":
      let novaCarta = prompt("Informe qual carta deseja colocar no baralho:");
      listaCartas.push(novaCarta);
      break;
    case "2":
      let cartaPuxada = listaCartas.pop();
      if (!cartaPuxada) {
        alert("Não há cartas para puxar!");
      } else {
        alert("Carta " + cartaPuxada + " foi retirada do baralho!");
      }
      break;
    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção Inválida!");
      break;
  }
} while (opcao !== "3");
