

function sortArray(nums){
let n = nums.length;
if(n<=0){
    return -1;
}

let zero = 0;
let one = 0;
let two = 0;

for(let i = 0; i < n; i++){
    if(nums[i] === 0){
        zero++;
    }

    if(nums[i] === 1){
        one++;
    }

    if(nums[i] === 2){
        two++;
    }
}

for(let i = 0; i < zero; i++){
    nums[i] = 0;
}

for(let i = zero; i < zero+one; i++ ){
    nums[i] = 1;
}


for(let i = zero+one; i < n; i++){
    nums[i] = 2;
}

return nums;
}

const nums = [2,0,2,1,1,0];
console.log(sortArray(nums));
console.log(nums);
