"""Write a function that takes a list of numbers as input and returns 
a new list containing the square of each number."""

def num_squarer(list):
    new_list = []
    for i in range(len(list)):
        a = list[i] * list[i]
        new_list.append(a)
    return new_list

print(num_squarer([1,2,3,4,5,-6,7]))