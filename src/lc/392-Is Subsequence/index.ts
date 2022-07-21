function isSubsequence(s: string, t: string): boolean {
    let i:number = 0
    let j:number = 0
    while(i<s.length&&j<t.length){
        const curS:string = s[i]
        const curT:string = t[j]
        if(curS===curT) ++i
        ++j
    }
    return i===s.length
};