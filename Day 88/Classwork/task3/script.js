// შექმენით ჯეირანის თამაში რომელშიც გექნებათ ქვა, ბადე, მაკრატელი. 
// გექნებათ 3 ღილაკი არჩევანის შესაბამისად ღილაკზე ხელის დაჭერსისას 
// უნდა შეინახოს ჩვენი არჩევანი და აწარმოოს კომპიუტერის არჩევანი. 
// საბოლოოდ შეადარეთ კომპიუტერისა და მომხმარებლის არჩევანი და 
// დაითვალეთ ქულები, ფრე, მოგება და წაგება

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scBtn = document.getElementById("sc");

function moveGenerator(){
    const optionArr = ["rock","paper","sc"];
    let choice = Math.floor(Math.random(0,2))
    console.log(choice)
}

function scoreCount(){

}

rockBtn.addEventListener("click", moveGenerator)