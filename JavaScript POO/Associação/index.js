const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de Setembro", 99, "Centro", "São Paulo", "RJ");
const john = new Person("Joao", addr);

console.log(john);
console.log(john.address.fullAddress());
