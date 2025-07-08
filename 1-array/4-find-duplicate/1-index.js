function findDuplicate(arr){
let n = arr.length;
if(n<=0){
    return -1;
}
for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        if(arr[i] === arr[j]){
            return arr[i];
        }
    }
}
return -1;
}
const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));




  