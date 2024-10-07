"""შექმენით 4 ფუნქცია რომლებიც გააკეთებს მიმატებას გამოკლებას გამრავლებას და გაყოფას, 
შემდეგ კი შედეგი უნდა დააბრუნოს ფუნქციამ return keyword ის გამოყენებით, გამოიძახეთ ტითოეული ფუნქცია"""

def add(num1,num2):
    return num1 + num2

def subtract(num1,num2):
    option = int(input("Would you like to subtract num1 from num2 (1) or other way around (2)"))
    if option == 1:
        return num2 - num1
    elif option == 2:
        return num1 - num2
    else:
        return "Invalid input"
    
def division(num1,num2):
    option = int(input("Would you like to dvidide num1 by num2 (1) or other way around (2)"))
    if option == 1:
        return num1/num2
    elif option == 2:
        return num2/num1
    else:
        return "Invalid input"
def multiply(num1,num2):
    return num1 * num2

    