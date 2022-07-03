function compareVersion(version1: string, version2: string): number {
    const v1:string[] = version1.split('.')
    const v2:string[] = version2.split('.')
    let index:number = 0 
    while(index<v1.length||index<v2.length){
        let a:number = 0
        let b:number = 0
        if(index<v1.length){
            a = Number(v1[index])
        }
        if(index<v2.length){
            b = Number(v2[index])
        }
        ++index
        if(a>b) return 1
        if(a<b) return -1
    }
    return 0
};

export default compareVersion