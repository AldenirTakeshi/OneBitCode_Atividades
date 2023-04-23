function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(2);
// dobro(5);

// dobro();

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

// dizerOla("Isaac");
// dizerOla();

function soma(a, b) {
  alert("Resultado da soma é " + (a + b) + "!");
}

// soma(2, 3);
// soma(3, 8);

function criarUsuario(nome, email, senha, tipo = "adm") {
  let usuario = {
    // nome,
    // email,
    // senha,
    // tipo

    nome: nome,
    email: email,
    senha: senha,
    tipo: tipo,
  };
  console.log(usuario);
}
function novoUsuario(nome, tipo = "adm", email, senha) {
  let usuario = {
    // nome,
    // email,
    // senha,
    // tipo

    nome: nome,
    email: email,
    senha: senha,
    tipo: tipo,
  };
  console.log(usuario);
}

// Colocar na ordem dos parâmetros
// criarUsuario("aldenir", "email.com", "1234");
// novoUsuario("aldenir", "email.com", "1234");

function muitosaParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}
function objetoComoParametro(usuario) {
  //...
  usuario.nome;
  usuario.email;
}

muitosaParametros();

let dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

muitosaParametros(dadosDoUsuario);
