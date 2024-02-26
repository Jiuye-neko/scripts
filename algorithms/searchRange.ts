export function searchRange(nums: number[], target: number): number[] {
  let start = lower(nums, target);
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1];
  }
  let end = lower(nums, target + 1) - 1;
  return [start, end];
}

function lower(nums: number[], target: number) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
