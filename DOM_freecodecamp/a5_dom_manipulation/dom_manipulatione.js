const body = document.body
body.append("Hello World ")

// Creating an Element appending it to the DOM
const mainHeader = document.createElement("h1")
const paragraph = document.createElement("p")
const paragraph1 = document.createElement("p")
body.append(mainHeader)
body.append(paragraph)
body.append(paragraph1)

// add Text

mainHeader.textContent = "Going wild"
mainHeader.setAttribute("title", "Wild title!!")



// difference between textContent and innerText
// textContent sees all the text content within a Tag
// innerText only cares about Text that is actually visible on screen.
// look at the console to see the difference
const div = document.querySelector("div")
console.log(div.innerText)
console.log(div.textContent)


// innerHTML is for rendering HTML inside a text
paragraph.innerText = "<strong> innerText innerHTML showcase</strong>"
// innerHTML could have some security problems.
paragraph1.innerHTML = "<strong> innerText innerHTML showcase</strong>"

// remove item

const remove = document.getElementById("remove")

remove.remove() // const remove can be added back


world = document.querySelector("#world")
worldId =  world.getAttribute("id")
console.log(worldId)
worldColor = world.getAttribute("style")
console.log(worldColor)

hi = document.querySelector("#hi")

hi.setAttribute("style", "color:blue")
// We can also change attribute like that!
// We can access every CSS attribute like that.
hi.style.color = "green"

// Remove an attribute
hi.removeAttribute("style")

// Dataset
console.log(hi.dataset)
console.log(hi.dataset.longerName)

// classes

js = document.querySelector(".js1")
js.classList.add("js3")
js.classList.remove("js1")
// .toggle("classname") If classname is present in list it will be removed. If not it will be added
console.log(js.classList)
js.classList.toggle("js3")
console.log(js.classList)
