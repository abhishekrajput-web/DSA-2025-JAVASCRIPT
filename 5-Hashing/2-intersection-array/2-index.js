






function intersectionArray (nums1, nums2) {
if(!nums1.length || !nums2.length){
    return [];
}

const map = {};
const result = [];


for(let num of nums1){
    map[num] = (map[num] || 0) + 1;
}


for(let num of nums2){
    if(map[num]>0){
        result.push(num);
        map[num] = map[num] - 1;
    }
}


return result;

}


const nums1 = [1, 2, 2, 3, 4];
const nums2 = [2, 2, 4, 5];
console.log(intersectionArray(nums1, nums2));
