//iteration
import ListNode from "../class/ListNode";
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let p:ListNode|null = list1
    let q:ListNode|null = list2
    const _head:ListNode = new ListNode(-1)
    let cur:ListNode|null = _head
    while(p&&q){
        if(p.val<q.val){
            cur.next = p
            cur = cur.next
            p = p.next
        }else {
            cur.next = q
            cur = cur.next
            q = q.next
        }
    }
    if(p){
        cur.next = p
    }
    if(q){
        cur.next = q
    }
    return _head.next
};