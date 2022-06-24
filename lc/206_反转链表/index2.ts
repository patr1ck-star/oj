//迭代
import ListNode from "../class/ListNode";
function reverseList(head: ListNode | null): ListNode | null {
    if(!head||!head.next) return head
    let pre:ListNode | null = null
    let cur:ListNode | null = head
    while(cur){
        const t:ListNode | null = cur.next
        cur.next = pre
        pre = cur
        cur = t
    }
    return pre
};