const Animal = require("./animal");

class Tiger extends Animal{
    constructor(numOfLegs, mammal, food){
        super(numOfLegs, mammal);
        this.food = food;
    }
}

module.exports = Tiger;