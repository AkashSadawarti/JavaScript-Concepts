//Concept of IF-ELSE loop
//syntax : if(condition){
//result 1
// }
// else{
//result 2 
// }

// for eg:    
// let num1 = 15; num2 = 20
// if(num1>num2){
//   console.log('num1 is Big');
// }
// else{
//   console.log('num2 is Big');
// }

//ternary Operator EX:1

let isRaining = false
let res = isRaining ? 'take raincoat' : 'No raincoat required';
console.log(res)
// EX:2
let voteAge = 24;
let result = voteAge >= 18 ? 'Eligible' : 'Not Eligible';
console.log(result)

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

// let myAge = 28;
// let yourAge = prompt('Enter your Age')
// let yourAge2 = parseInt(yourAge)
// let compareAge = myAge - yourAge2
// let compareAge2 = yourAge2 - myAge
// if (myAge > yourAge2) {
//     console.log(`I  am ${compareAge} years older than you`)

// }
// else {
//     console.log(`You are ${compareAge2} years older than me`)
// }


//Nested if else

let lotteryNumber = 157;
let input = prompt('Enter the lottery Number')
let num = parseInt(input)
if(num === lotteryNumber){
  console.log('Congratulations');
}else{
  if(num < 157){
    console.log('Too low');
  }else{
    console.log('Too high')
  }
}

