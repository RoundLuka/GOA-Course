"""Create a while loop that asks the user to enter a password.
Keep asking until they enter the correct password "Goa best".
Also print the count of incorrect passwords."""

password = input("Enter a password: ")
count = 0

while password != "Goa best":
    count += 1
    print(count,"attempts")
    password = input("Enter a password")

