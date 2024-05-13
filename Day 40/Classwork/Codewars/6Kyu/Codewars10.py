#https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

def duplicate_encode(word):
    list = []
    res_str = ""
    for char in word.lower():
        list.append(char)
    for char in list:
        if list.count(char) == 1:
            res_str += "("
        else:
            res_str += ")"
    return res_str