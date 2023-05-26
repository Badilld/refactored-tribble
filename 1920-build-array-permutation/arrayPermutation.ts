/** https://leetcode.com/problems/build-array-from-permutation/
* arrayPermutation.ts
* By: Badilld
* Date: 5-25-23
* Description: Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
*/

function buildArray(nums: number[]): number[] {
    let ans:number[] = [];
    nums.forEach(num => {
        ans.push(nums[num])
    });
    return ans;
};
