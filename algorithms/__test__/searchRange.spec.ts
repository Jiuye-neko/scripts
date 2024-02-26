import { expect, it } from 'vitest';
import { searchRange } from '../searchRange.ts';

it('[5, 7, 7, 8, 8, 10], 8', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
});

it('[5, 7, 7, 8, 8, 10], 8', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
});
