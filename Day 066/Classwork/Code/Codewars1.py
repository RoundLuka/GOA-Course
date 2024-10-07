"""https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/python"""
#Merge overlapping strings

def merge_strings(first, second):
    if first == second:
        return first
    res = ""
    index = None
    for i in range(1,len(first) + 1):
        if first[-i:] == second[:i]:
            index = i
    return first + second[index:]
