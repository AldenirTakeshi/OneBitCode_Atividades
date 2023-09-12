function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o!"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Velocidade atual é igual à desejada");
    }
}
var spaceship = prompt("Insira o nome da nave a ser enviada");
var spaceshipCaptain = prompt("Insira o nome do capit\u00E3o da nave");
var currentShip = sendSpaceship(spaceship, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade que deseja acelerar"));
var curentACc = accelerate(speed, currentShip);
