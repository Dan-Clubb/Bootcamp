class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.latestEdition = 0;
    }
    newEdition(){
        this.latestEdition++ 
    }
}

module.exports = Book;

