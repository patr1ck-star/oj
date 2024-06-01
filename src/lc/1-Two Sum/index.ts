function twoSum(nums: number[], target: number): number[] {
    const targetMap = new Map<number, number>();
    for (let i = 0; i < nums.length; ++i) {
        const cur = nums[i];
        if (targetMap.has(cur)) {
            return [targetMap.get(cur)!, i];
        }
        const diff = target - cur;
        targetMap.set(diff, i);
    }
    return [-1, -1];
}

export default twoSum;
