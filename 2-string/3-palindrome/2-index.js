function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let n = s.length;
  if (n === 0) {
    return true;
  }

  let reverse = s.split("").reverse().join("");

  return s === reverse;
}

const string = "A man, a plan, a canal: Panama";
const result = isPalindrome(string);
console.log(result);
