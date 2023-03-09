
//Primitive types store in stack every var has seperate memory allocation
let num = 5;
let num2 = num;
console.log(num)
console.log(num2)
num++;
console.log(num)
console.log(num2)
console.log("--------------------------------------------------------------------------");
//Reference types store in heap every array has address of memory allocation
let A1 = [1,2]
let A2 = A1;
console.log(A1);
console.log(A2);
A1.push(3)
console.log(A1);
console.log(A2);
