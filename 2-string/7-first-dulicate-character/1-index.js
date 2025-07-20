function firstDuplicate(s) {
  let n = s.length;
  if (n <= 0) {
    return -1;
  }

  const map = {};

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < n; i++) {
    if (map[s[i]] > 1) {
      return i;
    }
  }

  return -1;
}

const string = "abcdd";
console.log(firstDuplicate(string));
