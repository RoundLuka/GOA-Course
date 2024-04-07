def manual_sum(number_list, starting_value = 0):
    result = starting_value

    for num in number_list:
        result = result + num
    
    return result


print(manual_sum([1,2,3,4,5]))
def manual_sum(number_list):
    result = 0

    for num in number_list:
        result = result + num
    
    return result