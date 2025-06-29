import fs from "fs"

fs.mkdirSync("Data")

setTimeout(() => {
    fs.writeFileSync("Data/message.txt", "Created new file inside Data")
}, 1000)
