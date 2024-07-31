"""https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python"""
#Simple Pig Latin

def pig_it(text):
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    result = []
    words = text.split()
    for word in words:
            if word[0].upper() in alphabet:
                result.append(word[1:] + word[0] + "ay")
            else:
                result.append(word)
    return " ".join(result)