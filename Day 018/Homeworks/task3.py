"""მომხმარებელს შეეკითხეთ საწყისი და საბოლოო რიცხვები. ეს რიცხვები გადაეცით ფუნქციას, 
for ციკლით სიაში შეინახეთ მათ შორის არსებული რიცხვები. შემდეგ მოახდინეთ გაფილტვრა, 
ისევ for ციკლით განიხილეთ თითოეული რიცხვი - თუ რიცხვი ლუწი იქნება, ახალ სიაში 
დაამატეთ მისი მეორე ხარისხი, ხოლო თუ კენტი იქნება სიაში დაამატეთ მისი კვადრატული ფესვი (0.5 ხარისხი)."""

start_num = int(input("Enter a starting number: "))
end_num = int(input("Enter ending number: "))

even_list = []
odd_list = []

for i in range(start_num,end_num):
    if i % 2 == 0:
        a = i * i
        even_list.append(a)
    else:
        b = i ** 0.5
        odd_list.append(b)

print("Squares of even numbers are",even_list)
print("Roots of odd numbers are",odd_list)
