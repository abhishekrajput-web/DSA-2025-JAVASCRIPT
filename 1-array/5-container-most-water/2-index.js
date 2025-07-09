function findMaxWater(arr) {
  let n = arr.length;
  if (n <= 0) {
    return 0;
  }

let maxArea = 0;
let left = 0;
let right = n - 1;

while(left < right){
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = height * width;
    maxArea = Math.max(maxArea, area);
if(arr[left] < arr[right]){
    left++;
}
else{
    right--;
}
}
  return maxArea;
}

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(findMaxWater(height));
