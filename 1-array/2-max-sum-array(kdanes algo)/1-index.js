// MAX SUBARRAY - BRUT FORCE APPROACH 

// 🔸 Problem Statement:
// Given an integer array arr[], find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


function maxSubArray(arr){
let n = arr.length;
if(n<=0){
    return -1;
}

let maxSum = arr[0];
for(let i = 0; i < n; i++){
    let currentSum = 0;
    for(let j = i; j < n; j++){
        currentSum = currentSum + arr[j];
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
    }

}

return maxSum;
}


const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));


// TC = O(n^2)
// SC = o(1)