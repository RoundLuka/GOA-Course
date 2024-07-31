"""https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python"""
#Does my number look big in this?

def narcissistic(value):
    sum = 0
    for digit in str(value):
        sum += int(digit) ** len(str(value))
    return value == sum