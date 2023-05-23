/** https://leetcode.com/problems/filter-elements-from-array/
* transform.ts
* By: Badilld
* Date: 5-23-23
* Description: Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
*/

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    var filtered:number[] = [];
    arr.forEach(element => {
        if(fn(element, arr.indexOf(element))){
            filtered.push(element);
        }
    });
    return filtered;
};
