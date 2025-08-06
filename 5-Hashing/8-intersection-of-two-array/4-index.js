

function intersection(nums1, nums2){
    const map = {};
    const result = [];

    for(let num of nums1){
        map[num] = (map[num] || 0) + 1;
    }

    for(let num of nums2){
    if(map[num] > 0){
        result.push(num);
        map[num] = map[num] - 1;
    }
    }

    return result;
  }
  
  const nums1 = [4,9,5];
  const nums2 = [9,4,9,8,4];
  
  console.log(intersection(nums1, nums2));