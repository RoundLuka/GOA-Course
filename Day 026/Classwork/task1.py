"""დავალება: შექმენით პროგრამა, სადაც ბოლოდან პირველ ოთხის ჯერად რიცხვს გამოიტანთ სიიდან. 
მაგ სიაში კი 10-იდან 50-ის ჩათვლით უნდა იყოს რიცხვები"""


def quads():
    quads_list = []
    list = []
    for i in range(10,50 + 1):
        list.append(i)
    for i in range(len(list) - 1,-1,-1):
        if i % 4 == 0:
            quads_list.append(i)
    return quads_list[0]                  #in order to conclude result we return final value

print(quads())


