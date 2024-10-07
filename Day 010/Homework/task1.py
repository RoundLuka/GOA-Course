"""თქვენით მოიფიქრეთ for ციკლისთვის 10 მაგალითი, მაუშევარი ატვირთეთ github ზე"""


name = input("Enter your name: ")
number = int(input("Enter number for times you want your name printed: "))


for n in range (number):
    print(name)

num = 0
number_iteration = int(input("Enter number you want to itereate: "))
for c in range(0,number_iteration):
    print(number_iteration)

    
num1 = 0
user_input = int(input("Enter a number you want to countdown: "))
for i in range(0,user_input):
    print(num1)
    if num1 < user_input:
        num1 += 1
    else:
        pass

num2 = 0
user_input1 = int(input("Enter a number you want to countdown in reverse: "))
for i in range(user_input1):
    num2 = num2 + 1
    print(num2 * -1)

user_input2 = int(input("Enter a number you want to countdown in reverse again: "))
for i in range(user_input2):
    print(user_input2)
    user_input2 = user_input2 - 1

        


    




