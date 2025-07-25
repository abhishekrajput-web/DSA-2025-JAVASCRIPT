
function intersectionArray(nums1, nums2){
let n1 = nums1.length;
let n2 = nums2.length;
if(!n1 || !n2){
    return [];
}

nums1.sort((a,b)=> a-b);
nums2.sort((a,b)=> a-b);

let i = 0; 
let j = 0;

const result = [];

while(i<n1 && j<n2){
    if(nums1[i] === nums2[j]){
        result.push(nums1[i]);
        i++;
        j++;
    }
    else if(nums1[i]<nums2[j]){
        i++;
    }
    else{
        j++;
    }
}

return result;
}






const nums1 = [1, 2, 2, 3, 4];
const nums2 = [2, 2, 4, 5];
console.log(intersectionArray(nums1, nums2));
