function escalarJogador() {
  const posicao = document.getElementById("posicao").value;
  const name = document.getElementById("name").value;
  const camisa = document.getElementById("camisa").value;

  const confirmacao = confirm(
    `Deseja realmente escalar o jogador ${name}
Camisa ${camisa} 
Na posição ${posicao}?`
  );
  if (confirmacao) {
    const sectionTime = document.getElementById("time");
    const ul = document.createElement("ul");

    const li = document.createElement("li");
    li.innerText = `Jogador ${name} camisa ${camisa} posição ${posicao}`;
    li.id = `${camisa}`;

    ul.append(li);
    sectionTime.append(ul);
  }
}

function removerJogador() {
  const sectionTime = document.getElementById("time");
  const jogadorRemoved = document.getElementById("camisaRemove");
}
