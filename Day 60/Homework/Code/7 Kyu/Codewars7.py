"""https://www.codewars.com/kata/57f609022f4d534f05000024/train/python"""
#Find the stray number

def stray(arr):
    element = arr[0]
    for i in range(len(arr)):
        if element != arr[1] and element != arr[2]:
            return element
        elif element != arr[i]:
            return arr[i]