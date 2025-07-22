function groupAnagram(arr){

let n = arr.length;

if(n===0){
    return 0;
}

const map = new Map();

for(let str of arr){
    let sortedChar = str.split("").sort().join("");
    if(!map.has(sortedChar)){
        map.set(sortedChar, []);
    }
    map.get(sortedChar).push(str);
}
// return Array.from(map.values());
return [...map];

}

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagram(strs));
