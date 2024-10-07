"""დაწერეთ ალგორითმი რომელიც მომხმარებელს შეთავაზებს ორ ოპერაციას: კილომეტრი - მილი, 
მილი - კილომეტრი. მომხმარებელმა უნდა აირჩიოს ერთ-ერთი მათგანი, ხოლო შემდეგ შეეკითხეთ 
რიცხვითი მნიშვნელობა, რომელზეც მოახდენთ მუშაობას და საბოლოოდ დაუბეჭდეთ უკვე გადაყვანილი 
მნიშვნელობა. თუ მომხმარებელი სწორად არ აირჩევს ოპერაციას, დაბეჭდეთ "Wrong decision"."""

operation = int(input("Pick operation (1 to convert kilometers to miles)(2 for other way around): "))

num = int(input("Enter your distance: "))

#1 mile is 1.6 km

if operation == 1:
    after_km_to_miles = num / 1,6
    print(num,"kilometer(s) is",after_km_to_miles,"miles")
elif operation == 2:
    after_miles_to_km = num * 1,6
    print(num,"miles is",after_miles_to_km,"kilometers")
else:
    print("Wrong decision")