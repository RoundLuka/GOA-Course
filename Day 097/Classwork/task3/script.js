const form = document.querySelector("form");

class Account {
    constructor(firstName, lastName, email, password, city){
        this.FirstName = firstName;
        this.LastName = lastName;
        
    }
}

let accounts = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.Email.value;
    const password = form.Password.value;
    const city = form.City.value;

    const account = {}
});