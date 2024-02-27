import { describe, expect, it } from 'vitest';
import { createNodeList, validList } from '../utils/nodeList.ts';
import { reverseBetween } from '../reverseBetween.ts';

describe('反转部分链表', () => {
  it('[1, 2, 3, 4, 5], 2, 4', () => {
    let head = createNodeList([1, 2, 3, 4, 5]);
    expect(reverseBetween(head, 2, 4)).toSatisfy(validList([1, 4, 3, 2, 5]));
  });

  it('[5], 1, 1', () => {
    let head = createNodeList([5]);
    expect(reverseBetween(head, 1, 1)).toSatisfy(validList([5]));
  });

  it('[3, 5], 1, 2', () => {
    let head = createNodeList([3, 5]);
    expect(reverseBetween(head, 1, 2)).toSatisfy(validList([5, 3]));
  });
});
