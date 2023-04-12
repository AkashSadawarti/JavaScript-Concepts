
// HashMap is used to any amount of data  in key and value pair

let map = new Map()   //map {}
// console.log(map);

map.set(1,100)      //for setting up key and value
map.set("a",1000)
map.set(9,9.020)


console.log(map);   //Map(3) { 1 => 100, 'a' => 1000, 9 => 9.02 }
console.log(map.size);  //3
console.log(map.get(1)); //100
console.log(map.get("a")); //1000

