"""მომხმარებელს შემოატანინეთ 3 რიცხვი. შეინახეთ ისინი ცვლადებში და მათზე
 ცალცალკე გამოიტანეთ print'ის მეშვეობით გამრავლება,
გაყოფა, მიმატება, გამოკლება. (თუ არ იცით კონკრეტული მათემატიკური ოპერაციები დასერჩეთ google'ში.
 e.g: how to multiply numbers in python)"""

print("You'll be asked to enter 3 numbers of your choice to complete mathemathical operations in order")
number1 = int(input("Please enter a number: "))
number2 = int(input("Please enter another number: "))
number3 = int(input("Please enter number again: "))


multiply = number1 * number2 * number3
divide = number1/number2/number3
sum_up = number1 + number2 + number3
minus = number1 - number2 - number3

print("multiplication between your numbers is",multiply,"division between your numbers is",divide,
      "sum of your numbers is",sum_up,"deduction of your numbers is",minus)







