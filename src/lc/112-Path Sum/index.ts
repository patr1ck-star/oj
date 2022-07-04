import TreeNode from '../class/TreeNode';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return dfs(root,targetSum)
};

const dfs = (node:TreeNode|null,targetSum:number):boolean=>{
    if(!node) return false
    const nextTargetSum:number = targetSum-node.val
    if(!node.left&&!node.right) return nextTargetSum===0
    const l:boolean = dfs(node.left,nextTargetSum)
    if(l) return l
    const r:boolean = dfs(node.right,nextTargetSum)
    if(r) return r
    return false
}

export default hasPathSum