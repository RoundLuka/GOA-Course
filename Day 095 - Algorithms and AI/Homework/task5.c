// Write a program that prints its input one word per line

#include <stdio.h>

int main( )
{
    int c;

    while ((c = getchar()) != EOF)
    {
        if (c != ' '){
            putchar(c);
        }
        printf("%c", c);
    }

    return 0;
}
