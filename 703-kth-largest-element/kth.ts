/** https://leetcode.com/problems/kth-largest-element-in-a-stream/
* kth.ts
* By: Badilld
* Date: 5-22-23
* Description: A class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
*/

class KthLargest {
    stream: number[];
    kth: number;

    constructor(k: number, nums: number[]) {
        this.stream = nums.sort();
        this.kth = k;
    }

    add(val: number): number {
        this.stream.push(val);
        this.stream = this.stream.sort(function(x,y) {
            return x-y
        });
        return this.stream[this.stream.length-this.kth];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
