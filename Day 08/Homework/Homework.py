#user_requirements
required_weight = 50
required_height = 170

#workout requirements
required_pushups = 30
required_squats = 50


user_weight = int(input("Enter your weight: "))
user_height = int(input("Enter your height: "))
user_pushups = int(input("Enter how many pushups you have done: "))
user_squats = int(input("Enter how many squats you have done: "))

print(user_weight >= required_weight and required_height >= required_height)
print(user_pushups < required_squats or user_squats > required_pushups)

if user_pushups >= required_pushups:
    print("You have completed pushup workout")
else:
    print("You haven't completed pushup workout")
if user_squats >= required_squats:
    print("You have completed squat workout")
else:
    print("You haven't completed squat workout")









