/**
 * @param {number} n
 * @return {number}
 */
//dp
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
};
//recursion
var numTrees = function (n) {
  let dfs = (n) => {
    if (map.get(n)) return map.get(n);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += dfs(i - 1) * dfs(n - i);
    }
    map.set(n, sum);
    return sum;
  };
  let map = new Map();
  map.set(0, 1);
  map.set(1, 1);
  return dfs(n);
};
