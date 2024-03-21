"""დავალება: შექმენით ფუნქცია, რომელსაც გადასცემთ სიას და რიცხვები დაალაგებთ ზრდადობით"""

def sort_list(numbers):

    for i in range(len(numbers)):
        if numbers[i] > numbers[i + 1]:
            temp = numbers[i + 1]
            numbers[i + 1] = numbers[i]
            numbers[i] = temp

    return numbers
