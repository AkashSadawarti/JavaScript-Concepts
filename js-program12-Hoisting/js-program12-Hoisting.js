// Hoisting 

// let ex

// function declaration 
greet();  //o/p = Hello world , here it will show o/p in function declaration this called hoisting 
      
function  greet(){
    console.log('Hello World!');
}

// now if we try to call this function written in arrow function and function expression it will not Work.

// for eg
// greet2();  //errror : cannot access greet2 before initialization
// let greet2 = function() {
//    console.log("good Morning");
// }

// greet3(); //TypeError: undefined is not a function
let greet3 = () => console.log("good Evening");


let num = "1";
let num2 = "2";
console.log(typeof(num,num2))
console.log(typeof(parseInt(num),parseInt(num2)))