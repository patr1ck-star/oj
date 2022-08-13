function rotate(matrix: number[][]): void {
    let start:number = 0
    let len:number = matrix.length
    while(len>1){
        let p1:[number,number] = [start,start]
        let p2:[number,number] = [start,start+len-1]
        let p3:[number,number] = [start+len-1,start+len-1]
        let p4:[number,number] = [start+len-1,start]
        const points:number[][] = [p1,p2,p3,p4]
        for(let i=start;i<start+len-1;++i){
            for(let j=1;j<=3;++j){
                swap(matrix,points[0][0],points[0][1],points[j][0],points[j][1])
            }
            p1[1]+=1
            p2[0]+=1
            p3[1]-=1
            p4[0]-=1
        }
        start+=1
        len-=2
    }
};

const swap = (matrix:number[][],i1:number,j1:number,i2:number,j2:number):void=>{
    const t:number = matrix[i1][j1]
    matrix[i1][j1] = matrix[i2][j2]
    matrix[i2][j2] = t
}

export default rotate