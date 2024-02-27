//  Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createNodeList(nums: number[]): ListNode | null {
  if (nums.length < 1) {
    return null;
  }
  let head = new ListNode(nums[0]);
  let cur = head;
  for (let i = 1; i < nums.length; i++) {
    let next = new ListNode(nums[i]);
    cur.next = next;
    cur = next;
  }

  return head;
}

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
