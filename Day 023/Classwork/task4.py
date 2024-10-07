def my_join(join_str, strings_list):
    joined_elemnts = ''

    for word in strings_list:
        joined_elemnts += join_str + word

    return joined_elemnts

print(my_join("+", ["1","2","3"]))