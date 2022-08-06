function generateParenthesis(n: number): string[] {
    const ans:string[] = []
    const track:string[] = []
    backTrack(0,0,0,track,ans,n)
    return ans
};

const backTrack = (i:number,l:number,r:number,track:string[],ans:string[],n:number)=>{
    if(l<r) return 
    if(i===2*n){
        l===r&&ans.push(track.join(''))
        return 
    }
    track.push('(')
    backTrack(i+1,l+1,r,track,ans,n)
    track.pop()

    track.push(')')
    backTrack(i+1,l,r+1,track,ans,n)
    track.pop()
}

export default generateParenthesis