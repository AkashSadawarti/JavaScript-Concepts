// 'use strict'
// HashMap is used to any amount of data  in key and value pair

let map = new Map()   //map {}
// console.log(map);

map.set(1,100)      //for setting up key and value
map.set("a",1000)
map.set(9,9.020)


// for taking o/p
console.log(map);   //Map(3) { 1 => 100, 'a' => 1000, 9 => 9.02 }
console.log(map.size);  //3
console.log(map.get(1)); //100
console.log(map.get("a")); //1000

//FOR LOOP
for(let item of map){
    console.log(item);
}  //gives complete data

// print only keys or values
// 1st way 
for(let item of map){
    console.log(item[1]);  //0 will give keys only and 1 will give values
}  

// 2nd Way
for(let item of map.values()){
    console.log(item);  //keys() will give keys only and calues() will give values
}  

// note : normal loop is allowed

map.delete("a")   // delete a row/key-value pair
console.log(map);

map.clear()    //delete entire date
console.log(map);

 Arr1 = [1,2,3]
let Arr2= ["om","ka","r"]

let Arr3 = [...Arr1,...Arr1]
console.log(Arr3);


// let Arr  = [12, 10, 10, 9, 45, 2, 10, 85,45, 10]
// let sum = 0;
// let uniques = []
// let m = new Map();
// let len = Arr.length;
// for(let i=0;i< len;i++){
//     if(m.has(Arr[i])){
//         Arr.pop(Arr[i])
//     }else{
//       sum = sum + Arr[i]
//     }
// }

// console.log(sum);

let sortedArray = []
 let Arr = [-1,0,1,8,4,3]
 for (let i=0;i<Arr.length;i++){
    sortedArray.push(Arr[i]*Arr[i]); 
} 
let temp ;
for(let i=0;i<sortedArray.length-1;i++){
    for(let j=i+1;j<sortedArray.length;j++)
   if(sortedArray[i] > sortedArray[j]){
       temp = sortedArray[i]
       sortedArray[i] = sortedArray[i+1]
       sortedArray[i+1] = temp
   }
}
console.log(sortedArray);

// product of element in Array
let nums = [7,3,1,0,0,6]

let temp2 ;
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++)
   if(nums[i] > nums[j]){
       temp2 = nums[i]
       nums[i] = nums[i+1]
       nums[i+1] = temp2
   }
}

let Res = nums[nums.length-1]  * nums[nums.length-2] * nums[nums.length-3] 
  let Res2 = nums[0] * nums[1] * nums[nums.length -1]
console.log(Math.max(Res,Res2));