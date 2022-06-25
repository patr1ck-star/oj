//dp
function maxSubArray(nums: number[]): number {
    let curSum:number = 0
    let max:number = -Number.MAX_VALUE
    for(let i=0;i<nums.length;++i){
        curSum = Math.max(curSum+nums[i],nums[i])
        max = Math.max(curSum,max)
    }
    return max
};
export default maxSubArray