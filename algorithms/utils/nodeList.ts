export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 生成链表
 * @param nums 输入值
 * @returns 生成的链表的头节点
 */
export const createNodeList = (nums: number[]): ListNode | null => {
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
};

/**
 * 验证反转列表
 * @param expected 预期
 * @returns 是否相等
 */
export const validList = (expected: number[]) => {
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
