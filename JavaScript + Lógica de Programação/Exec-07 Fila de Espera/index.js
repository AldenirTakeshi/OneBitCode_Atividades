let filaEspera = ["Aldenir", "Takeshi"];
let opcao = "";

do {
  let ListaPacientes = "";
  for (let i = 0; i < filaEspera.length; i++) {
    ListaPacientes += i + 1 + "°" + filaEspera[i] + "\n";
    console.log(ListaPacientes);
  }

  opcao = prompt(
    "Pacientes na fila: \n" +
      ListaPacientes +
      "\n" +
      "\n" +
      "1-Novo Paciente\n" +
      "2-Consultar Paciente\n" +
      "3-Sair"
  );

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Informe o nome do paciente");
      filaEspera.push(novoPaciente);
      break;
    case "2":
      let consultado = filaEspera.shift();
      if (consultado) {
        alert(`Paciente ${consultado} foi consultado!`);
      } else {
        alert("Não há pacientes na fila!");
      }
      break;
    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção Inválido...");
      break;
  }
} while (opcao !== "3");

// let fila = [];
// let opcao = "";

// do {
//   let pacientes = "";
//   for (let i = 0; i < fila.length; i++) {
//     pacientes += i + 1 + "°" + fila[i] + "\n";
//   }

//   opcao = prompt(
//     `Olá Seja Bem Vindo!
// Lista de Espera Atual:
// ${pacientes}
// 1-Novo Paciente
// 2-Consultar Paciente
// 3-Sair`
//   );

//   switch (opcao) {
//     case "1":
//       let newPaciente = prompt("Informe o nome do paciente:");
//       fila.push(newPaciente);
//       break;
//     case "2":
//       let removido = fila.shift();
//       alert(`${removido} foi removido da fila!`);
//       break;
//     case "3":
//       alert("Saindo...");
//       break;

//     default:
//       alert("Opção Inválida!");
//       break;
//   }
// } while (opcao !== "3");
