import TreeNode from "../class/TreeNode";
function maxDepth(root: TreeNode | null): number {
    let max:number = 0
    const dfs = (node:TreeNode,depth:number)=>{
        if(!node) return
        max = Math.max(depth+1,max)
        dfs(node.left,depth+1)
        dfs(node.right,depth+1)
    }
    dfs(root,0)
    return max
};