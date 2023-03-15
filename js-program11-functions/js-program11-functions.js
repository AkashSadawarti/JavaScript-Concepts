//note : functions concept

//Functions : it has some purpose to do eg a particular work/action is donne by a function.
// eg 1: for defining function and syntax

//Function declaration
function playSong() {
  console.log("Happy Birthday to you...... ");
}
//this action can ne performed n number of times by calling function
playSong();

//eg 2
function Add(number1, number2) {
  console.log(number1 + number2);
}
Add(5,5) //--> Values which are passed are called arguments

// eg 3 calling function in another function

function callAnotherFunction() {
  return playSong(), Add(10, 15);
}
console.log(callAnotherFunction());

//WAP for even odd in functions return true/false

function evenOdd(number) {
  if (number % 2 === 0) {
    //using if else condition
    return true;
  }
  return false;
  // return number % 2 === 0;  //using single expression
  // return (number % 2 === 0) ? true : false ; //using ternary operator
}
console.log(evenOdd(7));

//WAP print first character of string
function firstChar(str) {
  let res = str[0];
  return res;
}
console.log(firstChar("Char"));

// WAP function input[Array ,target], output index of target

function Target(Arr, targ) {
  for (let i = 0; i <= Arr.length; i++) {
    if (Arr[i] === targ) {
      return console.log(`index of targ ${targ} = ${i} `);
    }
  }
  return console.log("Target Not Found"); 
}
Target([0, 1, 3, 4, 6, 8, 5], 15);

//function expression:
// 2nd way of declaring function by giving it like variable this type also called function expression    

let user = function(){
    console.log('Hello User')
}
console.log(user());

//Arrow functions
// 3rd way to declare a function

let calculate =  () => {   //by putting => symbol after brackets no need to write function keyword
    console.log(10-2)
}
calculate()

let multiply =  (num1,num2) => {  //arrow function with arguments
    console.log(num1 * num2);
}
multiply(5,5)

// return function in single line

let isOdd = num3 => (num3 % 2 != 0) ;
console.log(isOdd(4))  //false

let divide = (num4,num5) => (num4 % num5 === 0) ? "success" : "failed";
console.log(divide(8,2));