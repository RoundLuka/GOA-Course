// დავალება 1: ფაილის ასინქრონულად წაკითხვა და ჩანაწერის გაკეთება
// შექმენით ფუნქცია, რომელიც გამოიყენებს fs.promises.readFile -ს ასინქრონულად, რათა წაიკითხოთ ტესტის ფაილი და კონსოლში გამოიტანოთ.

import fs from "fs/promises"

async function readAndCopy() {
    const data = await fs.readFile("test.txt", "utf-8")
    console.log(data)
    await fs.writeFile("copied.txt", data)
}

readAndCopy()
