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
      this.state; 
    };
    this._stateBook = state;
  };

  get stateBook() {
    return this._stateBook;
  };
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super.name;
        super.releaseDate;
        super.pagesCount;
        super.state;
        this.type = "magazine";
      };
};

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        this.author = author;
        super.name;
        super.releaseDate;
        super.pagesCount;
        super.state;
        this.type = "book";
      };
};

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super.author;
        super.name;
        super.releaseDate;
        super.pagesCount;
        super.state;
        this.type = "novel";
      };
};

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super.author;
        super.name;
        super.releaseDate;
        super.pagesCount;
        super.state;
        this.type = "fantastic";
      };
};

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super.author;
        super.name;
        super.releaseDate;
        super.pagesCount;
        super.state;
        this.type = "detective";
      };
};




