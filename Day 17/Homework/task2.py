"""Write a function that takes a list of strings as input and returns a new list 
containing only the strings that have a length greater than 5."""

def list_filter(list):
    new_list = []
    for i in range(len(list)):
        if len(list[i]) > 5:
            new_list.append(list[i])
        else:
            pass
    return new_list

print(list_filter(["luka","nika","aleqsandre","ioane","irakli"]))
             
    