//note : functions concept

//Functions : it has some purpose to do eg a particular work/action is donne by a function.
// eg 1: for defining function and syntax

function playSong() {
  console.log("Happy Birthday to you...... "); 
}
//this action can ne performed n number of times by calling function
// playSong();

//eg 2 
function Add(number1,number2){
  console.log(number1+number2);
}
// Add(5,5) //--> Values which are passed are called arguments

// eg 3 calling function in another function

function callAnotherFunction(){
  return  playSong(),Add(10,15);
}
console.log(callAnotherFunction());