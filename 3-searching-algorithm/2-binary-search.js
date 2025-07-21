function binarySearch(arr, target) {
    let n = arr.length;
    if (n === 0) {
      return -1;
    }

    let start = 0;
    let end = n - 1;

    while(start<=end){
        let mid = Math.floor(start+(end-start) / 2);
        if(target>arr[mid]){
            start = mid + 1;
        }

        else if(target<arr[mid]){
            end = mid - 1;
        }

        else {
            return mid;
        }
    }

    return -1;
 
  }
  
  const arr = [1,2,3,4,5];
  const target = 4;
  console.log(binarySearch(arr, target));