"""https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/python"""

def sum_dig_pow(a, b):
    result = []
    for num in range(a,b + 1):
        sum = 0
        num_str = str(num)
        for i in range(len(num_str)):
            sum += int(num_str[i]) ** (i + 1)
        if sum == num:
            result.append(num)
    return result
            
            
