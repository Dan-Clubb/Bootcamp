const Comment = require("./comment");

class Post{
    constructor(title, date, user){
        this.title = title;
        this.date = date;
        const {username} = user;
        this.author = user;
    }
    createComment(date, author, text){
        
        let comment = new Comment(date, author, text);
        return comment;
    };
    // deletePost(user){
    //     if ({isAdmin} || {username} === this.author){

    //     }
    // };
}

module.exports = Post;