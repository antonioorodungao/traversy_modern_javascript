//ADDING ELEMENT

const li = document.createElement("li");

//Create class
li.className = "collection-item";

//add id
li.id = "new-item";

//add attribute
li.setAttribute("title", "New Item");

li.appendChild(document.createTextNode("Hello World"));

const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = "<i class='fa fa-remove'></i>";
li.append(link);

//append to ul
document.querySelector("ul").appendChild(li);

console.log(li);

//REPLACING ELEMENT
//create a new element
const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));

//get the old element
const oldHeading = document.getElementById("task-title");
document.querySelector(".card-action").replaceChild(newHeading, oldHeading);

console.log(newHeading);

//REMOVING ELEMENT
const ul_list = document.querySelector("ul");
const lis = document.querySelectorAll("li");
// ul_list.remove();
//ul_list.children[4].remove()
