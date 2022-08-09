function combinationSum(candidates: number[], target: number): number[][] {
    const track:number[] = []
    const ans:number[][] = []
    backTrack(0,target,candidates,track,ans)
    return ans
};

const backTrack = (start:number,target:number,candidates: number[],track:number[],ans:number[][])=>{
    if(target===0){
        ans.push([...track])
        return 
    }
    for(let i=start;i<candidates.length;++i){
        if(target-candidates[i]<0) continue
        track.push(candidates[i])
        backTrack(i,target-candidates[i],candidates,track,ans)
        track.pop()
    }
}

export default combinationSum