function canJump(nums: number[]): boolean {
    const memo:boolean[] = new Array(nums.length).fill(null)
    return dp(nums.length-1,nums,memo)
};

const dp = (end:number,nums: number[],memo:boolean[]):boolean=>{
    if(end===0) return true
    if(memo[end]!==null) return memo[end]
    for(let i=0;i<=end-1;++i){
        if(nums[i]-end+i>=0&&dp(i,nums,memo)){
            memo[end] = true
            return true
        }
    }
    memo[end] = false
    return false
}
export default canJump