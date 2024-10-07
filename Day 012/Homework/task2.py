"""რიცხვების ჯამი: დაწერეთ პროგრამა, რომელიც მომხმარებელს
სთხოვს რიცხვებს განუწყვეტლივ, სანამ ისინი არ შეიყვანენ 0-ს.
შემდეგ დაბეჭდეთ ყველა შეყვანილი რიცხვის ჯამი."""


sum = 0
num = int(input("Guess a number: "))


while num != 0:
    sum = sum + num
    num = int(input("Guess a number: "))
    if num == 0:
        break

print(sum)
        
