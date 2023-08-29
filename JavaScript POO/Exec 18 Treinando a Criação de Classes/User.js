class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.isLoggedIn = false;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      this.isLoggedIn = true;
      console.log(`Usuário ${this.name} fez login com sucesso.`);
    } else {
      console.log("Login falhou. Verifique suas credenciais.");
    }
  }
}

const john = new User("John Doe", "john@gmail.com", "1234");
console.log(john);
john.login("john@gmail.com", "1234");
