

function swap(arr, i, j){
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}

function selectionSort(arr){
    let n = arr.length;
    if(n<=0){
        return -1;
    }

    for(let i = 0; i < n-1; i++){
        let minIndex = i;
        for(let j = i+1; j < n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex!==i){
            swap(arr, i, j);
        }
        
    }

    return arr;
}




const arr = [ 64, 34, 25, 12, 22, 11, 90 ];
console.log(selectionSort(arr));