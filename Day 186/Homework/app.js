// 1) https://nodejs.org/api/process.html გადახედეთ process ობიექტის მეთოდებს და გამოიყენეთ რომელიმ,ე მეთოდი

const process = require("process");

const upTime = process.uptime();

console.log(`Uptime: ${upTime}`)