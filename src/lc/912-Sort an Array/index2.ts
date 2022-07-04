//merge sort
function sortArray(nums: number[]): number[] {
    const temp:number[] = new Array(nums.length).fill(0)
    sort(nums,0,nums.length-1,temp)
    return nums
};

const sort = (nums: number[],l:number,r:number,temp:number[])=>{
    if(l>=r) return
    const mid:number = Math.floor((r-l)/2)+l
    sort(nums,l,mid,temp)
    sort(nums,mid+1,r,temp)
    merge(nums,l,mid,r,temp)
}

const merge = (nums:number[],l:number,mid:number,r:number,temp:number[])=>{
    for(let i=l;i<=r;++i){
        temp[i] = nums[i]
    }
    let i:number = l
    let j:number = mid+1
    let index:number = l
    while(i<=mid&&j<=r){
        if(temp[i]<temp[j]){
            nums[index++] = temp[i++]
        }else{
            nums[index++] = temp[j++]
        }
    }
    while(i<=mid){
        nums[index++] = temp[i++]
    }
    while(j<=r){
        nums[index++] = temp[j++]
    }
}

export default sortArray