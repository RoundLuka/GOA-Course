"""3) იპოვეთ სიაში ბოლო ლუწი რიცვხის ინდექსი """

def even_index(list):
    for i in range(len(list) - 1,-1,-1):
        if list[i] % 2 == 0:
            return list[i]


print(even_index([1,2,3,4,5,6,7]))