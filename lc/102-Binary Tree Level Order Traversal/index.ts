import TreeNode from "../class/TreeNode";
function levelOrder(root: TreeNode | null): number[][] {
    const ans:number[][] = []
    if(!root) return ans
    const queue:TreeNode[] = [root]
    while(queue.length){
        const len:number = queue.length
        const temp:number[] = []
        for(let i=0;i<len;++i){
            const node:TreeNode = queue.shift()
            temp.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        ans.push(temp)
    }
    return ans
};