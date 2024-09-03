"""
ამოცანა:
წარმოვიდგინოთ რომ პროგრამა მუშაობს ტერმინალში და ვაძლევთ ბრძანებას, 
პროგრამამ უნდა დაიმახსოვროს შეყვანილი სტრიქონების სიგრძე, როდესაც პროგრამას 
კონკრეტულ input-ს გადავცემთ უნდა დაგვიბრუნოს უდიდესი სტრიქონის სიგრძე 
"""

def longest_length():
    end = "ctrlc"
    longest = ""
    text = input()
    while text != end:   
        if len(longest) < len(text):
            longest = text
        text = input()
    return f"Longest text: {text} n/ Length: {len(text)}"


