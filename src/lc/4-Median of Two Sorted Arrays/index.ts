function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m:number = nums1.length
    const n:number = nums2.length
    let i:number = 0
    let j:number = 0
    const even:boolean = (m+n)%2===0
    let k:number = even?(m+n)/2:(m+n+1)/2
    let ans:number = 0
    while(1){
        const _k:number = Math.floor(k/2)
        if(m-i===0||n-j===0) break
        if(k===1){
            ans = Math.min(nums1[i],nums2[j])
            if(even){
                let t:number = 0
                if(nums1[i]<nums2[j]){
                    if(m-i===1) t = nums2[j]
                    else t = Math.min(nums1[i+1],nums2[j])
                }else{
                    if(n-j===1) t = nums1[i]
                    else t = Math.min(nums1[i],nums2[j+1])
                }
                ans = (ans+t)/2
            }
            return ans
        }
        let num1:number = nums1[i+_k-1]
        let num2:number = nums2[j+_k-1]
        let _k2:number = _k
        let i2:number = i+_k
        let j2:number = j+_k
        if(i+_k>m){
            num1 = nums1[nums1.length-1]
            _k2 = num1<num2?nums1.length-i:_k
            i2 = nums1.length
        }else if(j+_k>n){
            num2 = nums2[nums2.length-1]
            _k2 = num1<num2?_k:nums2.length-j
            j2 = nums2.length
        }
        if(num1<num2){
            i = i2
            k-= _k2
        }else{
            j = j2
            k-= _k2
        }
    }
    if(m-i){
        ans = nums1[i+k-1]
        if(even) ans = (ans+nums1[i+k])/2
    }
    if(n-j){
        ans = nums2[j+k-1]
        if(even) ans = (ans+nums2[j+k])/2
    }
    
    return ans
};

export default findMedianSortedArrays