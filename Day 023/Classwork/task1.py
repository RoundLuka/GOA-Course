"""1)შექმენით პროგრამა სადაც გექნებათ მოცემული სია, და უნდა დაითვალოთ ამ სიაში 
ლუწი რიცხვები"""

def even_count(list):
    count = 0
    for i in list:
        if i % 2 == 0:
            count += 1
    return count

print(even_count([1,2,3,4,5,6,7,8,8,8,8]))