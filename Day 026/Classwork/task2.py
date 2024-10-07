"""დავალება2: შექმენით ფუნქცია სახელად filter, მისი პირველი პარამეტრი იქნება კოლექცია, მეორე კი მნიშვნელობა. 
თქვენი დავალებაა, რომ კოლექციიდან ამოიღოთ ეგ კონკტეტული მნიშვნელობები და დააბრუნოთ ის"""

def filter(array,value):
    new_array = []
    for i in array:
        if i == value:
            pass
        else:
            new_array.append(i)
    return new_array

print(filter([1,2,3,2,2,2,4,5,2,6,2],2))