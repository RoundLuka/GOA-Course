"""ასოების შეფასება: დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს
გამოცდის ქულას. შემდეგ დაბეჭდეთ მათი ასოების შეფასება შემდეგი
სკალის მიხედვით: A (90-100), B (80-89), C (70-79), D (60-69), F (< 60)."""

score = int(input("Enter your score: "))

if score > 90 and score < 101:
    print("You got an A")

elif score > 80 and score < 90:
    print("You got a B")

elif score > 70 and score < 80:
    print("You got a C")

elif score > 60 and score < 70:
    print("You got a D")

elif score < 60:
    print("You got a F")

else:
    print("Your score is out of range")
