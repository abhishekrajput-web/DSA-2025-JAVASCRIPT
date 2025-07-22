function merge(arr, start, mid, end) {
  let i = start;
  let j = mid + 1;
  let temp = [];

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[i + start] = temp[i];
  }
}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  return arr;
}

const arr = [38, 27, 43, 10];
console.log(mergeSort(arr, 0, arr.length - 1));






















