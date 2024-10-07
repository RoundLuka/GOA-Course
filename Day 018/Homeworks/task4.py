"""შექმენით ფუნქცია, რომელსაც გადასცემთ მომხმარებლის გვარს. გვარის თითოეული ასო 
გადაიტანეთ ახალ სიაში. შემდეგ for ციკლის გამოყენებით იმუშავეთ ამ სიაზე - მარტო ლუწ 
ინდექსებზე მყოფი ასოები დაამატეთ ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია.
Bonus (არაა სავალდებულო): ეს სია გარდაქმენით სთრინგად და ამ სახით დააბრუნეთ."""

def last_name_transformer(last_name):
    new_list = []
    for i in range(len(last_name)):
        if i % 2 == 0:
            new_list.append(last_name[i])
        string_convert = str(new_list)
    return string_convert

print(last_name_transformer("gurgenidze"))


    

    