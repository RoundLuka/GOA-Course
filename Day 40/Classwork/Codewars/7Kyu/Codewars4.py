#https://www.codewars.com/kata/5467e4d82edf8bbf40000155
def descending_order(num):
    sorted_num = sorted(str(num))
    return int("".join(sorted_num[::-1]))