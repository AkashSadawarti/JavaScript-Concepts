
// Concept of Array
let cars = ["Alto","Figo","Verna"]

console.log(cars)

// push() method insert Element in last position fast as compare to shift and unshift
// console.log(cars.push("Creta"));
// console.log(cars)

// pop() method remove Element in last position fast as compare to shift and unshift
// console.log(cars.pop())
// console.log(cars)

// shift() method insert Element in first position  but slow in speed

console.log(cars.shift())
console.log(cars)

// unshift() method removes Element in first position but slow in speed

console.log(cars.unshift('Grant Vitara'))
console.log(cars)


//Cloning array 

let Array1 = [5,4,3,2,1]
let Array2 = [].concat(Array1)  //1st way
let Array3 = [...Array1] //2nd way by spread Operator
console.log(Array1)
console.log(Array2)
console.log(Array3)