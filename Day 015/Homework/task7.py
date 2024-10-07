"""Implement a simple calculator that takes two numbers and an operator
(+, -, *, /) as input from the user and performs the corresponding operation.
Bonus task if you want, it's not necessary - add degree (ხარისხი), 
use ** operator for it. """

#soultion 1
print("Welcome to simple calculator you'll be choosing 2 numbers")

num1 = int(input("Enter first number"))
num2 = int(input("Enter second number: "))
print("Picking your operation: (1 for +) (2 for -) (3 for *) (4 for /) (5 for degree)")
operation = int(input("Pick your operation: "))

if operation == 1:
    print("Sum between",num1,"and",num2,"is",num1 + num2)
elif operation == 2:
    option = int(input("(1 to subtract first number from second)(2 for other way around): "))
    if option == 1:
        print("Your answer is",num2 - num1)
    elif option == 2:
        print("Your answer is",num1 - num2)
    else:
        print("You didn't input correct response")
elif operation == 3:
    print(num1,"*",num2,"=",num1 * num2)
elif operation == 4:
    divide_option = int(input("(1 to divide first number by second)(2 other way around)"))
    if divide_option == 1:
        print(num1,"divided by",num2,"is",num1/num2)
    elif divide_option == 2:
        print(num2,"divided by",num1,"is",num2/num1)
    else:
        print("Your response was invalid")
else:
    print("Your response was invalid")

#could put this all in while loop and continue loop if answer is true for else statemnt aka wrong 
#second soultion would be making functions for each operation then calling them




