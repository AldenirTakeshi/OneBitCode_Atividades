let atacante = prompt("Informe o nome do atacante:");
let poderAtaque = Number(prompt(`Qual o poder de ataque de ${atacante}?`));

let defensor = prompt("Informe o nome do defensor:");
let pontosVida = Number(prompt(`Informe a quantidade de pontos de vida do ${defensor}:`));
let poderDefesa = Number(prompt("Qual sua quantidade de defesa?"));
let escudo = prompt(`${defensor} possui escudo? (sim/não)`);

let danoCausado = 0;

if (poderAtaque > poderDefesa && escudo === "não") {
  danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && escudo === "sim") {
  danoCausado = poderAtaque - poderDefesa / 2;
} else if (poderAtaque < poderDefesa) {
  danoCausado = 0;
}

alert(
  `${atacante} com poder de ataque de ${poderAtaque}
 ${defensor} com o  total de ${pontosVida} de vida
 Escudo: ${escudo}
 Vida atual de ${defensor} após sofre o ataque de ${atacante}
 é de ${pontosVida - danoCausado} 
 Dano causado por ${atacante} foi de ${danoCausado}
 `
);
