//Função Recusiva chama ela mesma e cria uma pilha de chamade de funções
// Efeito de recusão
function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

// dividir(256);

// só finaliza a primeira função assim que a de dentro finalizar!!

function dobrar(num) {
  console.log(num);
  dobrar(num * 2);
}

// dobrar(1);

function fatorial(num) {
  console.log("Número : " + num);
  if (num === 0) {
    //Caso base
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * !" + (num - 1));
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(5));
