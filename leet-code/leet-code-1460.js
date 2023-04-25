// 1460. Make Two Arrays Equal by Reversing Subarrays
// Easy
// 919
// 130
// Companies
// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

// Return true if you can make arr equal to target or false otherwise.

 

// Example 1:

// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse subarray [4,2], arr becomes [1,2,4,3]
// 3- Reverse subarray [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

let target = [1,2,3,4], arr = [2,1,3]
let res1 = target.sort()
let res2 = arr.sort()
console.log(res1.toString() === res2.toString())

// 2nd method
// let newTarget;
// let temp;
// for (let i = 0; i < target.length; i++) {
//     for (let j = 0; j < target.length; j++) {
//         if (target[i] > target[j]) {
//             temp = target[i];
//             target[i] = target[j]
//             target[j] = temp;
//         }
//     }
// }
// newTarget = target;

// let newArr;
// let temp2;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp2 = arr[i];
//             arr[i] = arr[j]
//             arr[j] = temp2;
//         }
//     }
// }
// newArr = arr; 
// return newTarget.toString() === newArr.toString()



