"""https://www.codewars.com/kata/5868812b15f0057e05000001/train/python"""
#Tail Swap

def tail_swap(strings):
    first_arr = strings[0].split(":")
    second_arr = strings[1].split(":")
    
    first_word = first_arr[0] + ":" + second_arr[1]
    second_word = second_arr[0] + ":" + first_arr[1]
    return [first_word,second_word]
   
    
