function trap(height: number[]): number {
    let ans:number = 0
    for(let i=0;i<height.length;++i){
        let l_max:number = 0
        let r_max:number = 0
        for(let j=0;j<i;++j){
            l_max = Math.max(l_max,height[j])
        }
        for(let j=height.length-1;j>i;--j){
            r_max = Math.max(r_max,height[j])
        }
        ans += Math.max(Math.min(l_max,r_max)-height[i],0)
    }
    return ans
};

export default trap