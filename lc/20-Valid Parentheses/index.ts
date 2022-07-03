function isValid(s: string): boolean {
    const stack:string[] = []
    const map:Map<string,string> = new Map<string,string>()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    for(let i=0;i<s.length;++i){
        const cur:string = s[i]
        if(map.has(cur)){
            stack.push(cur)
        }else if(stack.length&&map.get(stack[stack.length-1])===cur){
            stack.pop()
        }else{
            return false
        }
    }
    return !stack.length
};

export default isValid