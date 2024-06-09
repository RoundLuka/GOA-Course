"""https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python"""

def maskify(cc):
    if len(cc) < 5:
        return cc
    last = cc[(len(cc) - 4):]
    hash = "#" * (len(cc) - 4)
    return hash + last