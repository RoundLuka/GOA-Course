// გექნებათ 1 ღილაკი, ღილაკზე დაჭერისას უნდა დაემატოს ახალი პარაგრაფი 
// შემთხვევითი რიცხვით 0-იდან 1000-მდე დიაპაზონში, body თეგში

const btn = document.getElementById("randomGen");

function display(number){
    const displayText = document.createElement("p");
    displayText.textContent = number;

    document.body.appendChild(displayText);
}

btn.addEventListener("click", function(){
    let randomNumber = Math.random(0,1000);
    randomNumber = randomNumber * 1000
    const final = Math.floor(randomNumber);
    display(final);
})