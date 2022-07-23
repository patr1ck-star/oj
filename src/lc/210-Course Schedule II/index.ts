function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph:number[][] = generateGraph(numCourses,prerequisites)
    const visited:number[] = new Array(numCourses).fill(0)
    const path:number[] = new Array(numCourses).fill(0)
    const track:number[] = []
    for(let i=0;i<graph.length;++i){
        const res:boolean = dfs(i,graph,visited,path,track)
        if(!res) return []
    }
    return track.reverse()
};

const generateGraph = (numCourses: number, prerequisites: number[][]):number[][]=>{
    const graph:number[][] = new Array(numCourses).fill(0).map(e=>[])
    for(let e of prerequisites){
        const [course,preCourse] = e
        graph[preCourse].push(course)
    }
    return graph
}

const dfs = (i:number,graph:number[][],visited:number[],path:number[],track:number[]):boolean=>{
    if(path[i]) return false
    if(visited[i]) return true
    visited[i] = 1
    path[i] = 1
    const edges:number[] = graph[i]
    for(let e of edges){
        const res:boolean = dfs(e,graph,visited,path,track)
        if(!res) return false
    }
    track.push(i)
    path[i] = 0
    return true
}

export default findOrder