const { test, expect } = require("@jest/globals");
const sumOfOdd = require("./app");

test('returns the sum of odd numbers in array', () => {
    expect(sumOfOdd([1,4,5,3,1])).toEqual(10);
    expect(sumOfOdd([2,4])).toEqual(0);
    expect(sumOfOdd([-4,5,3,1])).toEqual(9);
    expect(sumOfOdd([1,4,5,-3,-1])).toEqual(6);
    expect(sumOfOdd([])).toEqual(0);
    expect(sumOfOdd([-1,-5,-3,-1])).toEqual(0);
})