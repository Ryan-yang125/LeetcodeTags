/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let n = s.length;
  if (!n || n === 1) return 0;
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  for (let i = n - 2; i >= 0; i--)
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1];
      else dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
    }
  return dp[0][n - 1];
};
