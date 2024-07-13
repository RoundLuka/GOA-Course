"""https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python"""
#Split Strings

def solution(s):
    if len(s) % 2 == 1:
        s = s + "_"
    res = ""
    i = 0
    for char in s:
        res += char
        i += 1
        if i % 2 == 0:
            res += "|"
    return (res.split("|"))[:-1]