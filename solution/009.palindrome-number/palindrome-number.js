/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let t = x;
  let sum = 0;
  let flag = 0;
  if (x < 0) {
    return 0;
  }
  while (x != 0) {
    sum = sum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (flag == 1) sum = -sum;
  if (sum == t) return 1;
  else return 0;
};