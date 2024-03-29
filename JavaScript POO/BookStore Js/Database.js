module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage["authors"].push(author);
  }

  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }

  saveBook(book) {
    const bookExists = this.#storage.books.find((b) => b.name === book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.#storage.books.concat.find((b) => b.name === bookName);
  }
};
