function permute(nums: number[]): number[][] {
    const track:number[] = []
    const map:Map<number,number> = new Map<number,number>()
    const ans:number[][] = []
    backTrack(nums,track,map,ans)
    return ans
};

const backTrack = (nums: number[],track:number[],map:Map<number,number>,ans:number[][])=>{
    if(track.length===nums.length){
        ans.push([...track])
        return 
    }
    for(let i=0;i<nums.length;++i){
        if(map.has(i)) continue  
        track.push(nums[i])
        map.set(i,1)
        backTrack(nums,track,map,ans)
        map.delete(i)
        track.pop()
    }
}

export default permute