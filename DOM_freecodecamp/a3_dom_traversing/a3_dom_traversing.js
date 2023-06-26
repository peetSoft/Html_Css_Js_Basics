
// Traverse the DOM
// Traverse = durchqueren


// Parent of ul Element
let ul = document.querySelector("ul")
console.log(ul.parentNode.parentNode)
console.log(ul.parentElement)
// Elements = Only html Elements <div> <body> <h1>
// Nodes = Everything in html Document , comments, text, Elements


// Child Node Traversal
console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)

// Child Element Traversal
console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

// Sibling Node Traversal

const div = document.querySelector("div")
console.log(div.childNodes)

console.log(div.previousSibling)
console.log(div.nextSibling)

