document.getElementById("sessionBtn").addEventListener("click", () => {
  const input = document.getElementById("session");
  window.sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", () => {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é " + info);
});

document.getElementById("localBtn").addEventListener("click", () => {
  const input = document.getElementById("local");
  window.localStorage.setItem("texte", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", () => {
  const t = localStorage.getItem("texte");
  alert("O texto salvo no local storage é " + t);
});

document.getElementById("cookieBtn").addEventListener("click", () => {
  const input = document.getElementById("cookie");
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 6, 30) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
});
