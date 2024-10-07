// HTML-ში შექმენით 1 პარაგრაფი და მიანიჭეთ id შემდეგ შექმენით ღილაკი და მიანიჭეთ onclick რომელშიც იქნება 
// ფუნქციის გამოძახება, შექმენით ფუნქცია რომელიც წამოიღებს პარაგრაფის textcontent-ს და შეცვლის "hello"-თი. 

function greet(){
    let text = document.getElementById("greet")
    text.textContent = "Hello"
}