let fruits = ["apple" ,'banana' ,"mango"]
// for loop
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])   // gives every elements name
// }
// console.log(fruits[fruits.length-2])  // gives second last element of fruits

//const cannot be assigned again with same variable
//For of loop
for(let fruit of fruits){
    console.log(fruit.toUpperCase())
}
 //for in loop rarely used
 for(let item in fruits){
    console.log(item) // gives position number
    console.log(fruits[item]) //gives name
 }