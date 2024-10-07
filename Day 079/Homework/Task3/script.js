let form = document.getElementById("Form")
let clearButton = document.getElementById("clear")

clearButton.addEventListener("click",clearForm)

function clearForm(){
    const username = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    username = ''
    email = ''
    message = ''
}