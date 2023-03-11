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