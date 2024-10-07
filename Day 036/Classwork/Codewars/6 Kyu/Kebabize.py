"""Modify the kebabize function so that it converts a camel case string into a kebab case."""

def kebabize(st):
    string = ""
    for cap in st:
        if not cap.isdigit():
            if cap == cap.upper():
                cap1 = cap.lower()
                string += "-" + cap1   
            else:
                string += cap
    if len(string) > 0:            
        if string[0] == "-":
            return string[1:]
        else:
            return string
    else:
        return ''
