


function removeDuplicateNumbers(nums){
    let n = nums.length;
    if(n<=0){
        return -1;
    }

    let set = new Set();
    const result = [];

    for(let char of nums){
        if(!set.has(char)){
            set.add(char);
            result.push(char);
        }
    }

    return result;
}

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log((removeDuplicateNumbers(nums)));