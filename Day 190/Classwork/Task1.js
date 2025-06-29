// 1) გამოიყენეთ stdin ობიექტი, იმისათვის რომ ტემინალიდან შემოიტანოთ რიცხვები, შემდეგ ეს რიცხვებიმ უნდა ჩასვათ გარეთ შექმენილ მასივში, სანამ მასივში ელემენტების ზომა არ გაუტოლდება 10 იქამდე არ უნდა გითიშოს input


const numbers = [];

process.stdout.write("Enter a number (or type 'exit' to quit): ");

process.stdin.on("data", (input) => {
    const text = input.toString().trim();

    if(text.toLowerCase() === "exit") {
        process.stdout.write("Program ended\n")
        process.exit()
    }

    const num = Number(text);

    if(isNaN(num)) {
        process.stdout.write("Please enter a valid number\n")
    } else {
        numbers.push(num)
        process.stdout.write(`Number ${num} added. Total: ${numbers.length}/10\n`)
    }

    if(numbers.length < 10){
        process.stdout.write("Enter another number: ")
    } else {
        process.stdout.write("Collected 10 numbers, exiting program\n")
        console.log("Numbers you entered:", numbers)
        process.exit()
    }
})
