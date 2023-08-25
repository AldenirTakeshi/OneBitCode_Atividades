// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fanasy", "adventure", "medieval"],
//   author: {
//     name: "Christopher Paolini",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

// PascalCase -> camelCase
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    //salva no DataBase
  };
}

const author = { name: "Christopher Paolini" };
const tags = ["fanasy", "adventure", "medieval"];

const eragon = new Book("Eragon", 468, tags, author);
console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author);
console.log(eldest);
