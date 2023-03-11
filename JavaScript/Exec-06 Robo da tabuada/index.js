alert("Olá, Bem vindo ao Robô da tabuada!");
let valorUser = prompt("Informe o numero: ");

let resultado = "";

for (let i = 1; i <= 20; i++) {
  let mult = valorUser * [i];
  resultado += `${[i]}x${valorUser} = ${mult}\n`;
}

alert(`${resultado}`);
