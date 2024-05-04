"""Complete the function/method so that it returns the url with anything after the anchor (#) removed."""

def remove_url_anchor(url):
    list = []
    for i in url:
        if i != "#":
            list.append(i)
        else:
            break
    return "".join(list)


