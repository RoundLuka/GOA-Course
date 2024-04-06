"""დავალება4: შექმენით ფუნქცია, რომელსაც გადაეცემა თქვენი სახელი. 
თუ სახელის სიგრძე აღემატება ხუთს, დააბრუნეთ მისი uppercase ვარიანტი. 
ხოლო თუ ნაკლებია ან ტოლია მისი, დააბრუნეთ capitalize ვარიანტი"""

def name_filter(name):
    if len(name) > 5:
        return name.upper()
    else:
        return name.capitalize()
    
print(name_filter("luka"))