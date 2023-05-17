/** https://leetcode.com/problems/array-prototype-last
* last.ts
* By: Badilld
* Date: 5-16-23
* Description: Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1. 
*/

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    if(this.length === 0){
        return -1;
    }
    return this.at(-1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
