import { describe, expect, it } from 'vitest';
import { createNodeList, validList } from '../utils/nodeList.ts';
import { reverseKGroup } from '../reverseKGroup.ts';

describe('K个一组反转链表', () => {
  it('[1, 2, 3, 4, 5], 2', () => {
    let head = createNodeList([1, 2, 3, 4, 5]);
    expect(reverseKGroup(head, 2)).toSatisfy(validList([2, 1, 4, 3, 5]));
  });

  it('[1, 2, 3, 4, 5], 3', () => {
    let head = createNodeList([1, 2, 3, 4, 5]);
    expect(reverseKGroup(head, 3)).toSatisfy(validList([3, 2, 1, 4, 5]));
  });
});
