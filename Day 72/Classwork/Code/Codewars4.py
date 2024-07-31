"""https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/python"""
#Help the bookseller !

# art = books list
# cat = search books list

def stock_list(art, cat):
    if len(art) == 0 or len(cat) == 0:
        return ""
    
    books_amount = {}
    
    for char in cat:
        books_amount[char] = 0
        for book in art:
            if char == book[0]:
                books_amount[char] += int(book.split(" ")[1])
    
    result_str = []
    
    for key in books_amount:
        result_str.append(f"({key} : {books_amount[key]})")
        
    return " - ".join(result_str)