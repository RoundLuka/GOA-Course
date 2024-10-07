"""Write a function that takes a list of numbers as input and returns the sum of 
all the numbers that are greater than 10."""

def sum_above_10(list):
    new_list = []
    for i in range(len(list)):
        if list[i] > 10:
            new_list.append(list[i])
        else:
            pass
    return sum(new_list)

print(sum_above_10([1,7,9,12,14,16]))