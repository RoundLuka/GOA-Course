// 2) თქვენი კრეატიულობით შექმენით პროგრამა სადაც გამოიყენებთ process ობიექტს input/output_თვის და event module.process.stdout.write("Please enter your name: ")


process.stdout.write("Welcome to adventure game. You can quit the game any time by entering exit")
process.stdout.write("What is your name adventurer? ")

let adventurer;
process.stdin.on('data', (userInput) => {

    let name = userInput.toString().trim();

    if(name === "exit") {
        process.stdout.write("Game ended")
        process.exit()
    }

    process.stdout.write("\n Your name is " + name)
    adventurer = name;
})

process.stdout.write("Pick path: 1 - Right 2 - Left ")

let path = "5"
while ( path !== "1" || path !== "2") {
    process.stdin.on('data', (userInput) => {

    let path = userInput.toString();

    if(path === "exit") {
        process.stdout.write("Game ended")
        process.exit()
    }

    if(path === "1") {
        process.stdout.write("\n You went right and came by codecademy headquarters")
    } else if(path === "2") {
        process.stdout.write("\n You went left and came by Linus Torvalds")
    } else {
        process.stdout.write("\n Invalid input")
    }
    })
}
