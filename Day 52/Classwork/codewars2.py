"""https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python"""

def sort_array(source_array):
    odd_list = []
    for num in source_array:
        if num % 2 != 0:
            odd_list.append(num)
    odd_list.sort()

    index = 0
    result = []
    for num in source_array:
        if num % 2 != 0:
            result.append(odd_list[index])
            index += 1
        else:
            result.append(num)
    return result