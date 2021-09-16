const Book = require("./books")
const Author = require("./author")

let rowling = new Author('J.K. Rowling', 1965);
let harryPotter = new Book('Harry Potter and the order of the phoenix', rowling);

harryPotter.newEdition();
console.log(harryPotter);
console.log(rowling);