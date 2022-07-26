function rotateString(s: string, goal: string): boolean {
    if(s.length!==goal.length) return false
    const _goal:string = goal+goal
    for(let i=0;i<_goal.length;++i){
        let j:number = 0
        let k:number = i
        let len:number = 0
        while(k<_goal.length&&j<s.length&&_goal[k++]===s[j++]){
            ++len
        }
        if(len===s.length) return true
    }
    return false
};

export default rotateString