function canJump(nums: number[]): boolean {
    let maxDistancee:number = 0
    for(let i=0;i<=maxDistancee;++i){
        if(nums[i]+i>=nums.length-1) return true
        maxDistancee = Math.max(maxDistancee,i+nums[i])
    }
    return false
};

export default canJump