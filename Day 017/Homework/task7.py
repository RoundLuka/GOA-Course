"""Write a function that takes a list of strings as input and returns a new 
list containing the lengths of each string."""

def string_char_counter(list):
    new_list = []
    for i in range(len(list)):
        a = len(list[i])
        new_list.append(a)
    return new_list

print(string_char_counter(["luka","nika","tamazi","aleqsandre"]))