


function reverse(arr, left, right){
while(left<right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
}

function reverseString(str){
let n = str.length;
if(n<=0){
    return -1;
}

let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = str[i];
}


let left = 0;
let right = 0;

while(right <= arr.length){
    if(right == arr.length || arr[right] === " "){
        reverse(arr, left, right-1);
        left = right + 1;
    }
    right = right + 1; 
}




let newString = "";
for(let i = 0; i < arr.length; i++){
    newString = newString + arr[i];
}

return newString;

}


const string = "Let's take LeetCode contest";
const result = reverseString(string);
console.log(result);