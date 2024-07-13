"""https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python"""
#Replace With Alphabet Position

def alphabet_position(text):
    result = []
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    for char in text.lower():
        if char.isalpha():   
            index = alphabet.index(char) + 1
            result.append(str(index))
    
    return " ".join(result)