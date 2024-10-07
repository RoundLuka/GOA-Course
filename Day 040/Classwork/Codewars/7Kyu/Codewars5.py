#https://www.codewars.com/kata/558fc85d8fd1938afb000014
def sum_two_smallest_numbers(numbers):
    min_1 = min(numbers)
    min_2 = 0
    numbers_list = []
    for i in numbers:
        if i != min_1:
            numbers_list.append(i)
    min_2 = min(numbers_list)
    return min_1 + min_2