let imoveis = [];
let opcao = "";
do {
  opcao = prompt(
    "Quantidade de imóveis cadastrados: " +
      imoveis.length +
      "\n\nEscolha uma das opções abaixo: " +
      "\n" +
      "1- Salvar um imóvel\n" +
      "2-Mostrar Todos os imóveis salvos\n" +
      "3-Sair"
  );

  switch (opcao) {
    case "1":
      let imovel = {};
      imovel.proprietario = prompt("Informe o nome do proprietário:");
      imovel.quartos = prompt("Quantos quartos?");
      imovel.banheiros = prompt("Quantos banheiros?");
      imovel.garagem = prompt("Possui garagem? (Sim/Não)");
      imoveis.push(imovel);

      confirm(
        "Deseja Salvar o imóvel com as seguintes informações?\n\n" +
          "Proprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirm) {
        alert("Imóvel salvo com sucesso!");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel: " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nGaragem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
