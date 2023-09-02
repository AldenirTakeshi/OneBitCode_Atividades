class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; // 10099
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log(`Username must be of type string`);
    }
  }

  getAmount() {
    return this.#amount / 100;
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Jonh Doe";
myWallet.username = 23;

console.log(myWallet.username);
