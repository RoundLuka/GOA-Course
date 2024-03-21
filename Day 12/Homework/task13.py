"""რიცხვების კლასიფიკაცია: შექმენით პროგრამა, სადაც 50-იდან 100-ის
ჩათვლით გამოიტანთ კენტ რიცხვებს. ციკლის გარეთ შექმენით ჯამის ცვლადი,
სადაც დაემატება ციკლის ის რიცხვები, რომლებიც მეტია 75-ზე. ბოლოს
დაპრინტეთ ამ ცვლადის მნიშვნელობა."""

sum = 0
num = 0
print("You'll be given all odd numbers from 50 to 100 and sum of them from 75 to 100")
for i in range(50,99):
    num = i + 2
    if i % 2 == 1:
        num = i + 2
        print("Odd number is",num)
        if num >= 75:
            sum = sum + num
        

print("Sum of odd numbers between 75 and 100 is",sum)
