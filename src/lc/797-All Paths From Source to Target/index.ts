function allPathsSourceTarget(graph: number[][]): number[][] {
    const ans:number[][] = []
    const path:number[] = [0]
    dfs(0,path,ans,graph)
    return ans
};

const dfs = (i:number,path:number[],ans:number[][],graph: number[][])=>{
    if(i===graph.length-1){
        ans.push([...path])
        return 
    }
    const edges:number[] = graph[i]
    for(let e of edges){
        path.push(e)
        dfs(e,path,ans,graph)
        path.pop()
    }
}