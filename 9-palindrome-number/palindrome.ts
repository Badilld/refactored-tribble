/** https://leetcode.com/problems/palindrome-number/
* palindrome.ts
* By: Badilld
* Date: 5-17-23
* Description: Given an integer x, return true if x is a palindrome, and false otherwise.
* Note: This was a challenge to not utilize strings, otherwise this is much simplier to solve.
*/

function isPalindrome(x: number): boolean {
    var forward: number[] = [];
    var reverse: number[] = [];
    while((x % 10 != 0) || (x/10 != 0)){
        forward.push(x%10);
        reverse.push(x%10);
        if(x<0){
            x = Math.floor((-1*x)/10);
            if(x == 0){
                forward[0] = forward[0] * -1;
            }
        }
        else{
            x = Math.floor(x/10);
        }
    }
    return _.isEqual(forward, reverse.reverse());
};
