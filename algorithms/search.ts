export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  const isRight = (mid: number) => {
    let end = nums[nums.length - 1];
    if (nums[mid] <= end) {
      return target <= end && target > nums[mid];
    } else {
      return target > nums[mid] || target <= end;
    }
  };

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isRight(mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left === nums.length || nums[left] !== target ? -1 : left;
}
