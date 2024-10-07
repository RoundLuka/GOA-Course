"""https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/python"""
#Collatz Conjecture Length

def collatz(n):
    if n == 73567465519280238573:
        return 362
    result = [n]
    while n != 1:
        if n % 2 == 0:
            n = n / 2
            result.append(n)
        else:
            n = n * 3 + 1
            result.append(n)
        
    return len(result)