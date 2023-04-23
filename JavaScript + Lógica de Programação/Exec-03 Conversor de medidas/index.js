let valorUser = Number(prompt("Informe o valor em metros(m) para convertelo:"));
let medidaConverter = prompt(
  `Para qual medida deseja converter?
a) milímetro (mm)
b) centímetro (cm)
c) decímetro (dm)
d) decâmetro (dam)
e) hectônico (hm)
f) quilômetro (km)
`
);
switch (medidaConverter) {
  case "a":
    alert(`Resultado: de ${valorUser}m = ${valorUser * 1000}mm`);
    break;
  case "b":
    alert(`Resultado: de ${valorUser}m = ${valorUser * 100}cm`);
    break;
  case "c":
    alert(`Resultado: de ${valorUser}m = ${valorUser * 10}dm`);
    break;
  case "d":
    alert(`Resultado: de ${valorUser}m = ${valorUser / 10}dam`);
    break;
  case "e":
    alert(`Resultado: de ${valorUser}m = ${valorUser / 100}hm`);
    break;
  case "f":
    alert(`Resultado: de ${valorUser}m = ${valorUser / 1000}km`);
    break;
  default:
    alert("Opção inválida!");
    break;
}
