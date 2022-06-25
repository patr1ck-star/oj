function search(nums: number[], target: number): number {
    let l:number = 0
    let r:number = nums.length-1
    while(l<=r){
        const mid:number = Math.floor((r-l)/2)+l
        if(nums[mid]<target){
            l = mid+1
        }else if(nums[mid]>target){
            r = mid-1
        }else if(nums[mid]===target){
            return mid
        }
    }
    return -1
};

export default search