const fs = require("fs")
const events = require("events")

const emitter = new events.EventEmitter()

emitter.on("messageLogged", (msg) => {
    console.log("Message Logged:", msg)
})

emitter.on("exitProgram", () => {
    console.log("Goodbye, program ended")
})

process.stdout.write("Enter something (type 'exit' to quit): ")

process.stdin.on('data', (input) => {
    let msg = input.toString().trim()

    if (msg === "exit") {
        emitter.emit("exitProgram")
        try {
            fs.appendFileSync("log.txt", "\nUser exited the program.\n")
        } catch (err) {}
        process.exit()
    }

    emitter.emit("messageLogged", msg)

    try {
        fs.appendFileSync("log.txt", msg + "\n")
    } catch (err) {}

    console.log("You said:", msg)
    process.stdout.write("Say something else: ")
})
