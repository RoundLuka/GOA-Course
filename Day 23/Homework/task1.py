"""გადმოგეცემათ რიცხვთა სია ფუნქციაში, თვქენი დავალებაა ამ სიაშ მყოფი ლუწი რიცხვები შეართოთ + ის მეშვეობით და დააბრუნოთ საბოლოო შედეგად სტრინგი, შესატანი მონაცემი: [1,2,3,4],

საბოლოო შედეგი: "2+4"

გაითვალისწინეთ ის რომ თუ სიაში ერთი ლუწი რიცხვია, დააბრუნეთ პირდაპირ

ხოლო თუ არარის სიაში ლუწი რიცხვი მაშინ დააბრუნეთ ცარიელი სტრინგი"""

def my_join(join_str, strings_list):
    joined_elemnts = ""
    even_count = 0
    for i in range(len(strings_list)):
        if i % 2 == 0:
            even_count += 1
        if even_count > 1:
            joined_elemnts += join_str + strings_list[i]
            return joined_elemnts[1:]
        elif even_count == 1:
            return joined_elemnts[1:]
        elif even_count == 0:
            return ""





print(my_join("+", ["1","2","3","4"]))