#https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python

def to_camel_case(text):
    words = text.replace("-","_").split("_")
    result = words[0]
    words = words[1:]
    for word in words:
        result += word.capitalize()
    return result
    
