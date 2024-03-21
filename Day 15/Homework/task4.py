"""Ask user for five names (use input five times). Add all 
of them in one list and print only first three names. """

name1 = input("Enter first name: ")
name2 = input("Enter second name: ")
name3 = input("Enter third name: ")
name4 = input("Enter fourth name: ")
name5 = input("Enter fifth name: ")

name_list = []
name_list.append(name1)
name_list.append(name2)
name_list.append(name3)
name_list.append(name4)
name_list.append(name5)

print(name_list[0:3])