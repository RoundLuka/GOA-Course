"""1. Manual Sum Function: Create a function called manual_sum that iterates over list and adds their sum in a variable, 
then returns variable. Use for loop for this task."""

def manual_sum(list):              #Assuming argument list only contains integer type values
    sum = 0
    for i in list:
        sum += i
    return sum

print(manual_sum([1,2,3,4,5,6,7,8,9,10]))



