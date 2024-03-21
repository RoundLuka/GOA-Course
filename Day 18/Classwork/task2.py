"""დავალების შემდეგი ნაწილი: გაფილტრეთ სია ისე, რომ დაბრუნდეს 10-ზე მეტი ლუწი რიცხვები"""

def num_list_creator():
    amount = int(input("Enter how many numbers you want to enter in list: "))

    list = []

    for i in range(amount):
        i = int(input("Enter number you want to add to list: "))
        if i > 10 and i % 2 == 0:
            list.append(i)
    return list

    