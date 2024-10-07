"""შექმენით ფუნქცია, რომელსაც გადასცემთ მომხმარებლისგან მიღებულ სახელსა და გვარს. 
შემდეგ ისინი დაამატეთ სიაში და დააბრუნეთ სია."""

def user_data():
    first_name = input("Enter your first name: ")
    last_name = input("Enter your last name : ")
    data_list = []
    data_list.append(first_name)
    data_list.append(last_name)
    return data_list

