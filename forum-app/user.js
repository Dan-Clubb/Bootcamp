class User {
    constructor(username, isAdmin){
        this.username = username;
        this.isAdmin = isAdmin;
        this.commentCount = 0;
    };
};

module.exports = User;