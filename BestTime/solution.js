/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0, j = 0, maxP = 0, diff;
    
    for(let k = 1; k < prices.length; k++){
        if(prices[k] < prices[i]) i= k;
        else {
             j = k;
        }
        
        if(j > i) {
            diff = prices[j] - prices[i];
            if(diff > maxP) maxP = diff;
        }
    }
    
    return maxP;
}
/**
 * maxProfit([7,1,5,3,6,4]) => 5
 */