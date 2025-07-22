





// function swap(arr, i, j){
// let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp;
// }

// function partition(arr, start, end){
//     let index = start - 1;
//     let pivot = end;
//     for(let j = start; j < end; j++){
//         if(arr[j] <= arr[pivot]){
//             index++;
//             swap(arr, j, index);
//         }
//     }
//     index++;
//     swap(arr, index, end);
//     return index;
// }



// function quickSort(arr, start, end){
//     if(start<end){
//         let pivotIndex = partition(arr,start, end);
//         quickSort(arr, start, pivotIndex - 1);
//         quickSort(arr, pivotIndex+1, end);

//     }
//     return arr;
// }


// const arr = [ 10, 7, 8, 9, 1, 5 ];
// console.log(quickSort(arr, 0, arr.length - 1));











function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end){
let index = start - 1;
let pivot = end;

for(let i = 0; i < end; i++){
    if(arr[i]<=arr[pivot]){
        index++;
        swap(arr, i, pivot);
    }
}

index++;
swap(arr, index, end);
return index;
}



function quickSort(arr, start, end){
    if(start<end){
        let pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex-1);
        quickSort(arr, pivotIndex+1, end);
    }
    
}
    
    const arr = [ 10, 7, 8, 9, 1, 5 ];
    console.log(quickSort(arr, 0, arr.length - 1));
    
    