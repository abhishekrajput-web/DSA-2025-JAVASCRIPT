

// function findMissingNumber (nums){
//     let n = nums.length;
//     if(n<=0){
//         return -1;
//     }

//     const expectedSum = (n * (n + 1) ) / 2;
//     let sum = 0;
//     for(let i = 0; i < n; i++){
//         sum = sum + nums[i];
//     }

//     return expectedSum - sum;
// }

// const nums = [3,0,1];
// console.log(findMissingNumber(nums));





function findMissingNumber (nums){
    let n = nums.length;
    if(n<=0){
        return -1;
    }

    let xor = 0;

    for(let i = 0; i < n; i++){
        xor = xor ^ nums[i];
    }

    for(let i = 0; i <=n; i++){
        xor = xor ^ i;
    }

    return xor;
}

const nums = [3,0,1];
console.log(findMissingNumber(nums));

