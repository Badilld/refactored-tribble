# https://leetcode.com/problems/move-zeroes/
# moveZeros.py
# By: Badilld
# Date: 9-18-23
# Description: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
#

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        numZero = nums.count(0)
        i = 0
        while i < numZero:
            i += 1
            nums.remove(0)
        i = 0
        while i < numZero:
            nums.append(0)
            i += 1
