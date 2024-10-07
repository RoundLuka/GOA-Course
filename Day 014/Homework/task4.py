"""დავალება4) მომხმარებელს შეეკითხეთ ორი მთელი რიცხვი, შემდეგ ამ ორი ცვლადიდან for ციკლში
უმცირესი ჩასვის start-ის, ხოლო უდიდესი end-ის პოზიციაზე, step არ გინდათ. ახლა ჩაურთეთ 
if statement და დაპრინტეთ მარტო ხუთის ჯერადები.Ask user for two inputs and store them as 
variables, their type has to be int. Then use for loop, use lower number from this two 
variables as start, Higher number as end, you do not need step. After that, you'll have 
to use if statement to only print multiples of five. """

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

if num1 > num2:
    for i in range(num2,num1):
        if i % 5 == 0:
            print(i + 5)
elif num1 < num2:
    for i in range(num1,num2):
        if i % 5 == 0:
            print(i + 5)
elif num1 == num2:
    for i in range(num1,num2):
        if i % 5 == 0:
            print(i + 5)
else:
    print("this wont happen )")

