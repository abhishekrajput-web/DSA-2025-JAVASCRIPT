

function intersection(nums1, nums2){
    nums1.sort((a,b)=> a-b);
    nums2.sort((a,b)=> a-b);

    const result = [];
    let i = 0; 
    let j = 0;

    while(i < nums1.length && j < nums2.length){
        if(nums1[i] === nums2[j]){
            if(result.length === 0 || result[result.length-1]!== nums1[i]){
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
        else if(nums1[i] < nums2[j]){
            i++;
        }
        else{
            j++;
        }
    }

    return result;
  
  }
  
  const nums1 = [4,9,5];
  const nums2 = [9,4,9,8,4];
  
  console.log(intersection(nums1, nums2));