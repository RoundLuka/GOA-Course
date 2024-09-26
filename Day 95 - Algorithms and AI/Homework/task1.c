// Write a program to count blanks, tabs, and newlines.

#include <stdio.h>

int main( )
{
    int space, tab, nl;

    nl = tab = space = 0;
    int c;
    
    while ((c = getchar()) != EOF)
    {
        if (c == ' ')
            ++space;
        if (c == '\t')
            ++tab;
        if (c == '\n')
            ++nl;
    }

    printf ("Blanks %d Tabs %d Lines %d\n", space, tab, nl);
    return 0;
}

