"""Creating manual function simialr to in operator"""

def check_if_in(collection,value):
    for item in collection:
        if item == value:
            return True
    return False

number_list = [2,6,1,72,1]

print(check_if_in(number_list,6))