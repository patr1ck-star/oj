function findKthLargest(nums: number[], k: number): number {
    return nums[findKthLargestIndex(nums,0,nums.length-1,nums.length-k)]
};

const findKthLargestIndex = (nums:number[],l:number,r:number,k:number):number=>{
    if(l>r) return -1
    const index:number = partition(nums,l,r)
    if(index>k){
        return findKthLargestIndex(nums,l,index-1,k)
    }else if(index<k){
        return findKthLargestIndex(nums,index+1,r,k)
    }else{
        return index
    }
}

const partition = (nums:number[],l:number,r:number):number=>{
    let i:number = l
    const rand:number = Math.floor(Math.random()*(r-l+1)+l)
    const target:number = nums[rand]
    while(i<=r){
        if(nums[i]>target){
            swap(nums,r,i)
            --r
        }else if(nums[i]<target){
            swap(nums,l,i)
            ++l
            ++i
        }else{
            ++i
        }
    }
    return r
}

const swap = (nums:number[],i:number,j:number)=>{
    const t:number = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}

export default findKthLargest