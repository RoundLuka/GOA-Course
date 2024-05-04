"""Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched."""

def pig_it(text):
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    result = []
    words = text.split()
    for word in words:
            if word[0].upper() in alphabet:
                result.append(word[1:] + word[0] + "ay")
            else:
                result.append(word)
    return " ".join(result)
        
    