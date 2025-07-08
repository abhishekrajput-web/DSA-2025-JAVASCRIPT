
function findDuplicate(arr) {
  let n = arr.length;
  if (n <= 0) {
    return -1;
  }

  const set = new Set();

  for(let i = 0; i < n; i++){
    if(set.has(arr[i])){
        return arr[i];
    }
    else{
        set.add(arr[i]);
    }
  }
  return -1;
}
const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
