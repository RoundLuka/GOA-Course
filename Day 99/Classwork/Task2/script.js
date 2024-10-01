// 2) შექმენით კლასი გამოიყენეთ ყველა ნასწავლი მასალა და ახსენით კომენტარებით, საჯარო და პირადული ველები, 
// set and get methods, static methods, static private fields or methods

class Account {
    // can directly assign this value
    // #password = "luka123";
    #password;

    // can only access within class, can't use it in objects
    // can private this using #
    static count = 0;

    constructor(firstname, lastname, password){
        this.firstname1 = firstname;
        this.lastname = lastname;
        this.#password = password;
        Account.objectCount();
    }

    // _ - only using this method within class
    _checkPass() {
        console.log(this.#password);
    }

    printInfo() {
        console.log(this.firstname1, this.lastname);
    }
    printObject() {
        console.log(this);
    }

    // set firstname(value){
    //     this.firstname1 = value;
    // }

    // get lastname() {
    //     return this.lastname;
    // }

    set password(newPass) {
        this.#password = newPass;
    }

    get password() {
        // can return modified value if needed
        return this.#password;
    }

    // can private this method by writing # before 
    // its name to be able to only use this method on class
    static objectCount() {
        Account.count += 1;
    }

    static get count() {
        return this.count
    }
}


console.log(Account.count);

// console.log(acc1.count); // logs undefined

// setter - must take only 1 parameter, used to directly access property of class
// getter - only returns one property

// static method - can only use on class, can't call on object

// error
// acc1.objectCount();

// calling on class
Account.objectCount();

const acc1 = new Account("Luka", "Gurgenidze","luka123");
const acc2 = new Account("Ana", "Gurgenidze","ana123");

acc1.printInfo();
acc2.printInfo();

console.log(acc1.password);