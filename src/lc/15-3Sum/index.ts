function threeSum(nums: number[]): number[][] {
    nums.sort((a,b)=>a-b)
    return nSum(nums,3,0,0)
};

const nSum = (nums:number[],n:number,start:number,target:number):number[][]=>{
    if(n>2){
        const ans:number[][] = []
        for(let i=start;i<nums.length;++i){
            if(i>0&&nums[i]===nums[i-1]) continue
            const res:number[][] = nSum(nums,n-1,i+1,target-nums[i])
            res.forEach(e=>{
                ans.push([
                    nums[i],
                    ...e
                ])
            })
        }
        return ans
    }else{
        return twoSum(nums,start,target)
    }
}

const twoSum = (nums:number[],start:number,target:number):number[][]=>{
    let l:number = start
    let r:number = nums.length-1
    const ans:number[][] = []
    while(l<r){
        const curSum:number = nums[l]+nums[r]
        if(curSum>target){
            while(l<r&&nums[r]===nums[r-1]) --r
            --r
        }else if(curSum<target){
            while(l<r&&nums[l]===nums[l+1]) ++l
            ++l
        }else{
            ans.push([nums[l],nums[r]])
            while(l<r&&nums[l]===nums[l+1]) ++l
            while(l<r&&nums[r]===nums[r-1]) --r
            ++l
            --r
        }
    }
    return ans
}

export default threeSum

