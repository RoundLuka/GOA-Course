"""https://www.codewars.com/kata/587731fda577b3d1b0001196/train/python"""
#CamelCase Method

def camel_case(s):
    string = ""
    word_list = s.split(" ")
    for word in word_list:
        string += word.capitalize()
    return string