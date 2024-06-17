import ListNode from '../lc/class/ListNode';
export function printListNode(list: ListNode | null) {
    let p = list;
    while (p) {
        console.log(p.val);
        p = p.next;
    }
}
