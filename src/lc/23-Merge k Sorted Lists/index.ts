import ListNode from "../class/ListNode"

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const aux_head:ListNode = new ListNode(-1)
    let ans:ListNode|null = aux_head
    let cnt:number = 0
    const done:Set<number> = new Set()
    while(cnt!==lists.length){
        let min:ListNode = new ListNode(Number.MAX_SAFE_INTEGER)
        let index:number = -1
        for(let i=0;i<lists.length;++i){
            const node:ListNode|null = lists[i]
            if(done.has(i)) continue
            if(!node) {
                ++cnt
                done.add(i)
                continue
            }
            if(min.val>node.val){
                min = node
                index = i
            }
        }
        if(index!==-1){
            lists[index] = lists[index]!.next
            ans.next = new ListNode(min.val)
            ans = ans!.next
        }
    }
    return aux_head.next
};

export default mergeKLists