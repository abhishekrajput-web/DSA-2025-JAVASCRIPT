










function subArrayEqualToK(nums, k){
    let n = nums.length;
    if(n<=0){
        return -1;
    }

    let count = 0;
    const result = [];

    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n; j++){
            sum = sum + nums[j];
            startIndex = i;
            endIndex = j;
            if(sum === k){
                result.push(nums.slice(i,j+1));
                count++;
            }
        }
    }

    return {count, result};

}


const nums = [1,1,1];
let k = 2;
console.log(subArrayEqualToK(nums, k));



