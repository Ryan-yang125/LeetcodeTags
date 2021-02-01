/*
 * @Author: your name
 * @Date: 2021-02-01 13:59:23
 * @LastEditTime: 2021-02-01 14:07:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/Top100/L3.js
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let map = new Map();
  let left = (right = 0);
  let ans = 1;
  while (left <= right && right < s.length) {
    if (!map.has(s[right])) map.set(s[right], right);
    else {
      ans = Math.max(right - left, ans);
      left = Math.max(left, map.get(s[right]) + 1);
      map.set(s[right], right);
    }
    right++;
  }
  return Math.max(right - left, ans);
};
