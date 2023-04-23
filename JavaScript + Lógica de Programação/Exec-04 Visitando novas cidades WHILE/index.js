let nomeTurista = prompt("Insira seu nome:");
let visita = prompt("Já visitou alguma cidade?(sim/não)");
let TotalCidades = 0;
let nameCity = "";

while (visita === "sim") {
  let cidadeVisitada = prompt("Qual o nome da cidade?");
  TotalCidades++;
  nameCity += `- ${cidadeVisitada}\n`;
  visita = prompt("Já visitou outra cidade?(sim/não)");
}

alert(`${nomeTurista} visitou um Total de ${TotalCidades} cidades
${nameCity}`);
