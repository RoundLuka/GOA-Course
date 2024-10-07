"""Write a function that checks if a given number is prime or not 
(prime number has only two divisors - გამყოფი) Use a for loop for this task."""

def prime_detector(number):
    divisors = 0
    for i in range(1,number + 1):
        if number % i == 0:
            divisors += 1
    if divisors == 2:
        return "Your number is prime"
    else:
        return "Your number isn't prime"    

