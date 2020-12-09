/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let m = s.length;
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(m).fill(0);
    dp[i][i] = 1;
  }
  for (let i = m - 2; i >= 0; i--)
    for (let j = i + 1; j < m; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  return dp[0][m - 1];
};
