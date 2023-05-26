/** https://leetcode.com/problems/counter-ii/
* counterII.ts
* By: Badilld
* Date: 5-26-23
* Description: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
*/

type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let num = init;
    return {
        increment: () => num+=1,
        decrement: () => num-=1,
        reset: () => num=init,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
