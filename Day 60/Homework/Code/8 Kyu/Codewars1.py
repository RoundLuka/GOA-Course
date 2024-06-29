"""https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/python"""
#Invert values

def invert(list):
    inverted_list = []
    for num in list:
        inverted_list.append(-num)
    return inverted_list