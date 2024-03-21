"""დაწერეთ პროგრამა, რომელიც იღებს სთრინგს, შემდეგ მომხმარებელს ეკითხება თუ რამდენჯერ 
განმეორდეს და for ციკლის გამოყენებით დაბეჭდეთ ის."""

statement = input("write anything: ")

iteration = int(input("Enter how many times you want to iterate statement: "))

for i in range(iteration):
    print(statement)