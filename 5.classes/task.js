class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };
  
  fix() {
    this.state *= 1.5;
  };

  set state(state) {
    if (this.state < 0) {
      this.state = 0;
    } else if (this.state > 100) {
      this.state = 100;
    };

    this._state = state;
  };

  get state() {
    return this._state;
  };
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  };
};

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  };
};

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  };
};

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  };
};

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  };
};

// Задача №2 //

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  };

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    };
  };

  findBookBy(type, value) {
    if (Library.books.find(type, value) === true) {
      return this.name;
    } else {
      return null;
    };
  };

  giveBookByName(bookName) {
    if (Library.books.find(bookName) === true) {
      delete this.books[bookName];
      return bookName;
    } else {
      return null;
    };
  };
};


