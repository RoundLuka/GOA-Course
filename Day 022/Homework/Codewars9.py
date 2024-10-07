"""Counting sheep...
https://www.codewars.com/kata/54edbc7200b811e956000556/train/python"""

def count_sheeps(sheep):
    count = 0
    for i in sheep:
        if i:
            count += 1
    return count
    
    