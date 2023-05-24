/** https://leetcode.com/problems/array-reduce-transformation/
* arrReduce.ts
* By: Badilld
* Date: 5-24-23
* Description: Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
    let val = init;
    nums.forEach( num => {
        val = fn(val, num);
    });
    return val;
};
