function maxArea(height: number[]): number {
    let l:number = 0
    let r:number = height.length-1
    let ans:number = 0
    while(l<r){
        ans = Math.max(Math.min(height[l],height[r])*(r-l),ans)
        if(height[l]<height[r]) ++l
        else --r
    }
    return ans
};

export default maxArea