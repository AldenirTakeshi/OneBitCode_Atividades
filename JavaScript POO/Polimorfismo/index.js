class Vehicle {
  move() {
    console.log("moving");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O Navio está se movendo!");
  }
}
class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave esta voando a ${speed}km/h!`);
  }
}

const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Aircraft();

delorean.move();
blackPearl.move();
epoch.move(12);

function start(vehicle) {
  console.log("Iniciando um veiculo");
  vehicle.move();
}
