#
# CodeSignal Practice Problem ZigZag Solution
# Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.
# Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. 
# More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
# 

def solution(numbers):
    solution = [0] * (len(numbers)-2)
    i = 0
    while i < (len(numbers) - 2):
        if (numbers[i] < numbers[i+1] > numbers[i+2]) or (numbers[i] > numbers[i+1] < numbers[i+2]):
            solution[i] = 1
        i = i + 1
    return solution
