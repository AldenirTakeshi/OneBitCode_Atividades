let veiculo1 = prompt("Informe o nome do veículo");
let velocidade1 = Number(prompt(`Qual a velociade do ${veiculo1}`));

let veiculo2 = prompt("Informe o nome do veículo");
let velocidade2 = Number(prompt(`Qual a velociade do ${veiculo2}`));

if (velocidade1 > velocidade2) {
  alert(`Veículo ${veiculo1} é mais rápido que o Veículo ${veiculo2}`);
} else if (velocidade2 > velocidade1) {
  alert(`Veículo ${veiculo2} é mais rápido que o Veículo ${veiculo1}`);
} else if (velocidade1 === velocidade2) {
  alert(`Veículo ${veiculo2} é o Veículo ${veiculo1} Estão na mesma velocidade!`);
}
