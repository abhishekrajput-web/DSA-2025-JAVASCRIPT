function reverseString(string) {
  let n = string.length;
  if (n <= 0) {
    return -1;
  }

  const arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = string[i];
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    newString = newString + arr[i];
  }

  return newString;
}

const string = "abhishek";
const result = reverseString(string);
console.log(result);
