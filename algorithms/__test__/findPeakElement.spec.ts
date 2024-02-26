import { describe, expect, it } from 'vitest';
import { findPeakElement } from '../findPeakElement.ts';

describe('寻找峰值', () => {
  const isContain = (ans: number[]) => {
    return (value: number) => {
      return ans.includes(value);
    };
  };

  it('[1, 2, 3, 1]', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
  });

  it('[1, 2, 1, 3, 5, 6, 4]', () => {
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toSatisfy(isContain([1, 5]));
  });

  it('[1, 2]', () => {
    expect(findPeakElement([1, 2])).toBe(1);
  });
});
