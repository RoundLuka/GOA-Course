// 1) შექმენით თქვენი დაპირება, მეგობარმა თუ არ მოგიტანათ წიგნი დააბრუნეთ რეჯექტით რომ წიგნი ვერ მიიღეთ, ხოლო თუ პირობა შესრულდა მაგ შემთხვევაში დააბრუნეთ რომ წიგნი წარმატებით მიიღეთ (კომენტარებით ახსენით დეტალურად ყველაფერი) რა არის Promise, the, and catch

const promise = new Promise((resolve, reject) => {
    const bookRetrived = false; // defining variable that stores status of book
    // checking if status is true
    if(bookRetrived) {
        resolve("Book received successfully")
    } else {
        reject("Book not received")
    }
});

// getting resolved result in .then block 
// getting rejected result in .catch block

promise
    .then((result) => console.log("Fulfiled result: ", result))
    .catch((error) => console.log("Rejected: ", error))