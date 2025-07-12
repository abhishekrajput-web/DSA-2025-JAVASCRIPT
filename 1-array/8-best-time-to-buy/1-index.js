

function bestTimeToBuySellStocks(prices){
   let n = prices.length;
   if(n<=0){
    return 0;
   }

   let buyPrice = prices[0];
   let profit = 0;

   for(let i = 1; i < n; i++){
    if(prices[i] < buyPrice){
        buyPrice = prices[i];
    }
    else{
        let currentProfit = prices[i] - buyPrice;
        profit = Math.max(profit, currentProfit);
    }
   }

   return profit;
}
const prices = [7,1,5,3,6,4];
console.log(bestTimeToBuySellStocks(prices));
