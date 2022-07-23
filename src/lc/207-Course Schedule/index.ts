function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph:number[][] = generateGraph(numCourses,prerequisites)
    const visited:number[] = new Array(numCourses).fill(0)
    const path:number[] = new Array(numCourses).fill(0)
    for(let i=0;i<numCourses;++i){
        const res:boolean = dfs(i,graph,visited,path)
        if(!res) return false
    }
    return true
};

const generateGraph = (numCourses: number, prerequisites: number[][]):number[][]=>{
    const graph:number[][] = new Array(numCourses).fill(0).map(e=>[])
    for(let e of prerequisites){
        const [course,preCourse] = e
        graph[preCourse].push(course)
    }
    return graph
}

const dfs = (i:number,graph:number[][],visited:number[],path:number[]):boolean=>{
    if(path[i]) return false
    if(visited[i]) return true
    visited[i] = 1
    path[i] = 1
    const edges:number[] = graph[i]
    for(let e of edges){
        const res:boolean = dfs(e,graph,visited,path)
        if(!res) return false
    }
    path[i] = 0
    return true
}


export default canFinish