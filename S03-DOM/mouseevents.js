let clearBtn = document.querySelector(".clear-tasks");
let card = document.querySelector(".card");
let heading = document.querySelector("#task-title");
let body = document.querySelector("body");

//click
clearBtn.addEventListener("click", eventHandler);
//double click
clearBtn.addEventListener("dblclick", eventHandler);
//mousedown
clearBtn.addEventListener("mousedown", eventHandler);
//mouseEnter
clearBtn.addEventListener("mouseenter", eventHandler);
card.addEventListener("mouseleave", eventHandler);
//mouseover
clearBtn.addEventListener("mouseover", eventHandler);
card.addEventListener("mouseout", eventHandler);

function eventHandler(e) {
  console.log(e);
  console.log(e.type);
  heading.innerHTML = `<h5> Mouse X ${e.offsetX} Mouse Y ${e.offsetY}</h5>`;
  body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 60)`;

  e.preventDefault();
}
