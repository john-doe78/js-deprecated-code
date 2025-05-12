/*
DOM types
- document: Represents the entire page and it is the root node of any dom tree
    console.log(document);
- node: A generic term for any html element (Element Node, Text Node, Attribute Node) in dom tree. 
- element: A specific types of node that represents html tags
- nodeList: An array of nodes (ordered)
- attr: represents the attribute of a node
- nameNodeMap: A collection of attrs. (unordered)
*/

// Accessing DOM
// querySelectorAll returns nodeList
// getElementsByClassName returns HTMLCollection
let titleElem = document.querySelector("h1");
console.log(titleElem);

let title = document.getElementById("heading");
console.log(title);

function highlightText() {
    let paragraph = document.querySelector(".info");
    paragraph.style.backgroundColor = "red";
}

function searchFruit() {
    let lists = document.querySelectorAll("#fruit-lists li");
    let input = document.getElementById("search").value;

    lists.forEach((item) => {
        console.log(item);
        let isFound = item.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        
        if (isFound) {
            item.style.color = "orange";
        } else {
            item.style.color = "";
        }
        

        return undefined;
    })
}

// DOM Manipulation
let paragraphElement = document.createElement("p");
paragraphElement.innerText = "This is a text added dynamically";
console.log(paragraphElement);

let div = document.getElementById("div");
div.append(paragraphElement);

let span = document.createElement("span");
span.innerText = "This is a span text";
div.insertBefore(span, document.querySelector("#div p"));

let span2 = document.createElement("span");
span2.innerText = "This is a span text";
div.append(span2);

let d = document.createElement("div");
div.append(d);
d.innerHTML = `
    <div>
        <h1>Hello, World</h1>
        <h2>Hello, Small World </h2>
    </div>
`;

// innerText applied css but textContent doesn't
let unorderedList = document.createElement("ul");
unorderedList.id = "myList";

for (let element of [1,2,3,4,5]) {
    let listElement = document.createElement("li");
    listElement.innerText = element;
    unorderedList.append(listElement);
}
document.body.append(unorderedList);

// remove a element
unorderedList.removeChild(unorderedList.children[0]);

// parent node
let spanTag = document.getElementById("text");
console.log(spanTag.parentElement);
console.log(spanTag.parentNode);

// children[HTMLCollection] and childNodes[NodeList]
// childNodes reurns all nodes
// children reutrns only element
const mainId = document.getElementById("main-id");
console.log('Children', mainId.children);
console.log('Child nodes ', mainId.childNodes);

mainId.childNodes.forEach((node) => {
    console.log(node.data);
})
console.log(mainId.firstChild); // node
console.log(mainId.firstElementChild); // element

console.log(div.nextElementSibling);
console.log(div.nextSibling.nextSibling);

mainId.className = "secondary";
mainId.classList = "main-class hello";