// Truthy values :

// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

// Falsy values :

// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string
// It is good to remember those truthy values and falsy values. 
//In later section, we will use them with conditions to make decisions.


//Falsy Values Example
let FirstName
console.log(FirstName)   // result undefined
let student = null
console.log(student)    //null

// Arithmetic Operators
// //Arithmetic operators are mathematical operators.

// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

//Example:
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

//Comparison Operator
//1. = operator assigns value
//2. == Check values true or false
//3. === checks values and datatypes exact same or not
//4. < and <= lessthan and less than or equal to 
//5. > and >= greaterthan and greater than or equal to
//6. ! and != not and notequals to   

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type

x=6
y=7
console.log(x!=y)

//Logical Operators  &&, ||, !
const check = 4>3 && 5<3
const check2 = 4>6 || 6<10

const islighton = true         //true
const islightoff = !islighton   // false


//ternary Operator

let num = 4>3
num ? console.log('Num is greater than 3') : console.log('Number is less than 3')
let name1 = 'messi'
let name2 = 'Ronaldo'
name1.length > name2.length ? console.log('Length of name1 is greater than name2') : console.log('Length of name1 is less than name2')
 
//Date Object
let todaystime = new Date()
let year = todaystime.getFullYear()
let month = todaystime.getMonth() + 1
let date = todaystime.getDate()
let hours = todaystime.getHours()
let min = todaystime.getMinutes()
console.log(`${year}/${month}/${date},${hours}:${min}`)
