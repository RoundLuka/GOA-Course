const readline = require("readline");
const fs = require("fs")

const myInterface = readline.createInterface({
    input: fs.createReadStream('text.txt')
})

myInterface.on("line", (line) => {
    console.log(`Line has been read: ${line}`)
})

