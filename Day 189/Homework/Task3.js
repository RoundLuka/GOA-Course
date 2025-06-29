// დავალება 3: ფაილის წაშლა
// შეიმუშავეთ ფუნქცია, რომელიც წაშლის ნებისმიერ ფაილს დირექტორიაში.

import fs from "fs/promises"

async function deleteFile(filePath) {
    await fs.unlink(filePath)
    console.log(`${filePath} deleted`)
}

// deleteFile("myDirectory/hello.txt")
