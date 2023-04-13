// 977. Squares of a Sorted Array
let sortedArray = []
let Arr = [-1, 0, 1, 8, 4, 3]
for (let i = 0; i < Arr.length; i++) {
    sortedArray.push(Arr[i] * Arr[i]);
}
let temp;
for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++)
        if (sortedArray[i] > sortedArray[j]) {
            temp = sortedArray[i]
            sortedArray[i] = sortedArray[i + 1]
            sortedArray[i + 1] = temp
        }
}
console.log(sortedArray);
