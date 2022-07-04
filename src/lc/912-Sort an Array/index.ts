//quick sort
function sortArray(nums: number[]): number[] {
    quickSort(nums,0,nums.length-1)
    return nums
};

const quickSort = (nums:number[],l:number,r:number)=>{
    if(l>=r) return 
    const index:number = partition(nums,l,r)
    quickSort(nums,l,index-1)
    quickSort(nums,index+1,r)
}

const partition = (nums:number[],l:number,r:number):number=>{
    const rand:number = Math.floor(Math.random()*(r-l+1))+l
    const target:number = nums[rand]
    let i:number = l
    while(i<=r){
        if(nums[i]<target){
            swap(nums,i,l)
            ++i
            ++l
        }else if(nums[i]>target){
            swap(nums,i,r)
            --r
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

export default sortArray