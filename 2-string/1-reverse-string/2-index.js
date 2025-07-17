function reverseString(string) {
  let n = string.length;
  if (n <= 0) {
    return -1;
  }

  const stack = [];

  for (let i = 0; i < n; i++) {
    stack.push(string[i]);
  }

  let newString = "";

  while (stack.length > 0) {
    newString = newString + stack.pop();
  }

  return newString;
}

const string = "abhishek";
const result = reverseString(string);
console.log(result);
