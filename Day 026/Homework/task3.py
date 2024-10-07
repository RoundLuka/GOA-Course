"""3. Manual Min Function: Define a function named manual_min that iterates through list, 
updating a variable with the minimum value, then returns the minimum value found. Use for loop for this task."""


def manual_min(list):
    minimal_number = list[0] #Assuming minimal number is first element in list
    for i in list:
        if minimal_number > i:
            minimal_number = i
    return minimal_number

print(manual_min([3,5,2,37,3,2,2,4,1,9]))


