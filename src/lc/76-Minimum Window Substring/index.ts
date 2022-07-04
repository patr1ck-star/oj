function minWindow(s: string, t: string): string {
    if(s.length<t.length) return ''
    const win:Map<string,number> = new Map<string,number>()
    for(let i=0;i<t.length;++i){
        const cur:string = t[i]
        win.set(cur,(win.get(cur)||0)+1)
    }
    let l:number = 0
    let r:number = 0
    let cnt:number = 0
    let max:[number,number] = [0,Number.MAX_VALUE]
    while(r<s.length){
        const rElem:string = s[r++]
        if(win.has(rElem)){
            win.set(rElem,(win.get(rElem)!)-1)
            if(win.get(rElem)===0) ++cnt
        }
        while(cnt===win.size){
            const lElem:string = s[l++]
            if(win.has(lElem)){
                win.set(lElem,(win.get(lElem)!)+1)
                if(win.get(lElem)===1) {
                    if(r-l+1<max[1]-max[0]){
                        max = [l-1,r]
                    }
                    --cnt
                }
            }
        }
    }
    return max[1]===Number.MAX_VALUE?'':s.substring(max[0],max[1])
};

export default minWindow