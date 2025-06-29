// დავალება 4: დირექტორიის შინაარსის ასინქრონული გადახედვა
// გამოიყენეთ fsPromise.readdir, რომ გადაიხედოთ დირექტორიაში არსებული ფაილები.

import fs from "fs/promises"

async function listTxtFiles(folder) {
    const files = await fs.readdir(folder)
    const txtOnly = files.filter(file => file.endsWith(".txt"))
    console.log(txtOnly)
}

listTxtFiles("myDirectory")
