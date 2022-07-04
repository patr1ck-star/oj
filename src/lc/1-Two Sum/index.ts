function twoSum(nums: number[], target: number): number[] {
    const map:Map<number,number> = new Map<number,number>()
    for(let i=0;i<nums.length;++i){
        const cur:number = nums[i]
        if(!map.has(cur)){
            map.set(target-cur,i)
        }else{
            return [map.get(cur)!,i]
        }
    }
    return []
};

export default twoSum