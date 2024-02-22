import { describe, expect, it } from 'vitest';
import { trap } from '../trap.ts';

describe('接雨水', () => {
  let q1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  it('trap1', () => {
    expect(trap(q1)).toBe(6);
  });
  it('trap2', () => {
    expect(trap(q1)).toBe(6);
  });
});
