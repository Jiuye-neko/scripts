export function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);

  let ans: number[][] = [];
  let len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    let x = nums[i];
    if (i > 0 && x === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      let sum = x + nums[j] + nums[k];

      if (sum < 0) {
        j += 1;
      } else if (sum > 0) {
        k -= 1;
      } else {
        ans.push([x, nums[j], nums[k]]);

        j += 1;
        while (j < k && nums[j] === nums[j - 1]) {
          j += 1;
        }
        k -= 1;
        while (j < k && nums[k] === nums[k + 1]) {
          k -= 1;
        }
      }
    }
  }

  return ans;
}
