/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N == 1 || N == 0) return N;
  let prev1 = 0,
    prev2 = 1;
  let cur;
  for (let i = 2; i <= N; i++) {
    cur = prev1 + prev2;
    [prev1, prev2] = [prev2, cur];
  }
  return cur;
};
