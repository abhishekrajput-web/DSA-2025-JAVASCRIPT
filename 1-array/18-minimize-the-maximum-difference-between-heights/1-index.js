






function minimumDifferenceHeight(arr, k){
if(arr.length===1){
    return 0;
}

arr.sort((a,b)=> a-b);

let ans = arr[arr.length-1] - arr[0];
let small = arr[0] + k;
let large = arr[arr.length-1] - k;


for(let i = 0; i < arr.length - 1; i++){
    let min = Math.min(small, arr[i+1]-k);
    let max = Math.max(large, arr[i]+k);
    if(min<0){
        continue;
    }

    ans =  Math.min(ans, max-min);
}
return ans;
}

const arr = [12, 6, 4, 15, 17, 10];
const k = 6;
console.log(minimumDifferenceHeight(arr, k ));
