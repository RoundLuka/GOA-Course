#https://www.codewars.com/kata/576bb71bbbcf0951d5000044
def count_positives_sum_negatives(arr):
    neg_sum = 0
    pos_count = 0
    for num in arr:
        if num > 0:
            count += 1
        else:
            neg_sum += num
    res_list = []
    res_list.append(pos_count)
    res_list.append(neg_sum)
    return [pos_count,neg_sum]



