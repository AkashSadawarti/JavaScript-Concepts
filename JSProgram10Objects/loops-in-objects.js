//Object
let person = {
    Name: "Akash",
    age: "100 years",
    DOB: 15,
    hobbies: ["cook", "read", "eat"]
}

//for in loop
// for (let key in person) {
//     console.log(key)  //gives only keys as result
// }
// for (let key in person) {
//     console.log(person[key])  //gives only values as result
// }
// for (let key in person) {
//     console.log(`${key} : ${person[key]}`) //gives values and keys as result
// }

//for of loop
for(let keys of Object.keys(person)){
    console.log(keys,":",person[keys])
}

//Computed properties
const key1 = 'Object1'
const key2 = 'Object2'

const value1 = 'myvalue1'
const value2 = 'myvalue1'

// 1st way
let Obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(Obj)
// 2nd way

let obj ={}
obj[key1] = value1
obj[key2] = value2
console.log(obj)

//Objects with muliple data
let Obj8 = [
    {
      userid : 1,
      username : 'Akash'
    },
    {
      userid : 2,
      username : 'Alex'
    },
    {
      userid : 3,
      username : 'Adi'
    }
  ]
  
  console.log(Obj8);
//   for (const item of Obj8) {
//     console.log(item);       //accessing all data
//     console.log(item.userid); // accessing the userid only
//     console.log(item.username); // accessing the username only
//   }

// with while loop
let i =  0 ;
while( i < Obj8.length){
console.log(Obj8[i]);
i++
}

let array1 = [1,2,3]
let array2 = [3,4,5]

let res = [...new Set([...array1,...array2])];
console.log(res);