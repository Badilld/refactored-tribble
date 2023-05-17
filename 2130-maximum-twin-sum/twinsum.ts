/** https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
* twinsum.ts
* By: Badilld
* Date: 5-17-23
* Description: Given the head of a linked list with even length, return the maximum twin sum of the linked list.
*/


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    var nums: number[] = [];
    while(head != null){
        nums.push(head.val);
        head = head.next;
    }
    var max = 0;
    for(let i = 0; i < nums.length/2; i++){
        if (nums[i] + nums[nums.length-1-i] > max){
            max = nums[i] + nums[nums.length-1-i];
        }
    }
    return max;
};
