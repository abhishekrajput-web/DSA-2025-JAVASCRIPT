function reverseString(string) {
  let n = string.length;
  if (n <= 0) {
    return -1;
  }

  let newString = "";

  for (let i = n - 1; i >= 0; i--) {
    newString = newString + string[i];
  }

  return newString;
}

const string = "abhishek";
const result = reverseString(string);
console.log(result);
