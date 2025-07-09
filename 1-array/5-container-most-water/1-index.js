function findMaxWater(arr){
let n = arr.length;
if(n<=0){
    return 0;
}


let maxArea = 0;
for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        let width = j - i;
       let height = Math.min(arr[i], arr[j]);
        let area = width * height;
        maxArea = Math.max(area, maxArea);
    }
}

return maxArea;

}




height = [1,8,6,2,5,4,8,3,7];
console.log(findMaxWater(height));
