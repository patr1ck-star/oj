import ListNode from "../class/ListNode"
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const aux_head:ListNode = new ListNode(-1,head)
    let p:ListNode|null = aux_head
    for(let i=0;i<n;++i){
        p = p!.next
    }
    let q:ListNode|null = aux_head
    while(p!.next){
        p = p!.next
        q = q!.next
    }
    const t:ListNode|null = q!.next!.next
    q!.next = t
    return aux_head.next
};

export default removeNthFromEnd