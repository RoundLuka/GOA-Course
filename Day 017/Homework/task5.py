"""Write a function that takes a list of strings as input and returns a new list 
containing only the strings that start with the letter 'a'."""

def a_only(list):
    new_list = []
    for i in range(len(list)):
        if list[i][0] == "a":
            new_list.append(list[i])
        else:
            pass
    return new_list

print(a_only(["anna","mari","aleqsandre","luka"]))