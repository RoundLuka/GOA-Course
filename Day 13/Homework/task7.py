"""მომხმარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ მისი ციფრთა ჯამი."""

num = (input("Enter a number: "))

length = len(num)

numbers_sum = 0
for i in range(length):
    numbers_sum = numbers_sum + int(num[i])

print(numbers_sum)
    