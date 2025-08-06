

function intersection(nums1, nums2){
    const set = new Set(nums1);
    const result = new Set();

    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])){
            result.add(nums2[i]);
        }
    }

    return Array.from(result);
    

}

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

console.log(intersection(nums1, nums2));