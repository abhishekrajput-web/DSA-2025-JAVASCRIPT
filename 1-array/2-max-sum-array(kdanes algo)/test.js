function maxSubArray(arr){
const n = arr.length;
if(n<=0){
    return 0;
}

let maxSum = arr[0];
let currentSum = arr[0];

for(let i = 0; i < n; i++){
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
}

return maxSum;
}


const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
