// 2) გააკეთეთ 10-10 მაგალითი  while, for and if-else ზე


// task1 while: 
// Count Down: Use a while loop to print numbers from 10 down to 1.

// let i = 10;
// while(i > 0){
//     console.log(i);
//     i --;
// }

// task2 while:
// Sum Until Negative:Continuously ask the user for numbers and add 
// them together until a negative number is entered. Print the sum.

// let sum = 0;
// let num;

// while(num >= 0){
//     sum += num;
// }

// console.log(sum)

// task3 while:
// Factorial Calculation: Calculate the factorial of a given number using a while loop.

// let number = Number(prompt("Please enter a number"))

// let product = 1;
// let i = 1;

// while(i !== number){
//     product = product * i
//     i ++
// }

// console.log(product)


// task4 while:
// Reverse a Number: Use a while loop to reverse the digits of a given number.

// let number;
// let strNumber = toString(number);
// let i = strNumber.length
// let reversed;

// while(i != 0){
//     reversed += strNumber[i]
//     i --
// }

// console.log(reversed)

// task5 while:
// Guess the Number: mplement a number-guessing game where the user has to guess a randomly generated number. 
// The loop continues until the correct number is guessed.

// let number;
// let guess = prompt("Please guess a number");

// while(number != guess){
//     guess = prompt("Please guess a number")
// }

// task6 while:
// Sum of Digits: Use a while loop to sum the digits of a number until the sum becomes a single digit.

// let number;


// while(number.length != 1){
//     let i = 0;
//     let sum = 0;

//     while(i < number.length){
//         sum += number[i]
//         i ++
//     }
    
//     number = sum
// }

// task1 forloop
// Print Squares: Use a for loop to print the squares of numbers from 1 to 10.

// for(let i = 0; i < 10; i ++){
//     console.log(i ** 2)
// }

// task2 forloop
// Sum of Even Numbers: Write a for loop to calculate the sum of all even numbers between 1 and 50.

// let sum = 0;
// for(let i = 1; i < 50; i ++){
//     if(i % 2 == 0){
//         sum += i;
//     }
// }

// console.log(sum)

// task3 forloop
// Reverse a String: Print a string in reverse using a for loop.

// let string;
// let reversedString;

// for(let i = string.length; i >= 0; i --){
//     reversedString += string[i];
// }

// console.log(reversedString)

// task4 forloop
// Count Vowels: Use a for loop to count the number of vowels in a given string.

// const string;
// const vowels = "aeiou";
// let count = 0;

// for(let i = 0; i < string.length; i++){
//     if(string[i] in vowels){
//         count += 1
//     }
// }

// console.log("Count of vowels in given string is " + count)

// task5 forloop
// Factorials: Generate and print the factorial of numbers from 1 to 10 using a for loop.

// let product = 1;

// for(i = 0; i < 10; i ++){
//     product = product * i
// }

// console.log(product)

// task6 forloop
// FizzBuzz: Implement the FizzBuzz problem using a for loop for numbers from 1 to 100.

// for(let i = 1; i < 100; i ++){
//     if(i % 3 == 0 && i % 3 == 0){
//         console.log(i +":FizzBuzz")
//     }
//     else if(i % 5 == 0){
//         console.log(i + ":Buzz")
//     }
//     else if(i % 3 == 0){
//         console.log(i + ":Fizz")
//     }
// }

// task7 forloop
// Find Maximum in an Array: Write a for loop to find the maximum number in an array.

// let arr;
// let maximum = arr[0];

// for(let i = 0; i < arr.length; i ++){
//     if(arr[i] > maximum){
//         maximum = arr[i]
//     }
// }

// console.log(maximum)

// task1 if-else
// Check Even or Odd: Write a program that checks if a given number is even or odd using an if-else statement.

// let number;

// if(number % 2 == 0){
//     console.log(number + " is even")
// }
// else {
//     console.log(number + " is odd")
// }

// task2 if-else
// Grade Assignment: Use conditional statements to assign grades based on a score (e.g., A for 90-100, B for 80-89, etc.).

// let score;

// if(score >= 90 && score <= 100){
//     console.log("A")
// }
// else if(score >= 80 && score < 90){
//     console.log("B")
// }
// else if(score >= 70 && score < 80){
//     console.log("C")
// }
// else if(score >= 60 && score < 70){
//     console.log("D")
// }
// else if(score >= 50 && score < 60){
//     console.log("E")
// }
// else{
//     console.log("F")
// }

// task3 if-else
// Compare Three Numbers: Use nested if-else statements to find the largest of three given numbers.

// let num1;
// let num2;
// let num3;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1)
//     }
//     else{
//         console.log(num3)
//     }
// }
// else{
//     if(num2 > num3){
//         console.log(num2)
//     }
//     else{
//         console.log(num3)
//     }
// }

// task4 if-else
// Check for Palindrome: Write a program to check if a given string is a palindrome using conditional statements.

// let string;
// let reversedString;

// for(let i = string.length; i >= 0; i --){
//     reversedString += string[i];
// }

// if(string === reversedString){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not a palindrome")
// }

// task5 if-else
// Age Group Classification: Use conditional statements to classify a person's age into different categories 
// (e.g., child, teenager, adult, senior) based on the input.

// let age;

// if(age < 13){
//     console.log("You are child")
// }
// else if(age < 18){
//     console.log("You are teenager")
// }
// else if(age < 40){
//     console.log("You are adult")
// }
// else{
//     console.log("You are senior")
// }

// task6 if-else
// Simple Calculator: Create a basic calculator that performs addition, subtraction, multiplication, 
// or division based on user input. Use conditional statements to determine the operation.

// let num1 = prompt("Enter first number")
// let num2 = prompt("Enter second number")

// let operator = promt("Enter operation")
// let result;

// if(operator === "+"){
//     result = num1 + num2
// }
// else if(operator === "-"){
//     result = num1 - num2
// }
// else if(operator === "*"){
//     result = num1 * num2
// }
// else if(operator === "/"){
//     result = num1 / num2
// }
// else{
//     alert("Please enter valid operation next time")
// }

// console.log(result)


// bonus

// const pin = "1234"
// let count = 3;
// let code;

// while(code !== pin && count > 0){
//     code = prompt("Please enter pin code");
//     if(code == pin){
//         alert("Acess granted!");
//     }
//     else{
//         count--;
//         alert("Invalid pin code, attempts left " + attempts);
//     }

// }
