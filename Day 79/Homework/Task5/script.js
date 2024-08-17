const colorPicked = document.getElementById("color")
const colorText = document.getElementById("color-text")
const colorBox = document.getElementById("colorful")

colorPicked.addEventListener("input", changeColor)

function changeColor(){
    let color = colorPicked.value

    colorText.textContent = color
    colorBox.style.backgroundColor = color
}