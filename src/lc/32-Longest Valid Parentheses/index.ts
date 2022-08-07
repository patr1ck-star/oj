function longestValidParentheses(s: string): number {
    let max:number = 0
    for(let i=0;i<s.length-1;++i){
        let l:number = 0
        let r:number = 0
        if(s[i]==='(') ++l
        else ++r
        if(l<r) continue
        for(let j=i+1;j<s.length;++j){
            if(s[j]==='(') ++l
            else ++r
            if(l<r) break
            else if(l===r){
                max = Math.max(max,j-i+1)
            }
        }
    }
    return max
};

export default longestValidParentheses