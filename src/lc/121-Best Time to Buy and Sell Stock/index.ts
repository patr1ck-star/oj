function maxProfit(prices: number[]): number {
    let l:number = 0
    let r:number = 0
    let min:number = Number.MAX_SAFE_INTEGER
    let maxMoney:number = 0
    while(r<prices.length){
        min = Math.min(prices[l],min)
        maxMoney = Math.max(maxMoney,prices[r]-min)
        ++l
        ++r

    }
    return maxMoney
};

export default maxProfit