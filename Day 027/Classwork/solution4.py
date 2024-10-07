def manual_min(number_list):
    min_value = number_list[0]

    for num in number_list:
        if min_value > num:
            min_value = num
    
    return min_value

print(manual_min([1,2,3,4,5]))
