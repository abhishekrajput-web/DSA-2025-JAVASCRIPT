// BRUT FORCE APPROACH
function findMissingNumber(nums){
let n = nums.length;
if(n<=0){
    return -1;
}

let sumFormula = (n * (n + 1)) / 2;

let sum = 0;
for(let i = 0; i < n; i++){
    sum = sum + nums[i];
}

return sumFormula - sum;
}


const nums = [3,0,1];
console.log(findMissingNumber(nums));
