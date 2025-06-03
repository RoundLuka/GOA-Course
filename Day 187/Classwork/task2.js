// 2) დააიმპორტეთ util მოდული, და გამოიყენეთ თქვენი სურვილით მინიმუმ 5 მეთოდი, კომენტარებიტ ახსენით რას გააკეთებს ეგ მეთოდები

const { copyFileSync } = require("fs")
const util = require("util")

console.log(util.types.isAsyncFunction( async() => {
    return 2 + 2;
}))
console.log(util.types.isBooleanObject(true))
console.log(util.types.isCryptoKey("FQWETERTERTY624234WSDFWE"))
console.log(util.types.isFloat64Array(8.4))
console.log(util.types.isSet((2, 3, 4, 5)))