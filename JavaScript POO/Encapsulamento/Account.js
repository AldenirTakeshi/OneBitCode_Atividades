class Account {
  #email;
  #password;
  #balance;

  constructor(user) {
    this.#email = user.email;
    this.#password = user.password;
    this.#balance = 0;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return `Your balance is ${this.#balance}`;
    } else {
      return "Wrong credentials";
    }
  }

  #authenticate(email, password) {
    return this.#email === email && password === this.#password;
  }
}

const user = {
  email: "John@gmail.com",
  password: "1234",
};

const myAccount = new Account(user);
console.log(myAccount);
console.log(myAccount.getBalance("John@gmail.com", "1234"));
