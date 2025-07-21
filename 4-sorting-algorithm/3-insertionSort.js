
function insertionSort(arr){
let n = arr.length;
if(n<=0){
    return -1;
}

for(let i = 1; i < n; i++){
    let current = arr[i];
    let prev = i - 1;

    while(prev>=0 && arr[prev]>current){
        arr[prev+1] = arr[prev];
        prev--;
    }

    arr[prev+1] = current;
}

return arr;
}


const arr = [ 64, 34, 25, 12, 22, 11, 90 ];
console.log(insertionSort(arr));


