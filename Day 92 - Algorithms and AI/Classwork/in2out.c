// K&R 16pg:30epg Tuesday, September 10 2024

#include <stdio.h>
/* copy input to output; 1st version*/

int main ( )
{
    int c;
    c = getchar();
    while (c  != EOF)
    {
        putchar(c);
        c = getchar();
    }
    printf("Obtained c=EOF is %d\n", c);
    return 0;
}