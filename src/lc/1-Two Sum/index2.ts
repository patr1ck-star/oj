function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number,number>()
    for(let i=0;i<nums.length;++i){
        const cur = nums[i]
        if(map.has(cur)) return [map.get(nums[i])!,i]
        map.set(target-nums[i],i)
    }
    return []
};

export default twoSum