"""A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1"""


def collatz(n):
    n_list = []
    while n != 1:
        n_list.append(int(n))

        if n % 2 == 0:
            n = n / 2
        else:
            n = (n * 3) + 1
    n_list.append(1)

#     "->".join(str(n_list))
#     return n_list
    str = ""
    for i in n_list:
        str += f"->{i}"
    return str[2:]
        