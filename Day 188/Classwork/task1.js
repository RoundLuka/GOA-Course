// 1) დააიმპორტეთ მოვლენების მოდული, შექმენიტ მოვლენის გამომწმვევი ობიექტი კალსის გამოყენებით და გამოიწვიეთ რაიმე მოვლენა თვქენი სურვილით

// ცვლადში ინახება events და os მოდული
const events = require("events");
const os = require("os")

// იქმნება ახალი მოვლენის გამომწვევი ობიექტი
const myEmitter = new events.EventEmitter();

// ამ მოვლენის ობიექტზე ვამატებთ "checkUpTime" მოვლენას და ფუქციას რომელიც უნდა შესრულდეს მოვლენის გაშვებისას
myEmitter.on("checkUpTime", () => {
    // მოვლენის გაშვებისას იბეჭდება რამდენი ხანი მუშაობს სისტემა
    const newUpTime = os.uptime()
    console.log(newUpTime)
})

// checkUpTime მოვლენა რომელსაც გამოაქვს თუ რამდენი ხანია მუშაობს სისტემა ეშვება ყოველ 5 წამში
setInterval(() => {
    myEmitter.emit('checkUpTime')
}, 5000);
