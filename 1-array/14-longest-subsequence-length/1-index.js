// LONGEST CONSEQUETIVE SEQUENCE IN AN UNSORTED ARRAY

// Algorithm - OPTIMISED USING HASHMAP
// Initialize Map:
// Create a Map where each number in the array is a key, set its value to false (unvisited).

// Iterate Through Numbers:
// For each number:

// Skip if already visited.
// Mark the number as visited.
// Initialize currentLength = 1.
// Traverse Forward and Backward:

// Check for consecutive numbers (num + 1) and (num - 1) in the Map.
// For each, increment currentLength and mark them as visited.
// Update Longest Length:
// Update the maximum length (longestLength) with currentLength.

// Return Result:
// Return longestLength after processing all numbers.

// function longestConsecutive(nums) {
//     if (nums.length <= 0) {
//       return 0;
//     }
  
//     // longest length
  
//     let longestLength = 0;
  
//     // create a new map
  
//     const newMap = new Map();
  
//     // store all elements in a map
  
//     for (let num of nums) {
//       newMap.set(num, false);
//     }
  
//     // ignore element if it is already traverse
  
//     for (let num of nums) {
//       if (newMap.get(num)) {
//         continue;
//       }
  
//       let currentLength = 1;
  
//       let nextNum = num + 1;
  
//       while (newMap.has(nextNum) && !newMap.get(nextNum)) {
//         currentLength = currentLength + 1;
//         newMap.set(nextNum, true);
//         nextNum = nextNum + 1;
//       }
  
//       let prevNum = num + 1;
  
//       while (newMap.has(prevNum) && !newMap.get(prevNum)) {
//         currentLength = currentLength + 1;
//         newMap.set(prevNum, true);
//         prevNum = prevNum - 1;
//       }
  
//       longestLength = Math.max(currentLength, longestLength);
//     }
  
//     return longestLength;
//   }
  
//   const nums = [100, 4, 200, 1, 3, 2];
//   const result = longestConsecutive(nums);
//   console.log(result);
  

























function longestLengthSubsequence(nums){
    let n = nums.length;
    if(n<=0){
        return 0;
    }


    let longestConsecutiveLength = 0;

    const map = new Map();

    for(let num of nums){
        map.set(num, false);
    }


    for(let num of nums){
        if(map.get(num)){
            continue;
        }


        let currentLength = 1;

        let nextNum = num + 1;

        while(map.has(nextNum) && !map.get(nextNum)){
            currentLength = currentLength + 1;
            map.set(nextNum, true);
            nextNum = nextNum + 1;
        }

       let prevNum = num - 1;


        while(map.has(prevNum) && !map.get(prevNum)){
            currentLength = currentLength + 1;
            map.set(prevNum, true);
            prevNum = prevNum - 1;
        }
        longestConsecutiveLength = Math.max(longestConsecutiveLength, currentLength);

    }

    return longestConsecutiveLength;

}



  const nums = [100, 4, 200, 1, 3, 2];
  console.log(longestLengthSubsequence(nums));
  
  

