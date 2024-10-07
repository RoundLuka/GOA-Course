"""Ask user for whole number. Then create a factorial for this number 
and print it out (If you don't know what a factorial is, google it). """

def factorial(number):
    result = 1
    for i in range(1, number + 1):
        result *= i
    print(result)
    return result 


number = int(input("Enter a number: "))
factorial(number)




