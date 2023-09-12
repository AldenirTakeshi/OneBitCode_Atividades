function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };

  alert(
    `A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão!`
  );

  return spaceship;
}

function accelerate(targetSpeed: number, spaceship: { name: string; speed: number }) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade ${spaceship.name} para ${targetSpeed}...`);
  } else if (spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`);
  } else {
    alert("Velocidade atual é igual à desejada");
  }
}
const spaceship = prompt(`Insira o nome da nave a ser enviada`);
const spaceshipCaptain = prompt(`Insira o nome do capitão da nave`);

const currentShip = sendSpaceship(spaceship, spaceshipCaptain);

const speed = Number(prompt(`Insira a velocidade que deseja acelerar`));

const curentACc = accelerate(speed, currentShip);
