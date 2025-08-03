



function subArraySumZero(num){
    let n = num.length;
    if(n===0){
        return false;
    }

    let set = new Set();
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = sum + num[i];
        if(sum===0 || set.has(sum)){
            return true;
        }

        set.add(sum);
    }

    return false;

}

const arr = [4, 2, -3, 1, 6];
console.log(subArraySumZero(arr));