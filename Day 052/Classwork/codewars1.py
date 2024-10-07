"""https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python"""

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    arr = [0,0]
    for direction in walk:
        if direction == "n":
            arr[0] += 1
        elif direction == "s":
            arr[0] -= 1
        elif direction == "w":
            arr[1] += 1
        elif direction == "e":
            arr[1] -= 1
    return arr == [0,0]