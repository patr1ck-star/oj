import TreeNode from '../class/TreeNode';

function sumNumbers(root: TreeNode | null): number {
    const ans:string[] = []
    dfs(root,'',ans)
    return ans.map(e=>Number(e)).reduce((a,b)=>a+b,0)
};

const dfs = (node:TreeNode|null,preStr:string,ans:string[]):void=>{
    if(!node) return 
    if(!node.left&&!node.right) {
        ans.push(preStr+node.val)
        return
    }
    dfs(node.left,preStr+node.val,ans)
    dfs(node.right,preStr+node.val,ans)
}

export default sumNumbers