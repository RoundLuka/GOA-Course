"""An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise."""



def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    return sorted(test) == sorted(original)

    
    
# def is_anagram(test, original):
#     for i in test.lower():
#         if i not in original.lower():
#             return False
#     return 
    
    