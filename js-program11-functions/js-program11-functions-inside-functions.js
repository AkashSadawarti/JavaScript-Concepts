//Function calling function
//  function greet(){
//     console.log("Hello student");
// }

// function student(){
//     greet();
//     console.log(`Akash`);
// }
// student()

//function in functions eg=>

function movie() {
  let scene = () => {
    console.log("Aircraft Fighting");
  };

  let soldier = (ladies, mens) => {
    console.log(`Total Soldier Strength = ${ladies + mens}`);
  };

  console.log("movie name : Lakshya");
  soldier(5000, 1000); //call this function in function so that it will be accessible soldier() will get printed not scene()
}
movie();

//lexical scope eg1

let myVar = "value8";
function myApp() {
  // let myVar = "value8";

  function insideFunc() {
    // let myVar = "value67";
    console.log(`inside function : ${myVar}`);
  }
  console.log(myVar);
  insideFunc(); //this function will prefer myvar value from its own function but when same variable is defined in same env but not in function it will take myvar value from it parent function i.e env.
}
myApp(); //1) o/p = inside function : value67
//2) comment myvar from local scope o/p = inside function : value8
//3) comment myvar from myapp same o/p will resist again checking env

//example - 2
let myNum = "value86";
function newApp() {
  function insideFunc() {
    function newFunc() {
      console.log(`inside function : ${myNum}`);
    }
    newFunc();
  }
  console.log(myNum);
  insideFunc(); //this function will prefer myvar value from its own function but when same variable is defined in same env but not in function it will take myvar value from it parent function i.e env.
}
newApp();
