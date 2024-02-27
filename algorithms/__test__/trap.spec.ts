import { describe, expect, it } from 'vitest';
import { trap } from '../trap.ts';

describe('接雨水', () => {
  it('[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});
