/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0,
    temp = 0;
  for (let i = 0, j = 1; j < prices.length; j++) {
    if (prices[j] > prices[i]) {
      temp = prices[j] - prices[i];
    } else {
      i = j;
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};