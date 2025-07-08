function findDuplicate(arr) {
    let n = arr.length;
    if (n <= 0) {
      return -1;
    }


    let slow = 0;
    let fast = 0;

    do{
        slow = arr[slow];
        fast = arr[arr[fast]];
    }while(slow!==fast)

        slow = arr[0];

        while(slow!==fast){
            slow = arr[slow];
            fast = arr[fast];
        }

        return slow;
  

  }
  const nums = [1, 3, 4, 2, 2];
  console.log(findDuplicate(nums));