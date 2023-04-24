function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactInuts = document.getElementsByClassName("contact-input");
  console.log(contactInuts);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
