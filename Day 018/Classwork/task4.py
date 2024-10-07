"""დავალება: შექმენით ფუქნცია, რომელსაც გაუწერთ ორ პარამეტრს - მართკუთხედის სიგრძე, 
მართკუთხედის სიმაღლე. საბოლოოდ დააბრუნეთ მისი ფართობი დამატებითი პირობა: თუ სიგრძე ტოლია სიგანის, დაბეჭდეთ, რომ არის კვადრატი"""


def squared_numbers(numbers):
    squared_numbers_list = []

    for num in numbers:
        squared_numbers_list.append(num * num)
    
    return squared_numbers_list

print(squared_numbers([1,2,3,4,5]))
def strings_length(strings_list):
    length_list = []

    for word in strings_list:
        length_list.append(len(word))
    
    return length_list

print(strings_length(["luka","nia","giorgi","lile"]))
def sum_of_numbers(numbers):
    result = 0

    for num in numbers:
        if num > 10:
            result = result + num
    
    return result

print(sum_of_numbers([1,2,3,11,15,5]))


def filter_evens(numbers):
    filtered_list = []

    for num in numbers:
        if num >= 10 and num % 2 == 0:
            filtered_list.append(num)
    
    return filtered_list

def sum_of_numbers(numbers):
    sum = 0

    for i in numbers:
        sum = sum + i
    
    return sum

count = int(input("Please enter how many numbers do you want to input: "))

numbers = []

for i in range(count):
    number = int(input("Please enter number: "))
    numbers.append(number)


print(sum_of_numbers(numbers))
print(filter_evens(numbers))