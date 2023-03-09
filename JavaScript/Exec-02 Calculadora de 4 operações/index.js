alert("Bem vindo á calculadora de 4 operações");

let n1 = Number(prompt("Informe o primeiro numero:"));
let n2 = Number(prompt("Informe o primeiro segundo:"));

let soma = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;

alert(
  `As 4 operações de ${n1} com ${n2} são estas:
${n1} + ${n2} é igual a ${soma}
${n1} - ${n2} é igual a ${sub}
${n1} * ${n2} é igual a ${mult}
${n1} / ${n2} é igual a ${div}
`
);
