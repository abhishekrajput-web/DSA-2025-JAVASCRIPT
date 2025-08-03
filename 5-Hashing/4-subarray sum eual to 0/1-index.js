function subArraySumZero(arr){
    let n = arr.length;
    if(n===0){
        return false;
    }

    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n; j++){
            sum = sum + arr[j];
            if(sum === 0){
                console.log("subarray exists from index " + i + " to " + j + " ", arr.slice(i,  j+1));
                return true;
            }
        }
    }

    return false;
}
const arr = [4, 2, -3, 1, 6];
console.log(subArraySumZero(arr)); // Output: true
