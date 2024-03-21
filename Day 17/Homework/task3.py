"""Write a function that takes a list of numbers as input and returns a new list 
containing only the even numbers from the original list."""

def only_odds(list):
    new_list = []
    for i in range(len(list)):
        if list[i] % 2 == 0:
            new_list.append(list[i])
        else:
            pass
    return new_list

print(only_odds([1,2,3,4,5,6,7,8,9,10]))
            