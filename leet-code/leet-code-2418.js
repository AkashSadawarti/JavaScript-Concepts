// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.
// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
let temp1
let temp2
let names = ["Mary","John","Emma"], heights = [180,165,170]
 for(let i=0;i< heights.length;i++){
    for(let j=0;j< heights.length;j++){
        if(heights[i] > heights[j]){
             temp = heights[i]
             heights[i] = heights[j];
             heights[j] = temp;

             temp2 = names[i]
             names[i] = names[j];
             names[j] = temp2;
        }
    }

}
console.log(names);
console.log(heights);