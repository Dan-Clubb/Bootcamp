const Animal = require("./animal");

class Horse extends Animal{
    constructor(numOfLegs, mammal, food){
        super(numOfLegs, mammal);
        this.food = food;
    }
}

module.exports = Horse;