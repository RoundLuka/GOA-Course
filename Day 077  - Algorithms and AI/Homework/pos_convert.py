"""Write function in python which will convert any positional system number to target positional system"""

def position_convert(current_position,target_position,number):
    number_str = str(number)
    dec = 0
    for i,digit in enumerate(reversed(number_str)):
        if int(digit) > current_position - 1:
            return f"Invalid input {digit} isn't possible to be in {current_position} positional system"
        dec += int(digit) * (current_position ** i)
    
    remainders = ""
    while dec > 0:
        remainders += str(dec % target_position)
        dec //= target_position

    res = remainders[::-1]
    return int(res)


    


print(position_convert(5,7,124))