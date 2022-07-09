import TreeNode from '../class/TreeNode';
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) return []
    type operate<T> = (arr:T[],t:T)=>void
    const operations:[operate<number>,operate<number>] = [
        (arr:number[],t:number)=>{arr.push(t)},
        (arr:number[],t:number)=>{arr.unshift(t)}
    ]
    let cnt:number = 0
    const ans:number[][] = []
    const queue:TreeNode[] = []
    queue.push(root)
    while(queue.length){
        const len:number = queue.length
        const temp:number[] = []
        for(let i=0;i<len;++i){
            const node:TreeNode = queue.shift()!
            const curIndex:number = cnt%2
            operations[curIndex](temp,node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        ans.push(temp)
        ++cnt
    }
    return ans
};
export default zigzagLevelOrder