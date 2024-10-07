#https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

def is_pangram(s):
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for i in alphabet:
        if i not in s.upper():
            return False
    return True