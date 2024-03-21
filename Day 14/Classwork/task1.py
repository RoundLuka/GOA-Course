"""შემოატანინეთ მომხმარებელს თავისი ასაკი input  ფუნქციის 
გამოყენებით შემდეგ შეამოწმეთ ასაკი არის თუ არა  მეტი  ან 
უდრის 0 და ნაკლები 18 ზე დაუბეჭდეთ სხვა შემთხვევაში მეტია ან 
უდრის 18 ზე და ნაკლებია 50 ზე დავუბეჭდოთ რომ არის ზრდასრული 
სხვა შემთხვევაში ის არის მოხუცი"""

age = int(input("Enter your age"))

if age >= 0 and age < 18: # could have used nested statement
    print("You are kid") # but this makes code simpler
elif age >= 18 and age <= 50:
    print("You are an adult")
else:
    print("You're old")
    