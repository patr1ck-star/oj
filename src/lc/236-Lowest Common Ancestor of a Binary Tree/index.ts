import TreeNode from "../class/TreeNode";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!root||root===p||root === q) return root
    const l:TreeNode | null = lowestCommonAncestor(root.left,p,q)
    const r:TreeNode | null = lowestCommonAncestor(root.right,p,q)
    if(l&&r) return root
    else if(l&&!r) return l
    else if(!l&&r) return r
    else return null
};


export default lowestCommonAncestor