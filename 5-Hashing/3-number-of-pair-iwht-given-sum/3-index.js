


function findPair(arr, target){
    let n = arr.length;
    if(n===0){
        return 0;
    }

    arr.sort((a,b)=> a-b);
    let count = 0;

    let left = 0;
    let right = n - 1;

    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum===target){
            count = count + 1;
            if(arr[left]===arr[left+1]){
                left++;
            }
            else if(arr[right]===arr[right-1]){
                right--;
            }
            else{
                left++;
                right--;
            }
        }
        else if(sum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return count;
}

const arr = [1, 5, 7, -1, 5]
const target = 6;
console.log(findPair(arr,target));