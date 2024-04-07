def manual_max(number_list):
    max_value = number_list[0]

    for num in number_list:
        if max_value < num:
            max_value = num
    
    return max_value

print(manual_max([1,2,3,4,5]))

