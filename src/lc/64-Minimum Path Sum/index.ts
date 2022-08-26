function minPathSum(grid: number[][]): number {
    const memo:number[][] = new Array(grid.length).fill(0).map(e=>new Array(grid[0].length).fill(null))
    return dp(grid.length-1,grid[0].length-1,grid,memo)
};

const dp = (i:number,j:number,grid:number[][],memo:number[][]):number=>{
    if(i<0||j<0) return Number.MAX_SAFE_INTEGER
    if(i===0&&j===0) return grid[0][0]
    if(memo[i][j]!==null) return memo[i][j]
    memo[i][j] = Math.min(
        dp(i-1,j,grid,memo),
        dp(i,j-1,grid,memo))+grid[i][j]
    return memo[i][j]
}


export default minPathSum