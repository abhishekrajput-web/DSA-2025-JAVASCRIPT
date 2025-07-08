function findDuplicate(arr) {
  let n = arr.length;
  if (n <= 0) {
    return -1;
  }

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}
const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
