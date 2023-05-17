/** https://leetcode.com/problems/apply-transform-over-each-element-in-array/
* promise.ts
* By: Badilld
* Date: 5-17-23
* Description: Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var i = 0;
    arr.forEach((value) => {
        arr[i] = fn(value, i);
        console.log(arr);
        i++;
    });
    return arr;
};
