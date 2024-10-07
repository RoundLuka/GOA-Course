"""დავალება3) შექმენით ახალი სია, შემდეგ 50-იდან 100-მდე ამ სიაში შეიტანეთ ყველა რიცხვი
(დასერჩეთ python array append). ბოლოს დაპტინტეთ თქვენთვის სასურველი სიის ნაწილი უარყოფითი 
index-ების საშუალებით.Create an array, then add numbers from 50 to 100 to it. In the end, 
print the part of this array with negatives indexes. """

new_list = []
for i in range(50,100 + 1):
    new_list.append(i)

print(new_list[-1:])