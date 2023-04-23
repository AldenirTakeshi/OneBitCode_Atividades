alert("Procurando Pálindromo!");
let palavra = prompt("Informe a palavra:");
let PalavraReversa = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  PalavraReversa += palavra[i];
}

if (palavra === PalavraReversa) {
  alert("Esta palavra é um pálindromio!");
} else {
  alert(`Está palavra não é um pálindromo! pois invertida fica ${PalavraReversa}`);
}
