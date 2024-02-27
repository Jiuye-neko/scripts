export function lengthOfLongestSubstring(s: string): number {
  let ans = 0;
  let left = 0;
  let counter: Set<string> = new Set();

  for (let right = 0; right < s.length; right++) {
    let x = s[right];
    while (counter.has(x)) {
      counter.delete(s[left++]);
    }

    counter.add(x);
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
