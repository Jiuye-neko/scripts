import { ListNode } from './utils/nodeList.ts';

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) {
    return head;
  }

  let dummy: ListNode = new ListNode(0, head);
  let p0: ListNode | null = dummy;
  let i = 1;
  while (p0 && i < left) {
    p0 = p0.next;
    i++;
  }

  let pre = null;
  let cur = p0?.next;
  while (cur && i <= right) {
    let next = cur.next || null;
    cur.next = pre;
    pre = cur;
    cur = next;
    i++;
  }

  if (p0) {
    if (p0.next) {
      p0.next.next = cur || null;
    }
    p0.next = pre;
  }

  return dummy.next;
}
