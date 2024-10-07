"""https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python"""

def digitize(n):
    digit_list = []
    for char in str(n):
        digit_list.append(int(char))
    return digit_list[::-1]
  