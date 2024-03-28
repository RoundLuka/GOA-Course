"""Area or Perimeter
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/python"""

def area_or_perimeter(l , w):
    if l == w:
        return l * w
    else:
        return 2 * (l + w)