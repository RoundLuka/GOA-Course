"""რაც კი ვისწავლეთ შედარების ოპერატორები, მათემატიკური ოპერატორები, მექანიკური მონაცემთა ტიპის
 შეცვლა და ავტომატური ყველაფერზე ივარჯიშეთ
 და ნამუშევარი ატვირთე რაზეც ივარჯიშეთ"""

print("Welcome to day07 hw you will get to choose 2 numbers which will operate mathematical operations")

num1 = int(input("Enter your first number: "))
num2 = int(input("Enter your second number: "))

print("first number bigger then second number is",num1 > num2)

print("number1 equals number2 is",num1 == num2)

print("number1 smaller then number 2 is",num1 < num2)


print("number1 + number2 is",num1 + num2)
print("number1 subtracted by number2 is",num1 - num2)
print("number1 multiplied by number 2 is",num1 * num2)
print("number1 divided by number 2 in demical is",num1 / num2)
print("number1 divided by number2 is",num1 // num2)
print("balance left after number1 divded by number 2 is",num1 % num2)