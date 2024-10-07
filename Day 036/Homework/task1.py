"""1. შექმენით ფუნქცია სახელად manual_reverse, რომელიც მიიღებს დალაგებულ კოლექციას. 
თქვენი დავალებაა, რომ შეაბრუნოთ ეს კოლექცია და დააბრუნოთ ამ სახით."""


def manual_reverse(collection):
    res_list = []
    for i in range(len(collection) - 1,-1,-1):
        res_list.append(collection[i])
    return res_list

print(manual_reverse([1, 2, 3, 4, 5]))
