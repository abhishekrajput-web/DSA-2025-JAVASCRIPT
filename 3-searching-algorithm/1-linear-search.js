function linearSearch(arr, target) {
  let n = arr.length;
  if (n <= 0) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [10, 8, 30, 4, 5];
const target = 4;
console.log(linearSearch(arr, target));
