




function longestsubstringLength(s){
let n = s.length;
if(n<=0){
    return -1;
}

let map = new Map();

let left = 0; 
let maxLength = 0;
let startIndex = 0;



for (let right = 0; right < n; right++){
    while(map.has(s[right])){
        map.delete(s[left]);
        left++;
    }

    map.set(s[right]);

    if(right-left+1>maxLength){
        maxLength = right - left + 1;
        startIndex = left;
    }

}

return {
length:maxLength,
substring:s.substring(startIndex, startIndex + maxLength)
}

}


const string = "geeksforgeeks";
const result = longestsubstringLength(string);
console.log(result);

