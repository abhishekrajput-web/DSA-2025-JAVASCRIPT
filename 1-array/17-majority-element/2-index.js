// FIND MAJORTIY ELEMENT

function findMajorityElement(nums) {
  let n = nums.length;
  if (n === 0) {
    return null;
  }

  nums.sort();
  let majorityElement = nums[Math.floor(n/2)];
  return majorityElement;
}

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(nums));