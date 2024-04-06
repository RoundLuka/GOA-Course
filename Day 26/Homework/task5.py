"""5. Copy function of reduce: define a function named manual_reduce that takes a list as input, 
then create an empty list named copied_list to store the copied items inside it. 
Then use for loop to loop over each item in the original list, append them to the copied_iterable list. 
In the end, return the copied_iterable after iterating through all items.
finally demonstrate the usage of the manual_reduce function by creating an original list, 
making a copy of it, and printing both the original and copied lists."""

def manual_reduce(list):
    copied_list = []
    for i in list:
        copied_list.append(i)
    list += "]"
    list += "["
    for i in copied_list:
        list.append(i)
    return list 

print(manual_reduce([10, 20, 30]))

    
