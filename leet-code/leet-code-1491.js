// 1491. Average Salary Excluding the Minimum and Maximum Salary

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

let salary = [25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000, 40000]
let min ;
for (let i = 0; i < salary.length; i++) {
    for (let j = i+1; j < salary.length; j++) {
        if(salary[i] > salary[j]){
            min = salary[i];
            salary[i] = salary[j];
            salary[j] = min
        }
   }
}
console.log(salary);
let count = 0;
let sum = 0;
for (let i = 1; i <= salary.length - 2; i++) {
    sum += salary[i];
    count++
}
let res = sum / count;
console.log(res)

