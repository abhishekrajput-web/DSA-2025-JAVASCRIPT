



function reverseArray(arr, left, right){
while(left<right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
}

function rotateArray(arr, k){
    let n = arr.length;
    if(n===0 || n===k ){
        return;
    }

    k = k % n;

    reverseArray(arr, 0, n-1);
    reverseArray(arr, 0, k-1);
    reverseArray(arr, k, n-1);

    return arr;
}

const nums = [1,2,3,4,5,6,7];
let k = 3;
console.log(rotateArray(nums, k));
console.log(nums);

