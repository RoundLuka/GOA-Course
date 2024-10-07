def manual_len(collection):
    count = 0

    for _ in collection:
        count = count + 1
    
    return count

print(manual_len([1,2,3,4,5]))
print(manual_len("Luka"))
print(manual_len(range(10)))