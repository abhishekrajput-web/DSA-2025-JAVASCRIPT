// OPTIMISE APPROACH - XOR 


function findMissingNumber(arr){
const n = arr.length;
if(n<=0){
    return -1;
}

let xor = 0;

for(let i = 0; i < n; i++){
    xor = xor ^ arr[i];
}

for(let i = 0; i <=n; i++){
    xor = xor ^ i;
}

return xor;
}


const nums = [3,0,1];
console.log(findMissingNumber(nums));

