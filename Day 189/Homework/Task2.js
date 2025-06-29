// დავალება 2: შექმნათ დირექტორია და ფაილი
// შექმენით დირექტორია myDirectory, თუ ის ჯერ არ არსებობს, და შემდეგ ამ დირექტორიაში შექმენით ახალი ფაილი hello.txt, რომელშიც იქნება ტექსტი "Hello, Node.js!".

import fs from "fs"
import fsPromise from "fs/promises"

const folderName = "myDirectory"

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
}

async function createHelloFile() {
    await fsPromise.writeFile(`${folderName}/hello.txt`, "Hello, Node.js!")
}

createHelloFile()
