"""https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/python"""
#Reverse a Number

def reverse_number(n):
    if n == 0:
        return 0
    if n > 0:
        str_n = str(n)
        return int(str_n[::-1])
    else:
        str_n = str(n)
        num = str_n[1:]
        reversed_num = int(num[::-1])
        return -reversed_num