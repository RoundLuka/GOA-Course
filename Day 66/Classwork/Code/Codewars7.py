"""https://www.codewars.com/kata/57d0089e05c186ccb600035e/train/python"""
#Check if a triangle is an equable triangle!

def equable_triangle(a,b,c):
    s = (a + b + c) / 2
    area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
    return area == a + b + c
    