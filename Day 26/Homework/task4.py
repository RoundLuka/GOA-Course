"""4. Manual Len Function: Develop a function named manual_len that iterates through list, counting each element, 
and returns the count as the length of the list. Use for loop for this task."""


def manual_len(list):
    count = 0
    for i in list:
        count += 1
    return count

print(manual_len([7,3,2,363,12,4]))
