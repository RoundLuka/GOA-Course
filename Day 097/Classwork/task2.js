// 2) https://javascript.info/class გადახედეთ კლასების შესახებ ამ ინფორმაციას, გააკეთეთ 10 სხვადასხვა საბაზისო მაგალითი თუ როგორ მუშაობს კლასი და აგრეთვე ახსენით კომენტარებით დეტალურათ რას ნიშნავს კლასი და როგორ მუშაობს ის + რას აკეთებს

class dinosaur {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    rawr(){
        alert("RAH!")
    }
}

let tRex = new dinosaur("T-REX", "carnivore")
let triceratops = new dinosaur("Triceratops", "herbivore");
let stegosaurus = new dinosaur("Stegosaurus", "herbivore");
let spinosaurus = new dinosaur("Spinosaurus", "carnivore");
let brachiosaurus = new dinosaur("Brachiosaurus", "herbivore");

alert(typeof dinosaur) // class is function, dinosaur is function

// Class is kind of function, it can store properties and methods which can later then be used


class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        alert("Beep beep!");
    }
}