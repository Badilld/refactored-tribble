/** https://leetcode.com/problems/create-hello-world-function/
* hello.ts
* By: Badilld
* Date: 5-17-23
* Description: Create a function that always returns hello world, (so easy)
*/

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
