"""https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/python"""
#Bouncing Balls

def bouncing_ball(h, bounce, window):
    if not(h >0) or not(bounce > 0 and bounce < 1) or not(window < h):
        return -1
    count = 0
    while h > window:
        h *= bounce
        count += 2
    return count - 1