"""შეამოწმეთ გაყოფა: შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს რიცხვს.
შემდეგ დაბეჭდეთ, იყოფა თუ არა 2-ზე, 3-ზე ან ორივეზე."""

n = int(input("Enter a number: "))

if n % 6 == 0:
    print("Your number can be divided by 2 and 3 without having decimals")
elif n % 2 == 0:
    print("Your number can be divided by 2")
elif n % 3 == 0:
    print("Your number can be divided by 3")
else:
    print("Error")