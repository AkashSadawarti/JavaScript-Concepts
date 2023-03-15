//note : functions concept

//Functions : it has some purpose to do eg a particular work/action is donne by a function.
// eg 1: for defining function and syntax

function playSong() {
  console.log("Happy Birthday to you...... ");
}
//this action can ne performed n number of times by calling function
// playSong();

//eg 2
function Add(number1, number2) {
  console.log(number1 + number2);
}
// Add(5,5) //--> Values which are passed are called arguments

// eg 3 calling function in another function

function callAnotherFunction() {
  return playSong(), Add(10, 15);
}
console.log(callAnotherFunction());

//WAP for even odd in functions return true/false

function evenOdd(number) {
  if (number % 2 === 0) {  //using if else condition
    return true;
  }
  return false;
// return number % 2 === 0;  //using sing expression
// return (number % 2 === 0) ? true : false ; //using ternary operator

}
console.log(evenOdd(7));

//WAP print first character of string
function firstChar(str){
    let res = str[0];
    return res;
}
console.log(firstChar("Char"));