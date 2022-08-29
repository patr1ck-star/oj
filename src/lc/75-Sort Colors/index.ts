function sortColors(nums: number[]): void {
    const target:number = 1
    let l:number = 0
    let r:number = nums.length-1
    let i:number = 0
    while(i<=r){
        console.log(l,r,i)
        if(nums[i]>target){
            swap(nums,i,r--)
        }else if(nums[i]<target){
            swap(nums,i,l++)
            ++i
        }else{
            ++i
        }
    }
};

const swap = (nums:number[],i:number,j:number)=>{
    const t:number = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}

export default sortColors