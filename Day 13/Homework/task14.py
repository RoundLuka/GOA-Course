"""დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი 1-დან 5-ის ჩათვლით. 
თუ რიცხვი არის 1-ზე ნაკლები ან 5-ზე მეტი, დაბეჭდეთ "Invalid input". თუ რიცხვი 1-დან 5-ის 
ჩათვლითაა, დაბეჭდეთ "Valid input". """

num = int(input("Please enter number between 1 and including 5"))

if num < 1 or num > 5:
    print("Invalid input")
else:
    print("Valid input")