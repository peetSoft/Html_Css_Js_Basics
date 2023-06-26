const result = document.getElementById("result")

// Getting Elements from DOM
const digits = document.getElementsByClassName("digit")
const operators = document.getElementsByClassName("operator")
console.log(operators)
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")

// Listening to click events
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", digitProcessor)
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", operatorProcessor)
}

equal.addEventListener("click", equalProcessor)
clear.addEventListener("click", clearProcessor)

initiateAll()

function initiate() {
    operator = ""
    operand1 = "0"
    operand2 = "0"
}

function initiateAll() {
    initiate()
    result.innerText = "0"
}


// Fills result.innerText with clicked digits
function digitProcessor(event) {
    // All variables for digit, will have function scope
    // Except automatically global (no keyword before variable.)
    // digit can only be used in this function
    let digit = event.target.innerText
    if (result.innerText === "0") {
        result.innerText = ""
    }

    //
    // Changes to result in this function Scope will affect result globally.
    // we can change result with contents of digit
    result.innerText += digit
}


// Gets the operator, saves the first operand and cleans result.innerText.
function operatorProcessor(event) {
    operator = event.target.innerText
    operand1 = result.innerText
    result.innerText = "0"
    /*
* Wenn etwas mit dem Klassennamen "operator" gedrückt wird,
* soll diese Funktion alle Eingaben die bisher in result gespeichert wurden,
* zu der Variablen operand1 zuweisen.  */
}

function equalProcessor(event) {
    let operand2 = result.innerText
    let opOne = Number(operand1)
    let opTwo = Number(operand2)
    let res = 0
    if (operator === "+") {
         res = opOne + opTwo
    }
    if (operator === "-") {
         res = opOne - opTwo
    }
    result.innerText = res.toString()
    initiate()
}

function clearProcessor(event) {
    initiateAll()
}



/*Features and changes
* Digits und Operators von einander Trennen (erweiterbar gestalten)
* Aktuellen Operator farblich kennzeichnen
* Loggen von der aktuellen Aufgabe neben dem Taschenrechner */

