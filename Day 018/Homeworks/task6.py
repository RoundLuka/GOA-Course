"""შექმენით ფუნქცია, რომელიც მიიღებს მომხმარებლისგან სიტყვას. შემდეგ თქვენ უნდა 
მოახდინოთ ამ სიტყვის შებრუნება, მაგ: word - drow. საბოლოდ კი დააბრუნეთ შედეგი."""

def string_reverser():
    string = input("Enter a word: ").lower()
    reversed_string = string[::-1]
    print(reversed_string)
    return reversed_string

string_reverser()