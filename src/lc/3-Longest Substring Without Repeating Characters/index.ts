function lengthOfLongestSubstring(s: string): number {
    const win:Map<string,number> = new Map<string,number>()
    let l:number = 0
    let r:number = 0
    let max:number = 0
    while(r<s.length){
        const rElem:string = s[r++]
        win.set(rElem,(win.get(rElem)||0)+1)
        while((win.get(rElem)!)>1){
            const lElem:string = s[l++]
            win.set(lElem,(win.get(lElem)!)-1)
        }
        max = Math.max(r-l,max)
    }
    return max
};

export default lengthOfLongestSubstring