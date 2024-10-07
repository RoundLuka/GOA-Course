"""def, for, if-else, max, and lists
ივარჯიშეთ თქვენით ფუნქციებზე და გააკეტეთ 10 ფუნქცია შეცდომების გარეშე"""

#1
# def list_reverser(list):
#     return list[::-1]

# print(list_reverser([1,2,3,4,5]))
#2
# def reverse_strings(list):
#     new_list = []
#     for i in range(len(list)):
#         a = list[i][::-1]
#         new_list.append(a)
#     return new_list

# print(reverse_strings(["luka","ana","tamazi"]))

#3
# def even_odd_counter(list):
#     odd_sum = 0
#     even_sum = 0
#     for i in range(len(list)):
#         if list[i] % 2 == 0:
#             even_sum += 1
#         else:
#             odd_sum += 1
#     conclusion = f"There are",even_sum,"even numbers and",odd_sum,"odd numbers"
#     return conclusion
#could use {} in f string instead but still works

# print(even_odd_counter([1,2,3,4,5,6,7,18,456]))            

#4
# def common_element_finder(list1,list2):
#     new_list = []
#     for i in range(len(list1)):
#         if list[i] in list2:
#             new_list.append(list[i])
#         else:
#             pass

# print(common_element_finder([1,2,3,4,5],[3,4,5,6]))


#5
# def palindrome_checker(string):
#     if string.lower() == string[::-1].lower():
#         return True
#     else:
#         return False

#6
# def avrg_calculator(list):
#     total = 0
#     for i in range(len(list)):
#         total = total + list[i]
#     return total/len(list)

# print(avrg_calculator([1,2,3,4]))

#7
# def duplicate_remover(list):
#     new_list = []
#     for i in range(len(list)):
#         if list[i] in new_list:
#             pass
#         else:
#             new_list.append(list[i])
#     return new_list

# print(duplicate_remover([1,1,1,2,2,3,4,5,5,6,7]))

#8
# def element_remover(list,element):
#     new_list = []
#     for i in range(len(list)):
#         if list[i] == element:
#             pass
#         else:
#             new_list.append(list[i])
#     return new_list

# print(element_remover([1,2,3,4,5],3))
            





