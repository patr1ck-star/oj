function longestPalindrome(s: string): string {
    if(s.length<2) return s
    const dp:boolean[][] = new Array(s.length).fill(0).map(e=>new Array(s.length).fill(true))
    let max:[number,number] = [0,0]
    for(let i=s.length-2;i>=0;--i){
        for(let j=i+1;j<s.length;++j){
            dp[i][j] = s[i]===s[j]&&(j-i<2||dp[i+1][j-1])
            if(dp[i][j]&&j-i>max[1]-max[0]){
                max = [i,j]
            }
        }
    }
    console.log(dp)
    return s.substring(max[0],max[1]+1)
};



export default longestPalindrome