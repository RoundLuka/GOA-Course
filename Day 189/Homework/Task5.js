// დავალება 5: შეცვალეთ ფაილის შინაარსი
// შექმენით ფუნქცია, რომელიც მიიღებს ორი პარამეტრის სახით: ფაილის პათს და ახალი შინაარსი.

import fs from "fs/promises"

async function updateFile(path, newContent) {
    await fs.writeFile(path, newContent)
    const final = await fs.readFile(path, "utf-8")
    console.log(final)
}

updateFile("myDirectory/hello.txt", "Updated message")
