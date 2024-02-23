import { describe, expect, it } from 'vitest';
import { lengthOfLongestSubstring } from '../longestSubString.ts';

describe('最长无重复字符字串', () => {
  it('abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
