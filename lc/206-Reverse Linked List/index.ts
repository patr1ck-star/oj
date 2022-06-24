//recursion
import ListNode from "../class/ListNode";
function reverseList(head: ListNode | null): ListNode | null {
    if(!head||!head.next) return head
    const newHead:ListNode = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
};