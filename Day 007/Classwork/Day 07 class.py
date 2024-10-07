"""მომხმარებელს შემოატანინეთ 2 რიცხვი, გატესტეთ int,
 float და str ფუნქციები, შემდეგ გამოიყენეთ მათემატიკური ოპერაციები
რომლებიც ვისწავლეთ. შეადარეთ ეგ ორი რიცხვი ერთმანეთს (<, >, ==)  ."""

num1 = int(input("Enter a number: "))
num2 = int(input("Enter second number: "))



num1_by_num2 = num1 * num2
division = num1/num2
print("number1 multiplied by number2 is",num1_by_num2)
print("number1 divided by number2 is",f"{division}")
print("number2 divided by number1 is (decimal)",num2 / num1)
print("number1 divided by numer2 as whole number is",num1 // num2)

print("balance after num1 was divided by num2 is",num1%num2)

if num1 > num2:
    print("num1 > num2")
elif num1 < num2:
    print("num2 > num1")
elif num1 == num2:
    print("num1 == num2")