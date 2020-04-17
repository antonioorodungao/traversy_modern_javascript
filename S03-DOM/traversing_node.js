//getting the parent or child node.
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list.childNodes; //includes the new lines
val = list.childNodes[0].nodeType;

//get Children element nodes
val = list.children;
val = list.children[1];

val = list.children[3].children; //accessing children of children

val = list.firstChild; //first item all either text or element
val = list.firstElementChild; //first actual element

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

//get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;

//get Siblings
val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling;

val = listItem.previousSibling;
// val = listItem.previousElementSibling;
console.log(val);
