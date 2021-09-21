function sumOfOdd(nums){
    let sum = 0;
    for(num of nums){
        if(num % 2 != 0 && num > 0) sum += num;
    }
    return sum;
}

module.exports = sumOfOdd;