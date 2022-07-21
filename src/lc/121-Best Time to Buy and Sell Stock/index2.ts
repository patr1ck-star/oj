//
function maxProfit(prices: number[]): number {
    const memo:number[][][] = new Array(prices.length).fill(0).map(e=>new Array(2).fill(0).map(e2=>new Array(2).fill(null)))
    return dp(prices.length-1,1,0,prices,memo)
};

const dp = (i:number,k:number,j:number,prices: number[],memo:number[][][]):number=>{
    if(i===0){
        if(j===0) return 0
        else return -prices[0]
    }
    if(memo[i][k][j]!==null) return memo[i][k][j]
    if(k===0) {
        let res:number = 0
        if(j===0){
            res = memo[i][k][0] = dp(i-1,k,0,prices,memo)
            return res
        }else{
            res = memo[i][k][1] = Math.max(
                dp(i-1,k,0,prices,memo)-prices[i],
                dp(i-1,k,1,prices,memo)
            )
            return res
        }
    }
    let res:number = 0
    if(j===0){
        res = memo[i][k][0] = Math.max(
            dp(i-1,k,0,prices,memo),
            dp(i-1,k-1,1,prices,memo)+prices[i]
        )
    }else{
        res = memo[i][k][1] = Math.max(
            dp(i-1,k,1,prices,memo),
            dp(i-1,k,0,prices,memo)-prices[i],
        )
    }
    return res
}