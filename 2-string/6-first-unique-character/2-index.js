function firstUniqueChar(s) {
  let n = s.length;
  if (n <= 0) {
    return -1;
  }

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  console.log(map);

  for (let i = 0; i < n; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
const s = "loveleetcode";
console.log(firstUniqueChar(s));
