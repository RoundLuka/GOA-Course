"""სახელის გამოცნობა. შექმენით ცვლადი სადაც იქნება შენახული თქვენი სახელი.
მომხმარებელს შეეკითხეთ სახელი და სანამ თქვენსას არ შემოიტანს თავიდან შეეკითხეთ."""

name = "luka"
guess = input("Guess name")

while guess != name:
    guess = input("Guess name")

print("You guessed it (luka)")

