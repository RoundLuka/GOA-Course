// 2) შექმენიტ პროექტი, სადაც შემთხვევითი პრინციპით შექმნით რიცხვს 1-10მდე, სანამ მომმხმარებელი ამ რიცხვს არ გამოიცნობს იქამდე შემოატანინეთ მნიშვნელოიბა

const randomNum = Math.floor(Math.random() * 10) + 1;

process.stdout.write("Hello! Guess the number between 1 and 10: ");

process.stdin.on("data", (input) => {
    const guess = input.toString().trim()

    if(guess.toLowerCase() === "exit"){
        process.stdout.write("Game ended\n")
        process.exit()
    }

    const userNum = Number(guess)

    if(isNaN(userNum)){
        process.stdout.write("Please enter a valid number\n")
    } else if(userNum === randomNum){
        process.stdout.write(`Congrats! You guessed the number: ${randomNum}\n`)
        process.exit()
    } else if(userNum < randomNum){
        process.stdout.write("Try a higher number: ")
    } else {
        process.stdout.write("Try a lower number: ")
    }
})
