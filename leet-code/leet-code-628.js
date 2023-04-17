// 628. Maximum Product of Three Numbers
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

