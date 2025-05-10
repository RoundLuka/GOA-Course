// რომელზეც დაწკაპების შედეგად ხდება ამ როი რციხვის ერთმანეთზე შეკრება და ეკრანზე, შემდეგ შექმენით typescriptis ფაილი სადაც დაწერთ შესაბამის კოდს, აგრეთვე დაამატეთ ფუნქცია სახელად add რომელსაც გადაეცემა 2 რიცხვი და აბრუნებს რიცხვს
const numberForm = document.querySelector("form");
const displayP = document.getElementById("displayP");
function addNums(a, b) {
    return a + b;
}
numberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num1 = parseInt(numberForm.number1.value);
    const num2 = parseInt(numberForm.number2.value);
    const sum = addNums(num1, num2);
    displayP.textContent = `Sum of the numbers: ${sum}`;
});
