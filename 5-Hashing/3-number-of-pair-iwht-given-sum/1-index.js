

function findPair(arr, target){
    let n = arr.length;
    if(n===0){
        return 0;
    }

    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i+1; j< n; j++){
            if(arr[i]+arr[j]===target){
                count = count+1;
            }
        }
    }

    return count;

}

const arr = [1, 5, 7, -1, 5]
const target = 6;
console.log(findPair(arr,target));
