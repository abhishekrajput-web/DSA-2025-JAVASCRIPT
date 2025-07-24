// FIND MAJORTIY ELEMENT

function findMajorityElement(nums) {
    let n = nums.length;
    if (n === 0) {
      return null;
    }
  
    let one = 0;
    let two = 0;

    for(let i = 0; i < n;i++){
        if(nums[i] === 1){
            one++;
        }
        if(nums[i]=== 2){
            two++;
        }
    }


    if(one>(n/2)){
        return 1;
    }
    else if(two>(n/2)) {
        return 2;
    }

    return null;
  }
  
  const nums = [2, 2, 1, 1, 1, 2, 2];
  console.log(findMajorityElement(nums));