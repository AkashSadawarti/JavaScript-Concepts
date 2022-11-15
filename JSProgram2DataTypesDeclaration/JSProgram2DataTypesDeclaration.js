//How to Declare any datatypes eg string,char,int anything

let Name = 'Akash'
let Surname = 'Sadawarti'
let Job =  'JavaScript Learning'
let Country = 'India'
let IsMarried = false
let TeamNo = 2

//Printing Output on Console Window 
 console.log("Information using let keyword") 
console.log(Name,Surname + '\n' + Job + '\n'+ Country)
// Note "\n" is used to change line into next line

//How to declare Number, which is prefered in  Const 

const age = 100.5
const number = 9879871
const DOB = 19
console.log("Information using const keyword")
console.log('Akash description ' + age , number, DOB);

// data type can be declared in single line using comma

let x=10,y=20, z=30
console.log("Variables declared in single line using comma")
console.log("Values of XYZ are " + x ,y, z)


// How to take user defined input

let a = prompt("Enter First Name")
let b = prompt("Enter Surname")
console.log("User defined Program")
console.log(a,b)