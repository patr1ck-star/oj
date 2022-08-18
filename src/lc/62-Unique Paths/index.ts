function uniquePaths(m: number, n: number): number {
    const memo:number[][] = new Array(m).fill(0).map(e=>new Array(n).fill(null))
    return dp(m-1,n-1,memo)
};

const dp = (i:number,j:number,memo:number[][]):number=>{
    if(i<0||j<0) return 0
    if(i===0&&j===0) return 1
    if(memo[i][j]!==null) return memo[i][j]
    memo[i][j] = dp(i-1,j,memo)+dp(i,j-1,memo)
    return memo[i][j]
}

export default uniquePaths