"""დაწერეთ პროგრამა, რომელიც გამოთვლის სხეულის მასის ინდექსს (BMI), მომხმარებლისგან მიღებული 
წონის (კილოგრამებში) და სიმაღლის (მეტრებში) გათვალისწინებით."""

mass = int(input("Enter your weight in kilograms: "))
height = int(input("Enter your height in meters: "))
height_squared = height * height
print("Your BMI is",mass * height_squared)

