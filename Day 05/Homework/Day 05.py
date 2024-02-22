
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
Book1_price_after_small_discount = Book1_first_price * small_discount/100
Book2_price_after_small_discount = Book2_first_price * small_discount/100
Book3_price_after_small_discount = Book3_first_price * small_discount/100
Book4_price_after_small_discount = Book4_first_price * small_discount/100
Book5_price_after_small_discount = Book5_first_price * small_discount/100
#declaring values of large discounts
Book6_price_after_large_discount = Book6_first_price * large_discount/100
Book7_price_after_large_discount = Book7_first_price * large_discount/100
Book8_price_after_large_discount = Book8_first_price * large_discount/100
Book9_price_after_large_discount = Book9_first_price * large_discount/100
Book10_price_after_large_discount = Book10_first_price * large_discount/100

#displaying last prices of books with small discount
print("Book1's price is",Book1_price_after_small_discount,"Book2's price is",Book2_price_after_small_discount,
      "Book3's price is",Book3_price_after_small_discount,
      "Book4's price is",Book4_price_after_small_discount,"Book5's price is",Book5_price_after_small_discount)
#displaying last prices of books with large discount
print("Book6 costs",Book6_price_after_large_discount,"Book7 costs",Book7_price_after_large_discount,
      "Book8 costs",Book8_price_after_large_discount,
      "Book9 costs",Book9_price_after_large_discount,"Book10 costs",Book10_price_after_large_discount)


