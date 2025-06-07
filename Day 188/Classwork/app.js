const events = require("events");

// event emitter - მოვლენის გამოწვევა

// const myEmitter = new events.EventEmitter();

// myEmitter.on("end", (name) => {
//     console.log(`${name} END`);
// })


// setTimeout(() => {
//     myEmitter.emit('end', "Luka")
// }, 5000);


process.stdout.write("Please enter your name: ")

const names = []

process.stdin.on('data', (userInput) => {
    let name = userInput.toString().trim();

    if(name === "exit") {
        process.stdout.write("Program ended")
        process.exit()
    }
    names.push(name)

    process.stdout.write("\n Your name is " + name)
    console.log(names)
})