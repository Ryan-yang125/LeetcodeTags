/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums) return;
  let res = (prev = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(nums[i], prev + nums[i]);
    res = Math.max(res, prev);
  }
  return res;
};
