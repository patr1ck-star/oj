import ListNode from "../class/ListNode";
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p:ListNode|null = headA
    let q:ListNode|null = headB
    while(p!==q){
        p = p?p.next:headB
        q = q?q.next:headA
    }
    return p
};
export default getIntersectionNode