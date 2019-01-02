/*
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (41.90%)
 * Total Accepted:    279.8K
 * Total Submissions: 667.9K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  n = ~~n
  if (n < 0) {
    return 0
  } else if (n <= 1) {
    return 1
  } else if (n <= 2) {
    return 2
  }
  let n1 = 1
  let n2 = 2
  let target = 0
  for (let i = 3; i <= n; i++) {
    target = n1 + n2
    n1 = n2
    n2 = target
  }
  return target
}