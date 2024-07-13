"""https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/python"""
#Sum a list but ignore any duplicates

def sum_no_duplicates(l):
    numbers = []
    for num in l:
        if l.count(num) == 1:
            numbers.append(num)
    return sum(numbers)