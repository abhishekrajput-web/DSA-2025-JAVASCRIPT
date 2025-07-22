
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){
let n = arr.length;
if(n<=0){
    return -1;
}

for(let i = 0; i < n - 1; i++){
    let flag = false;
    for(let j = 0; j < n - i - 1; j++){
        if(arr[j]>arr[j+1]){
            swap(arr, j, j+1);
            flag = true;
        }
    }

    if(!flag){
        break;
    }
}

return arr;


}


const arr = [ 64, 34, 25, 12, 22, 11, 90 ];
console.log(bubbleSort(arr));


