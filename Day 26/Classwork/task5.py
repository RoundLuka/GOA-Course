"""დავალება: შექმენით range-ის მსგავსი ფუნქცია, სადაც მესამე არგუმენტი იქნება მომხმარებლის მიერ შეტანილი. 
აგრეთვე კომენტარით აღწერეთ return"""


def range(start,end):
    step = input("Enter Step: ")
    list = []
    while start < end:
        list.append(start)
        start += step
    return list

print(range(1,10,2))
