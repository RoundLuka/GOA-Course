"""მომხმარებელს შეეკითხეთ სამი რიცხვი და შეამოწმეთ არიან თუ არა პითაგორას რიცხვები."""

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))

num1_squared = num1 * num1
num2_squared = num2 * num2
num3_squared = num3 * num3

if num1_squared + num2_squared == num3_squared:
    print("Your numbers are indeed pythagorean numbers")
elif num1_squared + num3_squared == num2_squared:
    print("Your numbers are indeed pythagorean numbers")
elif num2_squared + num3_squared == num1_squared:
    print("Your numbers are indeed pythagorean numbers")
else:
    print("Those numbers aren't pythagorean's")

    