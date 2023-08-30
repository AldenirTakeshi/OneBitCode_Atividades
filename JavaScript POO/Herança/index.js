class Property {
  constructor(area, price) {
    (this.area = area), (this.price = price);
  }

  getPriceSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

class Apartment extends Property {
  constructor(number, area, price) {
    // this.number = number
    // this.area = area
    // this.price = price
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const land = new Property(200, 50000);
const someHouse = new House(300, 100000);
const apt = new Apartment(201, 100, 160000);

console.log(land);
console.log(someHouse.getPriceSquareMeter());
console.log(someHouse instanceof Property);
console.log(apt);
console.log(apt.getFloor());
