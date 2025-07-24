// FIND MAJORTIY ELEMENT

function findMajorityElement(nums) {
    let n = nums.length;
    if (n === 0) {
      return null;
    }
  

    const map = {};


    for(let num of nums){
        map[num] = (map[num] || 0) + 1;
    }

    for(let num in map){
        if(map[num] > n / 2){
            return Number(num);
        }
    }

    return null;

  }
  
  const nums = [2, 2, 1, 1, 1, 2, 2];
  console.log(findMajorityElement(nums));