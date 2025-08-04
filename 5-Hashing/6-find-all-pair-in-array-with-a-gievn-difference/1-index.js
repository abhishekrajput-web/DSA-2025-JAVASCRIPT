

function findPairArrayDifference(arr, k){
if(arr.length === 0){
    return [];
}

const result = [];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(i!==j && arr[i]-arr[j]===k){
            result.push([arr[i], arr[j]]);
        }
    }
}

return result;

}
const arr = [1, 5, 3, 4, 2];
const k = 2;
console.log(findPairArrayDifference(arr,k));
