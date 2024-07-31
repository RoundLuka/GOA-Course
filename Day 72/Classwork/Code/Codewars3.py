"""https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python"""
#Directions Reduction

def dir_reduc(arr):
    completed_list = []
    opposites = {"NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"}

    for i in arr:
        if len(completed_list) != 0 and completed_list[-1] == opposites[i]:
            completed_list.pop() 
        else:
            completed_list.append(i)

    return completed_list