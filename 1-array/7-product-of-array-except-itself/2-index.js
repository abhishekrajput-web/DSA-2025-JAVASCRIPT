

function productExceptSelf(arr){
let n = arr.length;
if(n<=0){
    return -1
}


const left = new Array(n);
const right = new Array(n);


left[0] = 1;
for(let i = 1; i < n; i++){
    left[i] = arr[i-1] * left[i-1];
}


right[right.length-1] = 1;

for(let i = right.length - 2; i>=0; i++){
right[i] = arr[i+1] * right[i+1];
}

const mergedArray = new Array(n);

for(let i = 0; i < mergedArray.length; i++){
    mergedArray[i] = left[i] * right[i];
}

return mergedArray;
}

const arr = [2,1,3,4];
console.log(productExceptSelf(arr));