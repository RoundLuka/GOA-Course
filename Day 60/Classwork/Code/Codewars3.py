"""https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python"""
#Calculate average

def find_average(numbers):
    if numbers == []:
        return 0
    return sum(numbers)/len(numbers)