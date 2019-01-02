/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
      let sum = 0, carry = 0;
      if (b == 0)
        return a;
      sum = a ^ b;
      carry = (a & b) << 1;
      return getSum(sum, carry);
    };