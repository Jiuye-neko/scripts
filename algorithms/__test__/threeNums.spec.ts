import { expect, it } from 'vitest';
import { threeSum } from '../threeNums.ts';

it('三数之和', () => {
  expect(threeSum([1, -1, -1, 0])).toEqual([[-1, 0, 1]]);
});
