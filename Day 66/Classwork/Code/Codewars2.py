"""https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31/train/python/"""
#Factorial division

def factorial_division(n, d):
    mult = 1
    for i in range(n,-1,-1):
        if i <= d:
            break
        mult *= i
    return mult
        

