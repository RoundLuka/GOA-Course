const form = document.querySelector('form');
const accountsDiv = document.querySelector('#accounts');


class Account {
    #password;
    static #accounts = [];

    constructor(email, password, fullname) {
        this.email = email;
        this.#password = password;
        this.fullname = fullname;

        Account.#addAccount(this);
    }
    
    static #addAccount(account) {
        Account.#accounts.push(account);
        console.log(account);
        console.log(Account.#accounts)
        Account.#displayAccounts();
    }

    static #displayAccounts() {
        accountsDiv.innerHTML = '';
        for(const acc of Account.#accounts) {
            accountsDiv.innerHTML += `<p>${acc.fullname} - ${acc.email}</p>`;
        }
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullname = form.fullname.value;

    new Account(email, password, fullname);
})