/** https://leetcode.com/problems/validate-stack-sequences/
* validate.ts
* By: Badilld
* Date: 11-9-22
* Description: Given two integer arrays pushed and popped each with distinct values, return true if same, else false
*/

function validateStackSequences(pushed: number[], popped: number[]): boolean {
    var i = 0; 
    var num: any;
    var stack = [];
    
    for(let num of pushed){
        stack.push(num);
        while(stack.length > 0 && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i+=1;
        }
    }
    
    return stack.length === 0;
};
