function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i:number = m-1
    let j:number = n-1
    let tail:number = m+n-1
    while(j>=0){
        if(nums1[i]>nums2[j]){
            nums1[tail--] = nums1[i--]
        }else{
            nums1[tail--] = nums2[j--]
        }
    }
    while(i>=0){
        nums1[tail--] = nums1[i--]
    }
};