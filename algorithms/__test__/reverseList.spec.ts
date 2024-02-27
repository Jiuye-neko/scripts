import { describe, it, expect } from 'vitest';
import { ListNode, createNodeList, reverseList } from '../reverseList.ts';

describe('反转链表', () => {
  const validList = (expected: number[]) => {
    return (reHead: ListNode | null) => {
      let receive: number[] = [];
      let cur = reHead;
      while (cur) {
        receive.push(cur.val);
        cur = cur.next;
      }
      if (expected.length !== receive.length) {
        return false;
      }
      let isEqual = true;
      for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== receive[i]) {
          isEqual = false;
        }
      }
      return isEqual;
    };
  };

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
