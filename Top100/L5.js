/*
 * @Author: your name
 * @Date: 2021-02-01 17:38:03
 * @LastEditTime: 2021-02-01 21:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/Top100/L5.js
 */
/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s.length) return s;
  let helper = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    //注意-1而不是+1，因为推出循环时l和r对应的字符不相等
    return r - l - 1;
  };
  let start = (end = 0);
  for (let i = 0; i < s.length; i++) {
    let len1 = helper(s, i, i);
    let len2 = helper(s, i, i + 1);
    let len = Math.max(len1, len2);
    //等号与否决定是否选择最新的字串
    if (len > end - start + 1) {
      start = i - ((len - 1) >> 1);
      end = i + (len >> 1);
    }
  }
  return s.substring(start, end + 1);
};
