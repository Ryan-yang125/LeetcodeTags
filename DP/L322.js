/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//recursion with dp table
var coinChange = function (coins, amount) {
  let helper = (num) => {
    if (dp.get(num)) return dp.get(num);
    if (num == 0) return 0;
    if (num < 0) return -1;
    let min = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      sub = helper(num - coin);
      if (sub == -1) continue;
      if (sub < min) min = sub;
    }
    dp.set(num, min == Number.MAX_SAFE_INTEGER ? -1 : min + 1);
    return dp.get(num);
  };
  let dp = new Map();
  dp.set(0, 0);
  return helper(amount);
};
//loop with dp table
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
