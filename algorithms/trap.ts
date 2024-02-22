export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let ans = 0;
  let prev: number[] = [];
  let alter: number[] = [];
  let prevMax = 0;
  let alterMax = 0;
  for (let i = 0; i < height.length; i++) {
    prevMax = Math.max(prevMax, height[left]);
    prev.push(prevMax);
    left += 1;

    alterMax = Math.max(alterMax, height[right]);
    alter.unshift(alterMax);
    right -= 1;
  }

  for (let i = 0; i < height.length; i++) {
    ans += Math.abs(Math.min(prev[i], alter[i]) - height[i]);
  }

  return ans;
}

export function trap2(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  let prevMax = height[left];
  let alterMax = height[right];

  while (left < right) {
    if (prevMax < alterMax) {
      ans += prevMax - height[left++];
      prevMax = Math.max(prevMax, height[left]);
    } else {
      ans += alterMax - height[right--];
      alterMax = Math.max(alterMax, height[right]);
    }
  }

  return ans;
}
