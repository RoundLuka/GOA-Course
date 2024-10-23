const form = document.querySelector("form");

class Account {
    constructor(firstName, lastName, email, password, city){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Password = password;
        this.City = city;
    }
    static printDetails(password){
        for(let i = 0; i < accounts.length; i++){
            if(password === accounts[i].Password){
                const currentUser = accounts[i];
                console.log(`First Name: ${currentUser.FirstName}`);
                console.log(`Last Name: ${currentUser.LastName}`);
                console.log(`Email: ${currentUser.Email}`);
                console.log(`Password: ${currentUser.Password}`);
                console.log(`City: ${currentUser.City}`);
            } else {
                console.log("Account not found");
            };
        };
    };
}

let accounts = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.Email.value;
    const password = form.Password.value;
    const city = form.City.value;

    const account = new Account(firstName, lastName, email, password, city);

    accounts.push(account);
});

setInterval(() => {
    Account.printDetails("luka1234");
}, 50000);