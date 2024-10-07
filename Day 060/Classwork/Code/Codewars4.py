"""https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/python"""
#V A P O R C O D E

def vaporcode(s):
    chars = []
    for char in s:
        if char != " ":
            chars.append(char)
    res = chars[0].upper()
    for i in range(1,len(chars)):
        res += "  " + chars[i].upper()
    return res