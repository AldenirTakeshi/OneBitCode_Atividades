let vagasEmprego = [];

function listarVagas() {
  const vagasEmTexto = vagasEmprego.reduce((textoAcumulado, vaga, indice) => {
    //1.nome, (x candidatos)
    textoAcumulado += indice + ". ";
    textoAcumulado += vaga.nome;
    textoAcumulado += "(" + vaga.candidatos.length + " candidatos )\n";
    return textoAcumulado;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe o nome para a vaga:");
  const descricao = prompt("Informa a descrição da vaga:");
  const dataLimite = prompt("Informa data limite (dd/mm/aaaa) para a vaga:");

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagasEmprego.push(novaVaga);
    alert("Vaga Criada!");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:");

  if (indice >= vagasEmprego.length || indice < 0) {
    alert("Indice invalido!");
    return;
  }

  const vaga = vagasEmprego[indice];
  const candidatosEmTexto = vaga.candidatos.reduce(function (textoAcumulado, candidato) {
    return textoAcumulado + "\n - " + candidato;
  }, "");
  alert(
    "Vaga n° " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos na vaga: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a):");
  const indice = prompt("Informe o indide da vaga que deseja se inscrever:");
  const vaga = vagasEmprego[indice];

  const confirmacao = confirm(
    "Deseja increver o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Incrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exluir:");
  const vaga = vagasEmprego[indice];

  const confirmacao = confirm(
    "Deseja realmente excluir a vaga " +
      indice +
      "?" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagasEmprego.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego\n\n" +
      "Escolha uma das opções abaixo:\n" +
      "1-Listar vagas disponíveis\n" +
      "2-Criar uma nova vaga\n" +
      "3-Visualizar uma vagas\n" +
      "4-Inscrever um cadidato em uma vaga\n" +
      "5-Excluir uma vaga\n" +
      "6-Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";
  do {
    let opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida!");
        break;
    }
  } while (opcao !== "6");
}

executar();
