"""დავალება: შექმენით პროგრამა, სადაც მომხმარებელს შემოატანინებთ თუ რამდენ რიცხვს შეიტანენ სიაში. 
შემდეგ შექმენით სია, for ციკლში input-ით შეეკითხეთ რიცხვი და შეიტანეთ ამ სიაში ეს რიცხვები. 
ბოლოს სიის ჯამი დააბრუნეთ """


def num_list_creator():
    amount = int(input("Enter how many numbers you want to enter in list: "))

    list = []

    for i in range(amount):
        i = int(input("Enter number you want to add to list: "))
        list.append(i)
    return list

