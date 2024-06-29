"""https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python"""
#Complementary DNA

def DNA_strand(dna):
    string = ""
    for dna in dna:
        if dna == "A":
            string += "T"
        elif dna == "T":
            string += "A"
        elif dna == "C":
            string += "G"
        elif dna == "G":
            string += "C"
    return string