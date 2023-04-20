// 1512. Number of Good Pairs
let nums = nums = [1,2,3,1,1,3]
var numIdenticalPairs = function(nums) {
    let pairsCount = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                pairsCount++
            }
        }
    }
    return pairsCount
};