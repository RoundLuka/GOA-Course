import fs from "fs/promises"

async function readFileStuff() {
    await fs.writeFile("message.txt", "hello file :)")
    const text = await fs.readFile("message.txt", "utf-8")
    console.log(text)
}

async function makeFolder() {
    await fs.mkdir("Data")
}

async function makeFileInside() {
    setTimeout(async () => {
        await fs.writeFile("Data/message.txt", "file inside folder :)")
        console.log("done writing inside folder")
    }, 1000)
}

async function start() {
    await readFileStuff()
    await makeFolder()
    makeFileInside()
}

start()
