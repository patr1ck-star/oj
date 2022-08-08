function search(nums: number[], target: number): number {
    let l:number = 0
    let r:number = nums.length-1
    while(l<=r){
        const mid:number = Math.floor((r-l)/2)+l
        const cur:number = nums[mid]
        if(cur===target) return mid
        if(nums[l]<=cur){
            if(cur>target&&nums[l]<=target){
                r = mid -1
            }else{
                l = mid +1
            }
        }else{
            if(cur<target&&target<=nums[r]){
                l = mid +1
            }else{
                r = mid -1
            }
        }
    }
    return -1
};

export default search