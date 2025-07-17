function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let n = s.length;
  if (n === 0) {
    return true;
  }

  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const string = "A man, a plan, a canal: Panama";
const result = isPalindrome(string);
console.log(result);
