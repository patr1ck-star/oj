function lengthOfLIS(nums: number[]): number {
    let max:number = 0
    const memo:number[] = new Array(nums.length).fill(null)
    for(let i=0;i<nums.length;++i){
        max = Math.max(max,dp(nums,i,memo))
    }
    return max
};

const dp = (nums:number[],i:number,memo:number[]):number =>{
    if(memo[i]!==null) return memo[i]
    if(i===0) return 1
    let max:number = 1
    for(let j=0;j<i;++j){
        if(nums[i]>nums[j]){
            max = Math.max(max,dp(nums,j,memo)+1)
        }
    }
    memo[i] = max
    return max
}

export default lengthOfLIS