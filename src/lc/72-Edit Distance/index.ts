function minDistance(word1: string, word2: string): number {
    const memo:number[][] = new Array(word1.length).fill(0).map(e=>new Array(word2.length).fill(null))
    return dp(word1.length-1,word2.length-1,word1,word2,memo)
};

const dp = (i:number,j:number,word1:string,word2:string,memo:number[][]):number=>{
    if(i===-1) return j+1
    if(j===-1) return i+1
    if(memo[i][j]!==null) return memo[i][j]
    if(word1[i]===word2[j]){
        memo[i][j] = dp(i-1,j-1,word1,word2,memo)
    }else{
        memo[i][j] = Math.min(
            dp(i,j-1,word1,word2,memo),
            dp(i-1,j-1,word1,word2,memo),
            dp(i-1,j,word1,word2,memo),
        )+1
    }
    return memo[i][j]
}

export default minDistance