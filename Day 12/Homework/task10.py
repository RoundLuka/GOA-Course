"""რიცხვების შედარება: დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს
ორ რიცხვს და შეადარებს მათ."""

n1 = int(input("Enter your number: "))
n2 = int(input("Enter your second number: "))

if n1 > n2:
    print("First number is bigger then second")
elif n1 < n2:
    print("Second number is bigger then first")
elif n1 == n2:
    print("Numbers are equal")
else:
    print("Error")

