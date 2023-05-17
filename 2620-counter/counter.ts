/** https://leetcode.com/problems/counter/
* By: Badilld
* Date: 5-16-23
* Description: Simple closure function to solve problem "Counter" on leetcode
*/

function createCounter(n: number): () => number {
    var private_count: number = -1;
    return function() {
        private_count++;
        return n+private_count;
    }
}
