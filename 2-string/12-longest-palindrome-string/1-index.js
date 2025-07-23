// function expandAroundCenter(s, left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }

//   return right - left - 1;
// }

// function longestPalindrome(str) {
//   let n = str.length;
//   if (!str || n < 1) {
//     return "";
//   }

//   let start = 0;
//   let end = 0;
//   for (let i = 0; i < n; i++) {
//     let length1 = expandAroundCenter(str, i, i);
//     let length2 = expandAroundCenter(str, i, i + 1);
//     let len = Math.max(length1, length2);
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//   }

//   return str.substring(start, end + 1);
// }

// const string = "babad";
// console.log(longestPalindrome(string));


function expandAroundCenter(s, i, j){
while(i>=0 && j < s.length && s[i] === s[j]){
    i--;
    j++;
}
return j - i - 1;
}



function longestPalindromeString(s){
let n = s.length;
if(!s || n < 1){
    return "";
}

let start = 0;
let end = 0;

for(let i = 0; i < n; i++){
    let l1 = expandAroundCenter(s, i, i);
    let l2 = expandAroundCenter(s, i, i+1);
    let l = Math.max(l1, l2);
    if(l > end - start){
        start = i - Math.floor((l-1) / 2);
        end = i + Math.floor(l/2);
    }
}

return s.substring(start,end+1);

}

const string = "babad";
console.log(longestPalindromeString(string));
