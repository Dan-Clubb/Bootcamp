const Post = require("./post");

class Poll extends Post {
    constructor(title, date, author, options){
        super(title, date, author);
        this.options = options;
    }
};

module.exports = Poll;