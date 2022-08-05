function trap(height: number[]): number {
    let ans:number = 0
    const l_max_arr:number[] = new Array(height.length).fill(0)
    const r_max_arr:number[] = new Array(height.length).fill(0)
    l_max_arr[0] = height[0]
    r_max_arr[height.length-1] = height[height.length-1]
    for(let i=1;i<height.length;++i){
        l_max_arr[i] = Math.max(height[i],l_max_arr[i-1])
    }
    for(let i=height.length-2;i>=0;--i){
        r_max_arr[i] = Math.max(height[i],r_max_arr[i+1])
    }
    for(let i=0;i<height.length;++i){
        ans+= Math.max(Math.min(l_max_arr[i],r_max_arr[i])-height[i],0)
    }
    return ans
};

export default trap