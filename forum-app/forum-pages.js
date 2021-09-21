const Text = require("./text");
const Poll = require("./poll");


class Page {
    constructor(title){
        this.title = title;
    };
    createTextPost(title, date, user, text){
        let post = new Text(title, date, user, text);
        return post;
    };
    createPollPost(title, date, user, options){
        let post = new Poll(title, date, user, options);
        return post;
    }
};

module.exports = Page;