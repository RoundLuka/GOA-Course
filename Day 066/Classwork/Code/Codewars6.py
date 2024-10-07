"""https://www.codewars.com/kata/5a491f0be6be389dbb000117/train/python"""
#Drinking Game

def game(a, b):
    if a < 1 or b < 1:
        return "Non-drinkers can't play"
    
    mike_beers = 0
    joe_beers = 0
    
    turn = 0  
    next_beer_for_mike = 1
    next_beer_for_joe = 2
    
    while True:
        if turn == 0:
            mike_beers += next_beer_for_mike
            if mike_beers > a:
                return "Joe"
            turn = 1  
            next_beer_for_mike += 2
        else:
            joe_beers += next_beer_for_joe
            if joe_beers > b:
                return "Mike"
            turn = 0  
            next_beer_for_joe += 2