"""ტემპერატურის კლასიფიკაცია: შექმენით პროგრამა, რომელიც მომხმარებელს
სთხოვს ტემპერატურას ცელსიუსში. შემდეგ დაბეჭდეთ ცხელი (> 30°C),
თბილი (20-30°C) ან ცივი (<20°C)."""

temperature = int(input("Enter your temperature in °C: "))

if temperature > 30:
    print("Hot")
elif temperature > 20 and temperature < 30:
    print("Warm")
elif temperature < 20:
    print("Cold")
else:
    print("Something went wrong please try again")