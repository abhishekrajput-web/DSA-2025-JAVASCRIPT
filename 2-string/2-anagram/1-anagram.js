function validAnagram(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;

  if (n1 != n2) {
    return false;
  }

  const map = {};

  for (let char of s1) {
    map[char] = (map[char] || 0) + 1;
  }

  console.log(map);

  for (let char of s2) {
    if (!map[char]) {
      return false;
    }

    map[char] = map[char] - 1;
  }

  return true;
}

const string1 = "nagram";
const string2 = "nagram";

const result = validAnagram(string1, string2);
console.log(result);
