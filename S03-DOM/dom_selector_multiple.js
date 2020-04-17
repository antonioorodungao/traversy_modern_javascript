//document.getElementsByClassName  //returns HTML Collection

//selection by global scope
const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color = "red";

//reduced scop
//
const listItems = document
  .querySelector("html body div div")
  .getElementsByClassName("card-content");

console.log(listItems);

//document.getElementsByTagName - returns HTML Collection

const listItemsByTag = document.getElementsByTagName("li");
console.log(listItemsByTag);

//document.querySelectorAll - returns NodeItems

const liOdd = document.querySelectorAll(
  "ul.collection li.collection-item:nth-child(odd)"
);
const liEven = document.querySelectorAll(
  "ul.collection li.collection-item:nth-child(even)"
);
console.log(liOdd);
console.log(liEven);

liOdd.forEach((x, index) => {
  x.style.background = "darkgray";
});

liEven.forEach((x, index) => {
  x.style.background = "lightgray";
});
