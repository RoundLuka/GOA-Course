"""Write a function that takes a list of numbers as input and returns the largest number in the list."""

def largest_int(list):
    new_list = []
    largest_num = max(list)
    new_list.append(largest_num)
    return new_list

print(largest_int([1,2,3,4,5,6]))