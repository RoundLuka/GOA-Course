"""https://www.codewars.com/kata/52af7bf41f5a1291a6000025/train/python"""
#Milk and Cookies for Santa

def time_for_milk_and_cookies(dt):
    if dt.day == 24 and dt.month == 12:
        return True
    return False