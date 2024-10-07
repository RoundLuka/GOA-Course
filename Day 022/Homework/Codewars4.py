"""Grasshopper - Check for factor
https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/python"""

def check_for_factor(base, factor):
    if base%factor == 0:
        return True
    else:
        return False