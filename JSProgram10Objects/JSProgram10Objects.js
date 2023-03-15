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
  key1: "VAlue3", //same key would always prefer for new value i.e overide key {key1 : Value3, key2: value1}
};
console.log(obj2);

//Objects concat with Spread operators
let obj3 = {
  key1: "value1",
  key2: "value2",
};

let obj4 = {
  key3: "value1",
  key4: "value2",
};

let newObj = { ...obj3, ...obj4, key46: "value42" };
console.log(newObj);

let Obj5 = { ...["value1", "value2"] };
let Obj6 = { ..."56484" };
console.log(Obj5);
console.log(Obj6);

let Obj7 = {
  band: "Micheal Jackson",
  song: "Waving flag",
  song2: "Waka Waka",
  year: 1975,
};
//value can be accessed by simple creating objects
let b1 = Obj7.band;
let s1 = Obj7.song;
console.log(b1, s1);

//destructuring Objects
// let {band ,song , song2,year } = Obj7; //write only keys in {}
// console.log(band);
// console.log(song);
// console.log(band,song,song2,year)

let { band, song, ...restprop } = Obj7; // use of spread operator for remaining properties
console.log(restprop);

//Objects with muliple data
let Obj8 = [
  {
    userid: 1,
    username: "Akash",
  },
  {
    userid: 2,
    username: "Alex",
  },
  {
    userid: 3,
    username: "Adi",
  },
];

console.log(Obj8);
// destructure object Array``
const [user1,user2,user3] = Obj8
console.log(user1)
console.log(user2)

// const [user1,user2,...rest] = Obj8; with spread operator
// console.log(rest)
  
const [{userid : idofFirstobject,username}, , {username: usernameof3rdobject}] = Obj8  //space is for 2nd object in array which is neede to be given 
console.log(idofFirstobject,username,usernameof3rdobject);