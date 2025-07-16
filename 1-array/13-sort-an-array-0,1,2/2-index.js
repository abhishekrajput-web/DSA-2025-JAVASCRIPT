
    function swapArray(nums, start, end){
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
    }
    
    
    function sortArray(nums){
        let n = nums.length;

        if(n<=0){
            return -1;
        }


        let start = 0;
        let mid = 0;
        let end = n - 1;


        while(mid<=end){

            if(nums[mid]===0){
                swapArray(nums, start, mid);
                start++;
                mid++;
            }
            else if(nums[mid]===1){
                mid++;
            }
            else{
                swapArray(nums, mid, end);
                end--;
            }

        }

        return nums;

    }
    
    const nums = [2,0,2,1,1,0];
    console.log(sortArray(nums));
    console.log(nums);
    