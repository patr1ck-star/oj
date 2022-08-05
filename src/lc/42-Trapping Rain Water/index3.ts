function trap(height: number[]): number {
    let l:number = 0
    let r:number = height.length-1
    let l_max:number = 0
    let r_max:number = 0
    let ans:number = 0
    while(l<=r){
        l_max = Math.max(l_max,height[l])
        r_max = Math.max(r_max,height[r])
        if(l_max<r_max){
            ans+=Math.max(l_max-height[l],0)
            ++l
        }else{
            ans+=Math.max(r_max-height[r],0)
            --r
        }
    }
    return ans
};

export default trap