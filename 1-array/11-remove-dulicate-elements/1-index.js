function removeDuplicateNumbers(arr){
let n = arr.length;

let i = 0;

for(let j = 1; j < n; j++){
    if(arr[i]!==arr[j]){
        i++;
        arr[i] = arr[j];
    }
    j++;
}

return i+1;

// return arr.slice(0,i+1);

}

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log((removeDuplicateNumbers(nums)));





