function mergeOverlappingIntervals(intervals){
let n = intervals.length;
if(n<=1){
    return intervals;
}


intervals.sort((a, b)=> a[0] - b[0]);
const mergedIntervals = [intervals[0]];

for(let i = 1; i < n; i++){
    let lastInterval = mergedIntervals[mergedIntervals.length - 1];
    let currentInterval = intervals[i];

    if(currentInterval[0] <= lastInterval[1]){
        lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    }
    else{
        mergedIntervals.push(currentInterval);
    }
}

return mergedIntervals;
}



const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeOverlappingIntervals(intervals));

