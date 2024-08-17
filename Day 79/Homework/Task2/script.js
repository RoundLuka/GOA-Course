let alertText = document.getElementById("alert-p")
const pass = document.getElementById("password")

pass.addEventListener("input", validatePassword);

function validatePassword(){
    
    if(pass.value.length < 8) {
        alertText.textContent = "Warning: The password must be at least 8 characters long."
        alertText.style.color = "Red"
    }
    else {
        alertText.textContent = "Valid password"
        alertText.style.color = "Green"
    }
}

