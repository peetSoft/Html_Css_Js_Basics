

# DOM -- Document Object Manipulation

> Das Document Object Model ist eine Spezifikation einer  Programmierschnittstelle, welche HTML- oder XML-Dokumente als eine  Baumstruktur darstellt, in der jeder Knoten ein Objekt ist, welches  einen Teil des Dokumentes repräsentiert, z. B. einen Absatz, eine  Überschrift, ein Video oder etwa eine Tabellenzelle.

----

# Nodes and Elements

> A DOM document is a hierarchical collection of nodes. Each node can have a parent and/or children.
>
> Understanding the difference between a DOM node and an element is easy if you understand what a node is.
>
> Nodes have types, the element type being one of them. The element is represented by a tag in the HTML document.

---

# Methods collection

```js
console.log(document.documentElement) // Gives the html Node
console.log(document.body.childNodes) // shows the childs of the body node
console.log(document.body.lastChild) // shows the last child of the node
console.log(document.body.firstChild) // shows the first child of the node
console.log(html.hasChildNodes()) // --> boolean

// ChildNodes are only for reading not for manipulating.

console.log(document.head.nextSibling) // gives next Sibling
console.log(document.body.previousSibling) // gives previous Sibling // beware of whitespace

// Get innerHTML by id
console.log(document.getElementById("sitename").innerHTML)

// nextElementSibling 
console.log(head.nextElementSibling) // Brings you to the first Element of the next tag

```

# Select Objects Methods

```js
document.querySelectorAll("ul > li") // returns array with a list-items from unordered list.
document.querySelector("ul > li") // returns the first list-item of the unordered list
document.querySelector("#greetings") // returns the Object with id greetings
document.getElementById("sitename") // selects the item with pre defined id
```

# More Selecting

## Assuming following HTML Code

```html
<body>
<ul class="shopping-list">
    <li class="fruit">Apple</li>
    <li class="fruit">Banana</li>
    <li>Ice</li>
</ul>
    <!--Unordered list has a class some list items have classes.-->
</body>
```

```js
// We can get the explicit unordered list and list items by ID

document.querySelectorAll("ul.shopping-list > li.fruit")
```

---

# More selecting Options

```html
<body>

<ul class="shopping-list">
<li class="fruit">Apple</li>
<li class="fruit">Banana</li>
<li>Ice</li>
</ul>
</body>
```

```js
let li = document.querySelector("li.fruit")

// looking for closest class from li.fruit (line 3)
console.log(li.closest(".shopping-list")) // --> <ul class = "shopping-list">

```



## Navigating in a Node

![image-20230603181204494](/home/peet/.config/Typora/typora-user-images/image-20230603181204494.png)

---

# EventTarget in Nodes

![image-20230604111734270](/home/peet/.config/Typora/typora-user-images/image-20230604111734270.png)

```js
// The infographic above is showing all possible types of Nodes in a DOM Tree.

// All elements of a Node are including the Classes <EventTarget> <Node>
From there we differ the <Text> <Element> <Comment> class
// All of them have different specifications.
```



```js
// Getting the name of the class of an object

console.log(document.body.constructor.name) // --> HTMLBodyElement

// More practical way to find out the class name --> instanceof

console.log(document.body instanceof HTMLElement) // true
console.log(document.body instanceof Element) // true
console.log(document.body instanceof Text) // false
```



---

# innerHTML outerHTML

```js
// innerHTML and outerHTML are only working with <tag> objects not with text object like comment or text
let h1Sitename = document.getElementById("sitename") // --> <h1 id="sitename">

console.log(h1Sitename.innerHTML) // --> Peters Test Site

// change the inner HTML of a Tag
// element of h1 Tag will be changed
h1Sitename.innerHTML = "Peters new test Site"

// We can also add a Tag to the innerHTML // not working for the <sript></sript> tag
h1Sitename.innerHTML = "Peters <u>new</u> test Site"

// outerHTML
// Gives us the Tag and the Element
h1Sitename.outerHTML // --> <h1 id="sitename">Peters Test site</h1> 

//change a Tag with outerHTML

h1Sitename.outerHTML = "<h2>Changed heading from h1 to h2"



```

# Access content of text Elements

```js
// to access the data from text Elements we can use the <data> property. 

document.body.commentObject.data // --> 	<!--This is accessed comment--> 
```

```js
// textContent

the textContent property is just text. No <tags> are executed in this property
```



# Accessing the DOM

```js
console.log(document)
HTMLDocument http://localhost:63342/JavaScript_Basics/DOM/a1_DOM.html?_ijt=f3q7bvq58g57394kso2v02h7lq&_ij_reload=RELOAD_ON_SAVE

// ------------------------------------------------------------------------
console.log(document.children)

a2_DOM.js:1:9
HTMLCollection { 0: html, length: 1 }
a2_DOM.js:1:9
// ------------------------------------------------------------------------


```

HTMLCollection { 0: html, length: 1 }
a2_DOM.js:1:9

# Getting an Array of children of the Object

```html
<!doctype html>
<html lang="en">
<head>
    <title>Document Object Manipulation</title>
</head>
<body>
<h1>Peters Test site</h1>
<p><b>Greetings earthlings, welcome to my site</b></p>
<script src="a2_DOM.js"></script>
</body>
</html>
```

```js
// Give the above Html text. Let us get all the children from the body Object (DOM)

bodyChildNodes = document.body.childNodes

for (let node of bodyChildNodes) {
    console.log(node)
}
// Console log
#text "\n"
a2_DOM.js:4:13
<h1>
a2_DOM.js:4:13
#text "\n"
a2_DOM.js:4:13
<p>
a2_DOM.js:4:13
#text "\n"
a2_DOM.js:4:13
<script src="a2_DOM.js">
a2_DOM.js:4:13


```

