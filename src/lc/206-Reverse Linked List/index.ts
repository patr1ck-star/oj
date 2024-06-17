//recursion
import ListNode from '../class/ListNode';
export default function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    const newHead = reverseList(head.next);
    head!.next!.next = head;
    head.next = null;
    return newHead;
}
