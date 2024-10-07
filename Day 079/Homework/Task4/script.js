const messageBox = document.getElementById("message")
const counterBox = document.getElementById("character-count")

messageBox.addEventListener("input", counter)

function counter(){
    const max = 200
    let amount = messageBox.value.length

    if(amount > max){
        counterBox.style.color = "Red"
        counterBox.textContent = "Character limit exceeded"
    }
    else{
        counterBox.style.color = "White"
        counterBox.textContent = amount + "/" + max
    }


}

