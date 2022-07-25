function isBipartite(graph: number[][]): boolean {
    const visited:number[] = new Array(graph.length).fill(0)
    for(let i=0;i<graph.length;++i){
        const res:boolean = dfs(i,0,graph,visited)
        if(!res) return false
    }
    return true
};

const dfs = (i:number,color:number,graph:number[][],visited:number[]):boolean=>{
    if(visited[i]) return true
    visited[i] = color%2+1
    const edges:number[] = graph[i]
    for(let e of edges){
        if(visited[e]){
            if(visited[e]===visited[i]) return false
        }else{
            const res:boolean = dfs(e,color+1,graph,visited)
            if(!res) return false
        }
    }
    return true
}

export default isBipartite