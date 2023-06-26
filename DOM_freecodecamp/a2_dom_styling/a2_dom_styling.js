// DOM Manipulation

// Styling elements
const title = document.querySelector("#main-heading")
// This only works for inline style. When we have selected one Element.
title.style.color = "red";
console.log(title)

// Trying the style attribute for several items.
const listItems = document.querySelectorAll(".list-items")
// Css attributes in Javascript written in Camel-Case
console.log(listItems)

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = "10px"
}


// Creating Elements
const ul = document.querySelector("ul")
const liItem = document.createElement("li")

// Adding Elements
ul.append(liItem)
//
// Modifying the text
liItem.innerText = "Pulp Fiction"
//
// Modifying Attributes & Classes
console.log(listItems[1].getAttribute("style"))
listItems[1].setAttribute("style", "color:white")
//
//
liItem.classList.add("fancy-class")

// Remove Elements

// liItem.remove()


