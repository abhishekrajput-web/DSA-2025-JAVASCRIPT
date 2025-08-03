function findPair(arr, target){
let n = arr.length;
if(n===0){
    return 0;
}


let map = new Map();
let count = 0;

for(let i = 0; i < n; i++){
    let complement = target - arr[i];
    if(map.has(complement)){
        count = count + map.get(complement);
    }
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

return count;
}

const arr = [1, 5, 7, -1, 5]
const target = 6;
console.log(findPair(arr,target));
