"""classwork: შექმენით პროგრამა სადაც გამოიტანთ 0 დან 10
 ჩათვლით ლუწ რიცხვებს, თან დაბეჭდეთ და თან
 მჭირდება 0 დან 10 ის ჩათვლით ლუწი რიცხვების ჯამი"""

n = 1
while n <= 10:
    if n%2 == 0:
        print(n)
        print("Number is even")
    else:
        print(n)
        print("Number is odd")
    n += 1 
