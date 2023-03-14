// Objects : array are not sufficient.
// 2) Object stores data in key and values
// 3) Object dont have index.
// 4)real world application
// 5) objects stores in memory like array

// Creating object
let person = {
  Name: "Akash",
  age: "100 years",
  DOB: 15,
  hobbies: ["cook", "read", "eat"],
};
console.log(person);
//   access data from object
console.log(person.Name);
// gives same result in js keys are stored in string bydefault
console.log(person["Name"]);
console.log(person.age);
console.log(person.hobbies);

for (let i = 0; i < person.hobbies.length - 1; i++) {
  console.log(person.hobbies[person.hobbies.length - 2]);
}

// add values in object
person.gender = "male";
console.log(person);
person["education"] = "javascript";
console.log(person);
let key = "email"; //it becomes key with field name
person[key] = "akash@gmail.com"; //value
console.log(person);

let obj2 = {
  key1: "value1",
  key2: "value2",
  key1: "VAlue3", //same key would always prefer for new value {key1 : Value3, key2: value1}
};
console.log(obj2);

//Objects with Spread operators
let obj3 = {
  key1: "value1",
  key2: "value2"
};

let obj4 = {
  key3: "value1",
  key4: "value2"
};

let newObj = {...obj3,...obj4}
console.log(newObj)