#include <stdio.h>
/* count characters in input; 1st version */
int main( )
{

long nc;

nc = 0;
while (getchar() != EOF)
    ++nc;
    // nc++;
    // nc = nc + 1;
printf ("Symbol count: %ld\n", nc );

}