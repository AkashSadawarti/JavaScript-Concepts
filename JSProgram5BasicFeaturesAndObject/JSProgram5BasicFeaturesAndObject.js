// Escape Sequences in Strings

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")


console.log('France has city Paris,which is famous for \\ Eiffel Tower')  // Add slash 
console.log('France has city Paris,\n which is famous for Eiffel Tower')  // Add New line
console.log('France has city Paris,\t which is famous for Eiffel Tower')   // Add Tabular Spaces
console.log('France has city \'Paris\', which is famous for Eiffel Tower') // Add inverted Comma
console.log('France has city Paris, which is famous for \"Eiffel Tower\"') // Add Double inverted Comma

// Template Literals ${} and `` Backtick

console.log('My Name is Akash Sadawarti')  // Static Output

let FirstName = prompt('Enter First Name')
let LastName = prompt('Enter Second Name') 

console.log(`My Name is ${FirstName} ${LastName}`) // Add Dynamic Data and shows Output

const a = 15;
const b = 15;

console.log(`Addition of A and B is ${a + b}`)

//Math Object provides lot of method with numbers

let PI = Math.PI
console.log('pi value is ' + PI)
console.log('Round Value of PI is ' + Math.round(PI))
console.log('floor value of PI is ' + Math.floor(PI))
console.log('Ceil value of PI is ' + Math.ceil(PI))

//Math.Min/Max property
console.log('Min Number is ' + Math.min(-5,3,2,5))
console.log('Max Number is ' + Math.max(-4,-6.5,8,3.2))

//Random Numbers 
console.log('Random number from 0 to 0.99 ='  + Math.random())               // generates 0 - 0.99
console.log('Random number from 0 to 10 =' + Math.random() * 11)          // generates 0 - 10

//Absolute Value
console.log('Absolute value of -10 is ' +  Math.abs(-10))   // 10

//Square root
console.log('Square Root of 20 is ' + Math.sqrt(400))  // 20

// power of
console.log('3 power of 3 is ' + Math.pow(3,3))   //27

// logarithm with base e of x
console.log('log of 2 is ' + Math.log(2))
console.log('log of 2 is ' + Math.LN2)

//Trignomentry
console.log('Sin30 value is ' + Math.sin(30) )

//String Concatenation
let Name = 'Issac'
let Surname = 'Newton'
let Title = 'Father of Physics'
let space =  ' '
//Ist way
console.log(Name + space + Surname + ' dicovered law of gravity, and Known as' + space + Title )
//II nd way using backtick(`) and ${input}
let fullname = Name + space + Surname 
console.log(`${fullname} discoverd law of gravity, and known as ${Title}.`)

//String Methods
//length: The string length method returns the number of characters in a string included empty space.

let str =  'JavaScript'
console.log(str.length)
//first letter
console.log(str[0])
//last Letter
console.log(str.length-1)

//Upper Case and Lower Case
console.log(str.toUpperCase())
console.log(str.toLowerCase())

//substr()
console.log(str.substring(0,3))

//split('') split is used to convert string into array
console.log(str.split())
console.log(str.split(''))

//Trim() removes spaces at the end and starting

let str2 = 'Australia'
console.log(str2.trim())

//include() It takes a substring argument and it checks if substring argument exists in the string.
// includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

console.log(str2.includes('Aust')) // true
console.log(str2.includes('aust')) // false case sensitive

//replace()
console.log(str2.replace('Austra','Soma')) //result Somalia

//charAt(): Takes index and it returns the value at that index
console.log(str2.charAt(1))  //result A
let lastindex = str2.length-1
console.log(lastindex)        // result 8

//charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

console.log(str2.charCodeAt(3)) //result 116

//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring,
 //if does not exist it returns -1

 console.log(str2.indexOf(3)) // result t

 //concat() Method 

 let country = 'India'
 console.log(country.concat(" has "," beautiful "," Culture. ")) //result India  has Beautiful Culture.

 //search()
 let sentence = 'Rome is a beautiful Place for Tourists'
console.log(sentence.search('Rome'))  // result 0
console.log(sentence.search('rome'))  // 

//startswith()
console.log(sentence.startsWith('Rome')) //result true
console.log(sentence.startsWith('rome')) // false

//match 
console.log(sentence.match('beautiful'))  //['beautiful', index: 10, input: 'Rome is a beautiful Place for Tourists', groups: undefined]

//repeat()
console.log(sentence.repeat(2))

//typeof() tells about data type

let city = 'jodhpur'
let age =200
let isAlive = true
let decimal = 3.14

console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isAlive))
console.log(typeof(decimal))