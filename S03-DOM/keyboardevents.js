//get the form
let form = document.querySelector("#task-form");
let input = document.querySelector("#task");
let heading = document.querySelector("#task-title");
//get the task input
//add listener

//add event handler to form as submit
//add action to form
//add e.preventDefault
//
form.addEventListener("submit", formHandler);

function formHandler(e) {
  console.log(e.type);
  console.log(e);
  console.log(e.target.querySelector("#task").value);
  e.preventDefault();
}

//add "keydown" and "keyup" and "keypress" and "focus" and "blur" , "cut", "paste", 'input', 'change'(on drop boxes)
//input field events
// input.addEventListener("keydown", textInputHandler);
// input.addEventListener("keyup", textInputHandler);
input.addEventListener("focus", textInputHandler);
// input.addEventListener("blur", textInputHandler);
input.addEventListener("input", textInputHandler);

function textInputHandler(e) {
  console.log(e.type);
  console.log(e.target.value);
  heading.textContent = e.target.value;
  //use task heading to as output field from the text box

  //   e.preventDefault();
}
