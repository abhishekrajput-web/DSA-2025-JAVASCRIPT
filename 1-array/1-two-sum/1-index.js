// TWO SUM - BRUTE FORCE
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


function twoSum(arr, target){
    let n = arr.length;
    if(n<=0){
        return -1;
    }

    for(let i = 0; i < n-1; i++){
    for(let j = i + 1; j < n; j++){
        if(arr[i]+arr[j] === target){
            return [i, j]
        }
    }
    }

    return -1;

}

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));


// TC = O(n^2)
// SC = o(1)  

