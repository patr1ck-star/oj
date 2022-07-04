function climbStairs(n: number): number {
    if(n===1) return 1
    let f_1:number = 2
    let f_2:number = 1
    for(let i=3;i<=n;++i){
        const sum:number = f_1+f_2
        f_2 = f_1
        f_1 = sum
    }
    return f_1
};

export default climbStairs