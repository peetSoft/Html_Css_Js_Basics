console.log(document.children)

console.log(document.getElementById("h1"))

let clickButton = document.getElementById("click-button")

clickButton.addEventListener("click", eingabe)

function eingabe() {
    let input = document.querySelector("#input")
    let output = document.querySelector("#output")
    let newDiv = document.createElement("div")
    let newContent = document.createTextNode(input.value)
    newDiv.appendChild(newContent)
    output.appendChild(newDiv)
    input.value = ""
}
