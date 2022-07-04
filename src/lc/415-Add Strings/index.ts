function addStrings(num1: string, num2: string): string {
    let i:number = num1.length-1
    let j:number = num2.length-1
    let carry:number = 0
    let ans:number[] = [] 
    while(i>=0&&j>=0){
        const n1:number = Number(num1[i--])
        const n2:number = Number(num2[j--])
        const curSum:number = n1+n2+carry
        carry = curSum>=10?1:0
        ans.push(curSum%10)
    }
    let index:number = i>=0?i:j
    let num:string = i>=0?num1:num2
    while(index>=0){
        const n:number = Number(num[index--])
        const curSum:number = n+carry
        carry = curSum>=10?1:0
        ans.push(curSum%10)
    }
    if(carry) ans.push(1)
    return ans.reverse().join('')
};

export default addStrings