function register(element) {
  const userName = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + userName + " registrado!");
  } else {
    alert("As senhas não conferem!");
  }
  console.log(userName);
  console.log(password);
  console.log(passwordConfirmation);
}
