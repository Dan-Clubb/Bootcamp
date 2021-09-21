const Book = require("./books")
const Author = require("./author")
const { test } = require("@jest/globals")

test("Book sets title argument as property", () => {
    let book = new Book("harry potter", 'J.K');
    expect(book.title).toBe("harry potter");

    let b = new Book("", 'J.K');
    expect(b.title).toBe("");

    let noBook = new Book(null, 'J.K');
    expect(noBook.title).toBe(null);
});

test("Book sets author argument as property", () => {
    let book = new Book("harry potter", 'J.K');
    expect(book.author).toBe("J.K");
});

test("latest edition defaults as 1", () => {
    let book = new Book("harry potter", 'J.K');
    expect(book.latestEdition).toEqual(1);
});