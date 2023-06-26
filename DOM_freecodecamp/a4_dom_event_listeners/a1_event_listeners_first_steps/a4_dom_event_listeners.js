// Event Listeners
const buttonTwo = document.querySelector("#btn-2")

buttonTwo.addEventListener("click", alertButton);

function alertButton() {
    alert("I also love Javascript")
}


// Mouseover
const newBackgroundColor = document.querySelector("#box-3");
console.log(newBackgroundColor)

newBackgroundColor.addEventListener("mouseover", changeBgColor);

function changeBgColor() {
    newBackgroundColor.style.background = "blue";
}


