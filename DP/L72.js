/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length;
  let dp = new Array(m + 1);
  //base case
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(0);
    if (i == 0) {
      for (let j = 0; j < n + 1; j++) dp[0][j] = j;
    } else dp[i][0] = i;
  }

  //
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
    }
  return dp[m][n];
};
