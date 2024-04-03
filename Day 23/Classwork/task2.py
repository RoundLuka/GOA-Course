"""2) შექმენით პროგრამა სადაც გექნებათ მოცემული სტრინგი, ხოლო ლუწ ინდექსებზე 
მყოფი ელემენტები ჩაანაცვლეთ სხვა სიმბოლოთი ან სხვა რიცხვით"""

def even_replace(string,replace):
    new_str = ""
    for i in range(len(string)):
        if i % 2 == 0:
            new_str += replace
        else:
            new_str += string[i]
    return new_str








print(even_replace(["luka","david","akaki"],"luuka"))