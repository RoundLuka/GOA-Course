"""მომხმარებელს input-ის გამოყენებით შემოატანინეთ ორი რიცხვითი მნიშვნელობა.
შემდეგ if წინადადებით შეამოწმეთ რომელია უდიდესი და გამოიყენეთ for ციკლი:
უმცირესიდან უდიდესამდე მოახდინეთ იტერაცია 2-ით და დაპრინტეთ ყველა მნიშვნელობა."""

num1 = int(input("Please enter first number: "))
num2 = int(input("Please enter second number: "))

if num1 >= num2:
    for i in range(num2,num1):
        print(i)
else:
    for i in range(num1,num2):
        print(i)
