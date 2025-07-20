function findAllDuplicate(string){
let n = string.length;
if(n<=0){
    return -1;
}

const result = [];

const map = {};

for(let char of string){
    map[char] = (map[char] || 0) + 1;
    if(map[char] === 2){
        result.push(char);
    }
}
return result;
}
const string = "abcdeda";
console.log(findAllDuplicate(string));
