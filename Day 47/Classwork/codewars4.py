"""https://www.codewars.com/kata/5a3dd29055519e23ec000074"""

def check_exam(correct_answers,test_answers):
    score = 0
    
    for index in range(len(correct_answers)):
        if correct_answers[index] == test_answers[index]:
            score = score + 4
        elif test_answers[index]  == "":
            score = score + 0
        else:
            score = score - 1
    
    if score < 0:
        return 0
    else:
        return score