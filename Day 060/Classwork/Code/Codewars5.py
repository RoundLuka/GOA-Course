"""https://www.codewars.com/kata/5566b0dd450172dfc4000005/solutions/python"""
#Finding length of the sequence

def length_of_sequence(arr,n):
    if arr.count(n) != 2:
        return 0
    
    first = arr.index(n)
    second = arr.index(n, first + 1)
    
    return second - first + 1