#https://www.codewars.com/kata/59daf400beec9780a9000045/train/python

def name_in_str(strng,name):
    strng = strng.lower()
    name = name.lower()
    i = 0
    for j in range(len(strng)):
        if name[i] == strng[j]:
            i += 1
            if i == len(name):
                return True
    return False

