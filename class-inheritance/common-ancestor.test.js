const { test, expect } = require("@jest/globals");
const Horse = require("./horse");
const Tiger = require("./tiger");

test('should return true for being a mammal', () => {
    const horse = new Horse(4, true, 'herbavour');
    expect(horse.mammal).toEqual(true);
    const tiger = new Tiger(4, true, 'carnavour');
    expect(tiger.mammal).toEqual(true);
});

test('should return 4 for number of legs', () => {
    const horse = new Horse(4, true, 'herbavour');
    expect(horse.numOfLegs).toEqual(4);
    const tiger = new Tiger(4, true, 'carnavour');
    expect(tiger.numOfLegs).toEqual(4);
});

test('should return type of food', () => {
    const horse = new Horse(4, true, 'herbavour');
    expect(horse.food).toEqual('herbavour');
    const tiger = new Tiger(4, true, 'carnavour');
    expect(tiger.food).toEqual('carnavour');
});