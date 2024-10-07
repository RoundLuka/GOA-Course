"""2. Manual Max Function: Define a function named manual_max that iterates through list, 
updating a variable with the maximum value, then returns the maximum value found. Use for loop for this task."""

def manual_max(list):
    max_number = list[0] #Assuming max_number is first element in list
    for i in list:
        if max_number < i:
            max_number = i
    return max_number


print(manual_max([1,2,2,2,23,25,7,1,62,124,1,6]))




