"""Is it a palindrome?
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/python"""

def is_palindrome(s):
    a = s[::-1]
    if a.lower() == s.lower():
        return True
    else:
        return False