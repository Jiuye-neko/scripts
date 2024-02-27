import { ListNode } from './utils/nodeList.ts';

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let n = 0;
  let cur = head;
  while (cur) {
    n++;
    cur = cur.next;
  }

  let dummy = new ListNode(0, head);
  let p0 = dummy;
  let pre = null;
  cur = p0.next;

  while (n >= k) {
    n -= k;
    for (let i = 0; i < k; i++) {
      let next = cur!.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }

    let p0Next = p0.next;
    p0.next.next = cur;
    p0.next = pre;
    p0 = p0Next;
  }

  return dummy.next;
}
