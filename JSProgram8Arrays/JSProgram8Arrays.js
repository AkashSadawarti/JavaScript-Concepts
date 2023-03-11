
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

// console.log(cars.shift())
// console.log(cars)

// unshift() method removes Element in first position but slow in speed

// console.log(cars.unshift('Grant Vitara'))
// console.log(cars)


//Cloning array 

// let Array1 = [5,4,3,2,1]
// let Array2 = [].concat(Array1)  //1st way
// let Array3 = [...Array1] //2nd way by spread Operator
// let Array4 = Array1.splice(0).concat([8,9]) // 3rd way and concat
// console.log(Array1)
// console.log(Array2)
// console.log(Array3)
// console.log(Array4)

//Forloop in Array
console.log(cars.length) //gives elements num
console.log(cars[cars.length-1]) //gives last elements name

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i])          //gives names
// }

//while loop in Array
// let i = 0;
// while(i <= cars.length-1){
//     console.log(cars[i])
//     i++;
// }

//do-while loop in array
let i=0;
do{
    console.log(cars[i])
    i++
}while(i<=cars.length-1)

// i = 1;
// console.log(i)
// console.log(a)

//Array destructuring
//  let Arr = ['value1','value2','value3']
//  let [var1,var2,var3] = Arr // work like variable 
//  console.log(Arr)
//  console.log(var1)
//  console.log(var2)
//  console.log(var3)