function twoSum(arr, target){
const n = arr.length;
if(n<=0){
    return -1;
}

const map = new Map();

for(let i = 0; i < n; i++){
    let complement = target - arr[i];
    if(map.has(complement)){
        return [map.get(complement), i];
    }

    map.set(arr[i], i);
}

return -1;

}


const arr = [2,7, 11, 15];

const target = 9;



console.log(twoSum(arr, target));
