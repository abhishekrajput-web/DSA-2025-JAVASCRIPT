// FIND MAJORTIY ELEMENT














function findMajorityElement(nums){
let n = nums.length;
if(n===0){
    return null;
}

let majorityElement = nums[0];
let votes = 1;


for(let i = 1; i < n; i++){
    if(votes === 0){
        votes++;
        majorityElement = nums[i];
    }
    else if(nums[i] === majorityElement){
        votes++;
    }
    else{
        votes--;
    }
}

return majorityElement;

}
const nums = [2,2,1,1,1,2,2];
console.log(findMajorityElement(nums));



