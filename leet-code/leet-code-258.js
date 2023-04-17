// 258. Add Digits
// Easy
// 3.3K
// 1.8K
// Companies
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

var addDigits = function (num) {
    let sum = 0;
    while (num > 0 || sum > 9) {
        if (num == 0) {
            num = sum;
            sum = 0;
        }
        sum += num % 10
        num = Math.floor(num / 10)
    }
    console.log(sum);
};

addDigits(51)


