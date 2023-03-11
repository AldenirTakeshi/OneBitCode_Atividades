do {
  opcao = prompt(
    `Escoha uma das opções abaixo:
   1- Opção 1
   2- Opção 2
   3- Opção 3
   4- Opção 4
   5- Encerrar`
  );

  switch (opcao) {
    case "1":
      alert("Opção 1 foi selecionada!");
      break;
    case "2":
      alert("Opção 2 foi selecionada!");
      break;
    case "3":
      alert("Opção 3 foi selecionada!");
      break;
    case "4":
      alert("Opção 4 foi selecionada!");
      break;
    case "5":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao != "5");
