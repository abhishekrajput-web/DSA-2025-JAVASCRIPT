

function findPairArrayDifference(arr, k){
    if(arr.length === 0){
        return [];
    }
    
    const result = [];
    let set = new Set(arr);

    for(let num of arr){
        let complement = num - k;
        if(set.has(complement)){
            result.push([num, complement]);
        }
    }

    return result;
    
    }
    const arr = [1, 5, 3, 4, 2];
    const k = 2;
    console.log(findPairArrayDifference(arr,k));
    