class Solution {
    numsCopy:number[] = []
    nums:number[] = []
    constructor(nums: number[]) {
        this.nums = nums
        this.numsCopy = [...nums]
    }

    reset(): number[] {
        this.nums = [...this.numsCopy]
        return this.nums
    }

    shuffle(): number[] {
        for(let i=this.nums.length-1;i>=1;--i){
            const rand:number = Math.floor(Math.random()*(i+1))
            this.swap(this.nums,rand,i)
        }
        return this.nums
    }

    swap(arr:number[],i:number,j:number){
        const t:number = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }
}


export default Solution