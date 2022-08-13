function groupAnagrams(strs: string[]): string[][] {
    const map:Map<string,string[]> = new Map<string,string[]>()
    const ans:string[][] = []
    for(let e of strs){
        const dict:number[] = new Array(26).fill(0)
        for(let i=0;i<e.length;++i){
            const cur:string = e[i]
            const code:number = cur.charCodeAt(0)
            const index:number = code-97
            dict[index]+=1
        }
        const signStr:string = dict.join(',')
        if(!map.has(signStr)) map.set(signStr,[])
        const arr:string[] = map.get(signStr)!
        arr.push(e)
    }
    for(let [key,val] of map){
        ans.push(val)
    }
    return ans
};

export default groupAnagrams