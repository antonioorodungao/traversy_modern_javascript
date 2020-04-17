let taskForm = document.querySelector("#task-form");
let input = document.querySelector("#task");
taskForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log(input.value);
  //getStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  if (tasks !== null) {
    if (!tasks.includes(input.value)) tasks.push(input.value);
  } else {
    tasks = [];
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
