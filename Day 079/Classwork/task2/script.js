// Accessing HTML Form
let form = document.getElementById("formField")

// define function to validate form
function validateForm(){
    // accessing input fields from HTML form
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const pass = form.elements.pass.value;
    const color = form.elements.color.value;

    // checking if all input fields were filled

    if(username == '' || email == '' || pass == '' || color == ''){
        alert('Please fill in all fields');
        return;
    }

    // logging information

    console.log('Form submitted successfully');

    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + pass);
    console.log("Color: " + color);

}


