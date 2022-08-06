function nextPermutation(nums: number[]): void {
    let p:number = -1
    for(let i=nums.length-2;i>=0;--i){
        if(nums[i]<nums[i+1]){
            p = i
            break
        }
    }
    console.log(p)
    if(p===-1){
        reverse(nums,0,nums.length-1)
        return 
    }
    let q:number = -1
    for(let i=nums.length-1;i>p;--i){
        if(nums[i]>nums[p]){
            q = i
            break
        }
    }
    swap(nums,p,q)
    reverse(nums,p+1,nums.length-1)
    return 
};

const swap = (nums:number[],i:number,j:number):void=>{
    const t:number = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}

const reverse = (nums:number[],l:number,r:number):void=>{
    while(l<r){
        swap(nums,l++,r--)
    }
}

export default nextPermutation