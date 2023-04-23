let quantidadeDinheiro = Number(prompt("Qual a quantidade inicial de dinheiro?"));
do {
  opcao = prompt(
    `Escolha uma das opções abaixo:
  Quantidade atual: R$${quantidadeDinheiro}
  1-Adicionar dinheiro
  2-Remover dinheiro
  3-Sair`
  );

  switch (opcao) {
    case "1":
      let valorAdd = Number(prompt(`Qual o valor deseja adicionar?`));
      quantidadeDinheiro += valorAdd;
      alert("Valor Adicionado!");
      break;
    case "2":
      let valorRemoved = Number(prompt(`Qual o valor deseja remover?`));
      quantidadeDinheiro -= valorRemoved;
      alert("Valor Removido!");
      break;
    case "3":
      alert(`Saindo...`);
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao != "3");
