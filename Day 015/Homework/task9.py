"""Using for loop, ask user for number. Then create a list which will 
have even numbers in next range: from 0 to user's number. At last, 
print out whole list. """

num = int(input("Enter a number: "))
even_list = []
for i in range(0,num):
    if i % 2 == 0:
        even_list.append(i)
print(even_list)
