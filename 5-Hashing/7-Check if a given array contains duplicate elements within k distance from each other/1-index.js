


function checkDuplicateElmenetsDifference(arr, k){
    let n = arr.length;
    if(n===0){
        return [];
    }

    let set = new Set();

    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])){
            return true;
        }

        set.add(arr[i]);

        if(set.size>k){
            set.delete(arr[i-k]);
        }
    }

    return false;
}





const arr = [1, 2, 3, 1]
const k = 3;
console.log(checkDuplicateElmenetsDifference(arr, k));
