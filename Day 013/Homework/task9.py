"""შექმენით კალკულატორი, სადაც გექნებათ ოთხი ოპერაცია: + - / და გამრავლება (ფიფქი არ იწერება). 
მომხმარებელს შეეკითხებით ორ რიცხვს, შემდეგ სასურველ ოპერაციას და დაუბეჭდავთ გამოთვლილ მნიშვნელობას."""

print("operation options: (1 for +)(2 for -)(3 for /)(4 for *)")
operation = int(input("Pick operation: "))

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

if operation == 1:
    print(num1,"+",num2,"=",num1 + num2)
elif operation == 2:
    option = int(input("Enter 1 to subtract first number from second 2 for other way around"))
    if option == 1:
        print(num2,"-",num1,"=",num2 - num1)
    elif option == 2:
        print(num1,"-",num2,"=",num1 - num2)
    else:
        print("Invalid option")
elif operation == 3:
    division_option = int(input("Would you like to divide first number by second (1) or other way around(2)"))
    if division_option == 1:
        print(num1,"/",num2,"=",num1/num2)
    elif division_option == 2:
        print(num2,"/",num1,"=",num2/num1)
    else:
        print("Invalid response")
elif operation == 4:
    print(num1,"*",num2,"=",num1 * num2)
else:
    print("Invalid response")