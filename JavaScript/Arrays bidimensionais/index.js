const arr = [
  "1° Nível",
  ["2° Nível", 42, true],
  [
    ["3° Nível, 1° item", "Olá, mundo!"],
    ["3° Nível, 2° item", "Oi, mundo!"],
  ],
  [],
];

// const arr = [
//   ["1° Nível", "2° Nível", "3° Nível"],
//   ["1° Nível", "2° Nível", "3° Nível"],
//   ["1° Nível", "2° Nível", "3° Nível"],
// ];

console.log(arr);
console.log(arr[0]);
console.log(arr[1][0]);

const matriz = [
  ["l1,c1", "l1,c2", "l1,c3", "l1,c4"],
  ["l2,c1", "l2,c2", "l2,c3", "l2,c4"],
  ["l3,c1", "l3,c2", "l3,c3", "l3,c4"],
];

// console.table(matriz);
// matriz[0].push("Nova Coluna");
// console.table(matriz);

// Iterar sobra um array bidimensional
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    let elemento = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") valor: " + elemento);
  }
}
