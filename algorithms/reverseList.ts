//  Definition for singly-linked list.

import { ListNode } from './utils/nodeList.ts';

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}
export { ListNode };
