/**
 * @param {number} n
 * @return {number}
 */
//BFS
var numSquares = function (n) {
  let q = [];
  let s = new Set();
  q.push([n, 0]);
  s.add(n);
  while (q.length) {
    let node = q.shift();
    let num = node[0];
    let step = node[1];
    for (let i = 1; ; i++) {
      let nextNum = num - i * i;
      if (nextNum == 0) return step + 1;
      else if (nextNum < 0) break;
      else {
        if (!s.has(nextNum)) {
          q.push([nextNum, step + 1]);
          s.add(nextNum);
        }
      }
    }
  }
};
//TODO DP solutions
