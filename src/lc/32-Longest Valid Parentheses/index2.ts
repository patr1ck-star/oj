function longestValidParentheses(s: string): number {
    let max:number = 0
    let l:number = 0
    let r:number = 0
    for(let i=0;i<s.length;++i){
        const cur:string = s[i]
        if(cur==='(') ++l
        else ++r
        if(l<r){
            l=0
            r=0
        }else if(l===r){
            max = Math.max(max,l*2)
        }
    }
    l=0
    r=0
    for(let i=s.length-1;i>=0;--i){
        const cur:string = s[i]
        if(cur==='(') ++l
        else ++r
        if(r<l){
            l=0
            r=0
        }else if(l===r){
            max = Math.max(max,l*2)
        }    
    }
    return max
};

export default longestValidParentheses