// 2648. Generate Fibonacci Sequence
// Easy
// 22
// 3
// Companies
// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 
// Example 1:

// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3


//Fibonacci
let k = 5
let current = 1
let prev = 0
let nextTerm ;
let fib = []
for(let i=1;i<= k ;i++){
    nextTerm = current + prev;
    current = prev;
    prev = nextTerm;
    fib.push(current)
}
console.log(fib);
