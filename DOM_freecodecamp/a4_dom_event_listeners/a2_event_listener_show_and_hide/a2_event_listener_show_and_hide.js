// Event Listeners


const buttonTwo = document.querySelector(".btn-2")

function alertButton() {
    alert("I also love Javascript")
}

buttonTwo.addEventListener("click", alertButton);

// Mouseover

const newBackgroundColor = document.querySelector(".box-3");
console.log(newBackgroundColor)
function changeBgColor() {
    newBackgroundColor.style.background = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);