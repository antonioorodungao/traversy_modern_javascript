//Selectors(single element, multiple element)
//document.getElementById()

console.log(document.getElementById("task-title"));

console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");
//Change Styling
taskTitle.style.background = "#444";
taskTitle.style.color = "#FFF";
taskTitle.style.padding = "5px";

//Change the content

taskTitle.textContent = "Task List";
taskTitle.innerText = "My Task"; //replace the text content
taskTitle.innerHTML = "<span style='color:red'>Task Red List</span>"; //replace the text content

//Query Selector. document.querySelector()
//select by anything, works like Jquery

console.log(document.querySelector("#task-title")); //can be the id
console.log(document.querySelector(".card-title")); //can be a class
console.log(document.querySelector("h5")); //can be a element name

document.querySelector("li").style.color = "red"; //only the first element will be changed.

document.querySelector("ul li").style.color = "blue";
document.querySelector("li:last-child").style.color = "pink"; //the last match
document.querySelector("li:nth-child(3)").style.color = "yellow"; //the third match
document.querySelector("li:nth-child(4)").textContent = "replaced content"; //change the text of the fourth element
document.querySelector("li:nth-child(odd)").textContent = "replaced content"; //only the first odd will be matched since it is a single element selector.
