//Event bubbling -- event bubbles up
//card-title => card-content => card => col
//task : check the event bubbling.

let cardTitle = document.querySelector(".card-title");
let cardContent = document.querySelector(".card-content");
let card = document.querySelector(".card");
let col = document.querySelector(".col");

// cardTitle.addEventListener("click", clickEventHandler);
// cardContent.addEventListener("click", clickEventHandler);
// card.addEventListener("click", clickEventHandler);
// col.addEventListener("click", clickEventHandler);

// function clickEventHandler(e) {
//   console.log(e.tar);
//   e.preventDefault();
// }

// function anotherClickEventHandler(e) {
//   console.log(`another event handler ${e.target}`);
// }

//Event Delegation -- useful for elements having same id. selector only adds event on the first element. add the event to the parent of the target
// and using the code to filter the event
//Task: add an delete event to delete-item button.

let taskListCard = document.querySelector(".card-action");

taskListCard.addEventListener("click", handleTaskDelete);

function handleTaskDelete(e) {
  e.preventDefault();
  console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("close is clicked");
    e.target.parentElement.parentElement.remove();
  }
}
