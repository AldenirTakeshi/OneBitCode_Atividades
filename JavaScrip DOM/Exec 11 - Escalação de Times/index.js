function addplayer() {
  const name = document.getElementById("name").value;
  const numero = document.getElementById("numero").value;
  const posicao = document.getElementById("posicao").value;

  const teamList = document.getElementById("teamList");
  const newPlayer = document.createElement("li");
  newPlayer.id += "player-" + numero;
  newPlayer.innerText = posicao + ": " + name + " (" + numero + ")";

  const confiramcao = confirm(
    "Deseja escalar o jogador " +
      name +
      " na posição de " +
      posicao +
      " camisa: " +
      numero
  );

  if (confiramcao) {
    teamList.append(newPlayer);

    document.getElementById("name").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("posicao").value = "";
  }
}

function removedPlayer() {
  const teamList = document.getElementById("teamList");
  const numero = document.getElementById("playerToRemoved").value;

  const playerRemoved = document.getElementById("player-" + numero);
  teamList.remove(playerRemoved);
}
