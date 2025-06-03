// 1) გამოიყენეთ მოცემული მოდულები და შექმენით ობიექტი რომელშიც დაბრუნებულ მნიშვნელობებს შეინახავთ, ობიექტის სახელი server (აგრეთვე ახსენით კომენტრაებით თითოეული მეთოდის დანიშნულება)

const os = require("os")

const server = {
    system_type: os.type(), // returns operation system type
    system_architecture: os.arch(), // returns operation system architecture
    system_network: os.networkInterfaces(), // returns information about connected network
    system_root: os.maindir(), // returns main directory
    system_owner: os.hostname(), // returns user name
    system_time: os.uptime() // returns how long system has been running for
}

console.log(server)