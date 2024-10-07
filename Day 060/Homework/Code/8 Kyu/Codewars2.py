"""https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/python"""
#Sentence Smash

def smash(words):
    new_str = ""
    for word in words:
        new_str += word + " "
    return new_str[0:len(new_str) - 1]