import ListNode from "../class/ListNode";
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry:number = 0
    let p:ListNode|null = l1
    let q:ListNode|null = l2
    while(p&&q){
        const curSum:number = p.val+q.val+carry
        p.val = curSum%10
        carry = curSum>=10?1:0
        //利用l1返回结果，如果l1比l2短则把l2拼接给l1
        if(!p.next){
            p.next = q.next
            //如果l2和l1一样长，且进位还有则补一个节点
            if(!p.next&&carry){
                p.next = new ListNode(0)
            }
            p = p.next
            break
        }
        p = p.next
        q = q.next
    }
    while(carry){
        const curSum:number = p.val + carry
        carry = curSum>=10?1:0
        p.val = curSum%10
        //如果进位还存在，但链表已经遍历完成，则补一个节点
        if(!p.next&&carry){
            p.next = new ListNode(0)
        }
        p = p.next
    }
    return l1
};