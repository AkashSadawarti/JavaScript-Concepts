// 2535. Difference Between Element Sum and Digit Sum of an Array

// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.



// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

var differenceOfSum = function (nums) {
    let sumOfElements = 0
    for (let i = 0; i < nums.length; i++) {
        sumOfElements = sumOfElements + nums[i]
    }
    console.log(sumOfElements);
    let sumOfDigits = 0;
    let rem;
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] > 9) {
            while (nums[i] != 0) {
                rem = nums[i] % 10;
                sumOfDigits += rem;
                nums[i] = Math.floor(nums[i] / 10);
            }
        }
    }
    console.log(sumOfDigits)
    let res = sumOfElements - sumOfDigits
    return res
};
differenceOfSum([1, 2, 3 ,11]);

// let sumOfDigits = 0;
// let num = 515
// let rem;
// while (num != 0) {
//     rem = num % 10;
//     sumOfDigits += rem;
//     num = Math.floor(num / 10);
// }
// console.log(sumOfDigits);