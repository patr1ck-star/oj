function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const graph:number[][] = generateGraph(n,dislikes)
    const visited:number[] = new Array(n+1).fill(0)
    for(let i=0;i<n;++i){
        const res:boolean = dfs(i,0,graph,visited)
        if(!res) return false
    }
    return true
};

const dfs = (i:number,color:number,graph:number[][],visited:number[]):boolean=>{
    if(visited[i]) return true
    visited[i] = (color%2)+1
    const edges:number[] = graph[i]
    for(let edge of edges){
        if(visited[edge]){
            if(visited[edge]===visited[i]) return false
        }else{
            const res:boolean = dfs(edge,color+1,graph,visited)
            if(!res) return false
        }
    }
    return true
}

const generateGraph = (n:number,dislikes: number[][]):number[][]=>{
    const graph:number[][] = new Array(n+1).fill(0).map(e=>[])
    for(let dislike of dislikes){
        const [point1,point2] = dislike
        graph[point1].push(point2)
        graph[point2].push(point1)
    }
    return graph
}

export default possibleBipartition