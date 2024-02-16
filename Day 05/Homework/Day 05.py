#Declaring first price values of books
#book names can be changed in future
Book1_first_price = 10
Book2_first_price = 20
Book3_first_price = 30
Book4_first_price = 40
Book5_first_price = 50
Book6_first_price = 60
Book7_first_price = 70
Book8_first_price = 80
Book9_first_price = 90
Book10_first_price = 100
#declaring values of discounts


small_discount = 10
large_discount = 20

#declaring value of books after discount
#declaring small discounts
Book_small_discount1 = Book1_first_price * small_discount/100
Book_small_discount2 = Book2_first_price * small_discount/100
Book_small_discount3 = Book3_first_price * small_discount/100
Book_small_discount4 = Book4_first_price * small_discount/100
Book_small_discount5 = Book5_first_price * small_discount/100
#declaring values of large discounts
Book_large_discount1 = Book6_first_price * large_discount/100
Book_large_discount2 = Book7_first_price * large_discount/100
Book_large_discount3 = Book8_first_price * large_discount/100
Book_large_discount4 = Book9_first_price * large_discount/100
Book_large_discount5 = Book10_first_price * large_discount/100

#displaying last prices of books with small discount
print("Book1's price is",Book_small_discount1,"Book2's price is",Book_small_discount2,"Book3's price is",Book_small_discount3,
      "Book4's price is",Book_small_discount4,"Book5's price is",Book_small_discount5)
#displaying last prices of books with large discount
print("Book6 costs",Book_large_discount1,"Book7 costs",Book_large_discount2,"Book8 costs",Book_large_discount3,
      "Book9 costs",Book_large_discount4,"Book10 costs",Book_large_discount5)
