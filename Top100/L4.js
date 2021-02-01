/*
 * @Author: your name
 * @Date: 2021-02-01 14:14:05
 * @LastEditTime: 2021-02-01 17:29:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/Top100/L4.js
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  let m = nums1.length,
    n = nums2.length;
  let left = 0,
    right = m;
  while (left <= right) {
    let i = (left + right) >> 1;
    let j = ((m + n + 1) >> 1) - i;
    if (i > 0 && nums1[i - 1] > nums2[j]) right = i - 1;
    else if (i < m && nums2[j - 1] > nums1[i]) left = i + 1;
    else {
      let maxLeft, minRight;
      if (!i) maxLeft = nums2[j - 1];
      else if (!j) maxLeft = nums1[i - 1];
      else maxLeft = Math.max(nums2[j - 1], nums1[i - 1]);
      if ((m + n) % 2) return maxLeft;
      if (i == m) minRight = nums2[j];
      else if (j == n) minRight = nums1[i];
      else minRight = Math.min(nums2[j], nums1[i]);
      return (maxLeft + minRight) / 2;
    }
  }
};
