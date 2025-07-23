







function buySellStock(arr){
    let n = arr.length;
    if(n===0){
        return [];
    }

    let profit = 0;

    for(let i = 1; i < n; i++){
        if(arr[i]>arr[i-1]){
            profit = profit + arr[i] - arr[i-1];
        }
    }

    return profit;
}


const prices = [7,1,5,3,6,4];
console.log(buySellStock(prices));
