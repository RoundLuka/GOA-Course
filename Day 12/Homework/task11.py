"""რიცხვის გამოცნობა: დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს
გამოიცნოს რიცხვი (მაგ., 5, ეს რიცხვი თქვენ აირჩიეთ). განაგრძეთ კითხვა,
სანამ არ გამოიცნობენ სწორად."""


num = int(input("Guess a number: "))


while num != 5:
    num = int(input("Guess a number: "))
    if num == 5:
        print("You guessed the number (5)")
        break

