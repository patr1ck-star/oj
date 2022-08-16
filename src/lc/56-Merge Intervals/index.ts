function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b)=>a[0]===b[0]?b[1]-a[1]:a[0]-b[0])
    const ans:number[][] = [intervals[0]]
    for(let i=1;i<intervals.length;++i){
        const cur:number[] = intervals[i]
        const pre:number[] = ans[ans.length-1]
        if(pre[1]>=cur[0]){
            pre[1] = Math.max(pre[1],cur[1])
        }else{
            ans.push(cur)
        }
    }
    return ans
};

export default merge