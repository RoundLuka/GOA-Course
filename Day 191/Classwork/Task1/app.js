// 1) გამოიყენეთ fs module და process მოდული, იმისათვის რომ მომხმარებელს ჯერ შემოატანინოთ ტერმინალიდან მონაცემები და ეგ მონაცემები appendFile მეთოდის გამოყენებით დაამატოთ ფაილში, როდესაც ტერმინალიდან შეიტანთ  exit უნდა გაითიშოს პროცესი, გათიშვის მეთოდის გამოძახების შემდეგ უნდა დაიბეჭდოს რომ file saved.

const { constants } = require("buffer");
const fs = require("fs")

process.stdin.on('data', (data) => {
    const validData = data.toString().trim();

    fs.appendFileSync('./text.txt', "\n" + validData, 'utf-8', (err) => {
    if(err) {
        console.log("Writing file interrupted")
    } else {
        console.log("Data successfully written")
    }

    console.log("Text appended")
})

    if(validData === "exit") {
        console.log("Exiting")
        process.exit();
    }
})

process.on("exit", () => {
    console.log("File saved")

    const data = fs.readFileSync('./text.txt', 'utf-8')
    console.log(data)
})
