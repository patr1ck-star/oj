function searchRange(nums: number[], target: number): number[] {
    return [binarySearchLeft(nums,target),binarySearchRight(nums,target)]
};

const binarySearchLeft = (nums: number[], target: number): number=>{
    let l:number = 0
    let r:number = nums.length-1
    while(l<=r){
        const mid:number = Math.floor((r-l)/2)+l
        if(nums[mid]>target){
            r = mid -1
        }else if(nums[mid]<target){
            l = mid +1
        }else {
            r = mid -1
        }
    }
    return nums[l]===target? l:-1
}

const binarySearchRight = (nums: number[], target: number): number=>{
    let l:number = 0
    let r:number = nums.length-1
    while(l<=r){
        const mid:number = Math.floor((r-l)/2)+l
        if(nums[mid]>target){
            r = mid -1
        }else if(nums[mid]<target){
            l = mid +1
        }else {
            l = mid +1
        }
    }
    return nums[r]===target? r:-1
}

export default searchRange