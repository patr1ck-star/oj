function letterCombinations(digits: string): string[] {
    const map:Map<string,string> = generateMap()
    const ans:string[] = []
    const path:string[] = []
    backTrack(0,digits,map,ans,path)
    return ans
};

const backTrack = (i:number,digits: string,map:Map<string,string>,ans:string[],path:string[])=>{
    if(i===digits.length){
        path.length&&ans.push(path.join(''))
        return
    }
    const curLetters:string = map.get(digits[i])!
    for(let j=0;j<curLetters.length;++j){
        path.push(curLetters[j])
        backTrack(i+1,digits,map,ans,path)
        path.pop()
    }
}

const generateMap = ():Map<string,string>=>{
    const map:Map<string,string> = new Map<string,string>()
    map.set('2','abc')
    map.set('3','def')
    map.set('4','ghi')
    map.set('5','jkl')
    map.set('6','mno')
    map.set('7','pqrs')
    map.set('8','tuv')
    map.set('9','wxyz')
    return map
}

export default letterCombinations