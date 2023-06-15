const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];

townsClone.push("Aldebaran");
console.log({ towns, townsClone, townsCopy });

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Teste";

console.log({ townsObj });
console.log({ townsObjClone });
