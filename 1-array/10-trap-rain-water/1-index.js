// TRAP RAIN WATER 


function trapRainwater(height){
let n = height.length;
if(n<=0){
    return 0;
}

let answer = 0;
let left = 0;
let right = n - 1;
let leftMax = 0, rightMax = 0;


while(left < right){
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if(leftMax < rightMax){
        answer = answer + (leftMax - height[left]);
        left++;
    }
    else{
        answer = answer + (rightMax - height[right]);
        right--;
    }
}

return answer;

}


const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trapRainwater(height));

