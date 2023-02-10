//Concept of IF-ELSE loop
//syntax : if(condition){
//result 1
// }
// else{
//result 2 
// }

// for eg:    
  let num1 = 15; num2 = 20
  if(num1>num2){
    console.log('num1 is Big');
  }
  else{
    console.log('num2 is Big');
  }

//1. Get user input using prompt(“Enter your age:”). 
//If user is 18 or older , give feedback:'You are old enough to drive',
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//soln =>

// let age = prompt('Enter your age :');
// let waitingage = 18-age;
// if(age >= 18)
// {
//     console.log('You are old enough to drive')
// }
// else{

//     console.log(`You are left with ${waitingage} years to drive.`)
// }

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//Enter your age: 30
//You are 5 years older than me.
//soln=>

let myAge = 28;
let yourAge = prompt('Enter your Age')
let yourAge2 = parseInt(yourAge)
let compareAge = myAge - yourAge2
let compareAge2 = yourAge2 - myAge
if (myAge > yourAge2) {
    console.log(`I  am ${compareAge} years older than you`)

}
else {
    console.log(`You are ${compareAge2} years older than me`)
}