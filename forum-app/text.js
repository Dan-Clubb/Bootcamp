const Post = require("./post");

class Poll extends Post {
    constructor(title, date, author, text){
        super(title, date, author);
        this.text = text;
    }
};

module.exports = Poll;