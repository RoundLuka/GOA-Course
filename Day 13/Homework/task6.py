"""მომხმარებელს შემოატანინეთ ორი რიცხვი. შემდეგ მათ შორის უმცირესი for ციკლში საწყის, 
ხოლო უდიდესი საბოლოო მნიშვნელობად გამოიყენეთ. ციკლში იტერაცია მოახდინეთ ერთით და 
გამოიტანეთ საიტერაციო ცვლადის მესამე ხარისხი (კუბი)."""

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

if num1 > num2:
    for i in range(num2,num1):
        print(i * i * i)

elif num1 < num2:
    for i in range(num1,num2):
        print(i * i * i)
#this would be case if num1 and num2 are equal so it doesn't which one starts for loop so order will do
else:
    for i in range(num1,num2):
        print(i * i * i)
    