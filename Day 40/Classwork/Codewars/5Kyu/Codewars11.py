#https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

def first_non_repeating_letter(s):
    s_low = s.lower()
    for char in s:
        if s_low.count(char.lower()) == 1:
            return char
    return ""