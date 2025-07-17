function validAnagram(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;

  if (n1 != n2) {
    return false;
  }

  let a1 = s1.split("").sort().join("");
  let a2 = s2.split("").sort().join("");

  return a1 === a2;
}

const string1 = "nagram";
const string2 = "nagram";

const result = validAnagram(string1, string2);
console.log(result);
