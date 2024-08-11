// HTML-ში შექმენით 1 პარაგრაფი მიანიჭეთ id და onclick, შემდეგ შექმენით 3 ღილაკი, პირველ ღილაკში გეწეროთ yellow, 
// მეორეში black, მესამეში green ღილაკებზე დაკლიკებისას მათი სახელის შესაბამისად უნდა შეიცვალოს ფერი პარაგრაფმა

function changeColorYellow(){
    let content = document.getElementById("color-p")
    content.style.color = "Yellow"
    document.body.style.backgroundColor = "Yellow"
}

function changeColorBlack(){
    let content = document.getElementById("color-p")
    content.style.color = "Black"
    document.body.style.backgroundColor = "Black"
}

function changeColorGreen(){
    let content = document.getElementById("color-p")
    content.style.color = "Green"
    document.body.style.backgroundColor = "Green"
}
