#https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    for i in seq:
        if seq.count(i)%2==1:
            return i 