const form = document.getElementById("Form");
const data = [];

function submitData(){
    let username = form.elements.username.value;
    let email = form.elements.email.value;
    let pass = form.elements.password.value;

    let account = {
        userName: username,
        Email: email,
        password: pass
    }

    data.push(account)
}


function logger(){
    console.log(data)
}

const dataSubmit = document.getElementById("submit")
const logButton = document.getElementById("log")

dataSubmit.addEventListener("click", submitData)
logButton.addEventListener("click", logger)

