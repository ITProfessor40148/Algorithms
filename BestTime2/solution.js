/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = 0
    let pricePaid = 0
    let holding = false
    
    prices.forEach((p, i) => {
        if (prices[i+1] > p && !holding) {
		    /* Buy */
            holding = true
            pricePaid = p
        } else if ((p > prices[i+1] || i === prices.length - 1)  && holding) {
		    /* Sell, taking profits less price paid */
            profits += p
            profits -= pricePaid
            holding = false
            pricePaid = 0
        }
    })
    return profits
};
/**
 * maxProfit([7,1,5,3,6,4]) => 7;
 * maxProfit([1,2,3,4,5]) => 4;
 * maxProfit([7,6,4,3,1]) => 0;

 */