"""შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების სიას და თქვენ დააბრუნებთ მის გაფილტრულ ვერსიას, 
რომელსაც არ ექნება დუპლიკატები (ერთი და იგივე ელემენტები). """

def duplicate_remover(list):
    new_list = []
    for i in range(len(list)):
        if list[i] in new_list:
            pass
        else:
            new_list.append(list[i])
    return new_list


print(duplicate_remover([1,2,3,4,4,4,4,5]))
