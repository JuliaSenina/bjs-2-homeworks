class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };
  
  fix() {
    this.state * 1.5;
  };

  set stateBook(state) {
    if (this.state < 0) {
      this.state = 0;
    } else if (this.state > 100) {
      this.state = 100;
    } else {
      this.fix(); 
    };
    this._stateBook = state;
  };

  get stateBook() {
    return this._stateBook;
  };
};

class Magazine extends PrintEditionItem {
  super(name, releaseDate, pagesCount) {
    this.type = "magazine";
  };
};

class Book extends PrintEditionItem {
  super(name, releaseDate, pagesCount, author) {
    this.author = author;
    this.type = "book";
  };
};

class NovelBook extends Book {
  super(name, releaseDate, pagesCount, author) {
    this.type = "novel";
  };
};

class FantasticBook extends Book {
  super(name, releaseDate, pagesCount, author) {
    this.type = "fantastic";
  };
};

class DetectiveBook extends Book {
  super(name, releaseDate, pagesCount, author) {
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
    if (type != undefined && value != undefined) {
      this.name;
    } else {
      null;
    };
  };

  giveBookByName(bookName) {
    if (bookName != undefined) {
      delete this.books[bookName];
      return bookName;
    } else {
      null;
    };
  };
};


