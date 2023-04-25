function addContact() {
  const contactSection = document.getElementById("contact-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Contato: ";

  const ul = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";

  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.append(document.createElement("br"));

  const photoLi = document.createElement("li");
  photoLi.innerText = "Telefone: ";
  const photoInput = document.createElement("input");
  photoInput.type = "text";
  photoInput.name = "phone";

  photoLi.appendChild(photoInput);
  ul.appendChild(photoLi);
  ul.append(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerText = "Telefone: ";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";

  addressLi.appendChild(addressInput);
  ul.append(addressLi);

  contactSection.append(h3, ul);
}

function removeContact() {
  const contactSection = document.getElementById("contact-list");

  const title = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(title[title.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
