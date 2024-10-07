let form = document.getElementById("formField");
let submit = document.getElementById("send");

let dataBase = [];

function Account(firstname,lastname,email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    // this method acts as placeholder for property's value
    // which then can later be used to create object based
    // on properties which are being placehold by this
}

function collectData(){
    const firstName = form.elements.firstname.value;
    const lastName = form.elements.lastname.value;
    const email = form.elements.email.value;

    // new keyword creates new object using constructor
    // and its properties, assigning specific values
    const account = new Account(firstName,lastName,email)

    dataBase.push(account)

    console.log(dataBase)
}

submit.addEventListener("click", collectData)
