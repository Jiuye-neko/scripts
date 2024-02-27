import { describe, it, expect } from 'vitest';
import { reverseList } from '../reverseList.ts';
import { createNodeList, validList } from '../utils/nodeList.ts';

describe('反转链表', () => {
  it('[1, 2, 3, 4, 5]', () => {
    let head = createNodeList([1, 2, 3, 4, 5]);
    expect(reverseList(head)).toSatisfy(validList([5, 4, 3, 2, 1]));
  });
  it('[1, 2]', () => {
    let head = createNodeList([1, 2]);
    expect(reverseList(head)).toSatisfy(validList([2, 1]));
  });
  it('[]', () => {
    let head = createNodeList([]);
    expect(reverseList(head)).toSatisfy(validList([]));
  });
});
