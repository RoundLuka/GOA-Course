const form = document.getElementById("form")

const database = [];

function handleSubmit(e){
    e.preventDefault();

    const pass = form.pass.value;

    let containsSpecialChar = false;
    let containsUppercase = false;
    let containsDigit = false;

    if(pass.length < 6){
        alert("Password length must be greater then 6");
        return;
    }

    for(let i = 0; i < pass.length;i++){
        if (pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47){
            console.log("Password contains special character")
            containsSpecialChar = true;
        }

        if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 95){
            containsUppercase = true;
        }

        if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){
            containsDigit = true;
            return;
        }
    }

    if(!containsSpecialChar || !containsUppercase){
        alert("Password must incldue at least one special character and uppercase");
        return;
    }

    database.push(pass);

    console.log(database)
}

form.addEventListener("submit", handleSubmit);
// form.removeEventListener("submit", handleSubmit);