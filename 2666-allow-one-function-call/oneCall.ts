/** https://leetcode.com/problems/allow-one-function-call/
* oneCall.ts
* By: Badilld
* Date: 5-17-23
* Description: Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn, n=1) {
    return function(...args){
        if(n){
            n--;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
