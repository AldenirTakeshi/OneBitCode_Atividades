class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addOnStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const watch = new Product("Relogio de pulso", "...", 80);

watch.addOnStock(99);
const priceWithDiscount = watch.calculateDiscount(15);

console.log(watch);
console.log(priceWithDiscount);
console.log(watch.calculateDiscount(10));
