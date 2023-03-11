//Object
let person = {
    Name: "Akash",
    age: "100 years",
    DOB: 15,
    hobbies: ["cook", "read", "eat"]
}

//for in loop
for (let key in person) {
    console.log(key)  //gives only keys as result
}
for (let key in person) {
    console.log(person[key])  //gives only values as result
}
for (let key in person) {
    console.log(`${key} : ${person[key]}`) //gives values and keys as result
}
