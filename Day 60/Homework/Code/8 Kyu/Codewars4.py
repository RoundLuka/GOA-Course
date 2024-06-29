"""https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python"""
#Grasshopper - Grade book

def get_grade(s1, s2, s3):
    sum = s1 + s2 + s3
    avrg = sum / 3
    if avrg >= 90:
        return "A"
    elif avrg >= 80 and avrg < 90:
        return "B"
    elif avrg >= 70 and avrg < 80:
        return "C"
    elif avrg >= 60 and avrg < 70:
        return "D"
    else:
        return "F"