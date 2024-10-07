// ექოს კოდი გადაწერეთ ისე რომ განასხვავოთ 2 შეცდომა EOF-ის დაბრუნების შემთხვევაში, 
// გაარკვიეთ როგორ მიიღეთ EOF ერორების მიხედვით feof, ferror, დაწერეთ ფუნქციები
// my_getchar და my_putchar. გამოიყენეთ if

#include <stdio.h>


int my_getchar()
{
    int c;
    
    if((c = getchar()) == EOF)
    {
        if (ferror(stdin))
        {
            perror("error indicator is set");
            exit(1)
        }
        if(feof(stdin))
        {
            perror("end-of-file indicator is set");
            exit(3)
        }
    perror("getchar returned EOF when eror indicator and end-of-file indicator ARE NOT SET");
    exit(2)
    }
    
    return c;
}


int my_putchar(int c)
{
    if (putchar(c) == EOF) 
    {
        if (ferror(stdout)) 
        {
            perror("error indicator is set for output");
            exit(1); 
        }
        else
        {
            perror("putchar returned EOF without an error indicator");
            exit(2); 
        }
    }
    return c; 
}