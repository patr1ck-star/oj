function compareVersion(version1: string, version2: string): number {
    let i:number = 0
    let j:number = 0
    while(i<version1.length||j<version2.length){
        let v1:number = 0
        let v2:number = 0
        for(;i<version1.length;++i){
            if(version1[i]==='.') {
                ++i
                break
            }
            v1=Number(version1[i])+v1*10
        }
        for(;j<version2.length;++j){
            if(version2[j]==='.') {
                ++j
                break
            }
            v2=Number(version2[j])+v2*10
        }
        if(v1>v2) return 1
        if(v1<v2) return -1
    }
    return 0
};

export default compareVersion
