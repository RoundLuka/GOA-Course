"""Sum without highest and lowest number
https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/python"""

def sum_array(arr):
    if arr is None or len(arr) == 0:
        return 0
    elif len(arr) == 1:
        return 0
    else:
        a = min(arr)
        b = max(arr)
        return sum(arr) - a - b