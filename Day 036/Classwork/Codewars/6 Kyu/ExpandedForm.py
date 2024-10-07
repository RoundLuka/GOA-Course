"""Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form."""

def expanded_form(num):
    num_str = str(num)
    result = []

    for i in range(len(num_str)):
        digit = int(num_str[i])
        if digit != 0:
            result.append(str(digit * 10 ** (len(num_str) - i - 1)))

    return ' + '.join(result)
    

        

