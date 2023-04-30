function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.id = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, typr = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = text;
  input.placeholder = placeholder;
  return input;
}
