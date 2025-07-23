function subArrayEqualToK(nums, k){
let n = nums.length;
if(n==0){
return [];
}

let count = 0;
let prevSum = 0;
const map = new Map();
map.set(0,1);

for(let i = 0; i < n; i++){
    let curr = nums[i];
    prevSum = prevSum + curr;
    let val = prevSum - k;
    if(map.has(val)){
        count = count + map.get(val);
    }
    map.set(prevSum, (map.get(prevSum) || 0) + 1);
}

return count;
}

const nums = [1,1,1];
let k = 2;
console.log(subArrayEqualToK(nums, k));