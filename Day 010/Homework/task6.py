"""მომხმარებელს input-ის გამოყენებით შემოატანინეთ ორი რიცხვითი მნიშვნელობა.
შექმენით ჯამის ცვლადი ციკლის გარეთ რომლის საწყისი მნიშვნელობა იქნება 0.
ციკლში start პოზიციად მომხმარებლის შემოტანილი რიცხვებიდან უმცირესი,
ხოლო end პოზიციად უდიდესი აიღეთ. ციკლის მუშაობისას საიტერაციო
ცვლადის მნიშვნელობა გადაეცით ჯამის ცვლადს, რათა გაიგოთ ყველა
ამ რიცხვის ჯამი. საბოლოოდ დაპრინტეთ ჯამი."""


num1 = int(input("Please enter first number: "))
num2 = int(input("Please enter second number: "))

sum = 0

if num1 >= num2:
    for i in range(num2,num1):
        print(i)
        print("Sum of numbers are",sum)
        sum = sum + i
else:
    for i in range(num1,num2):
        print(i)
        print("Sum of numbers are",sum)
        sum = sum + i
