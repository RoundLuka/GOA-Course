"""https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/python"""
#Round up to the next multiple of 5

def round_to_next5(n):
    for i in range(n,n + 5):
        if i % 5 == 0:
            return i