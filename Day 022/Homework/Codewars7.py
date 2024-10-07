"""A Needle in the Haystack
https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/python"""

def find_needle(haystack):
    for i,needle in enumerate(haystack):
        if needle == "needle":
            return f"found the needle at position {i}"
    