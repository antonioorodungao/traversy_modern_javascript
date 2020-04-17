//Define UI Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
let tasks = [];

loadAllEventListener();

function loadAllEventListener() {
  window.addEventListener("DOMContentLoaded", loadTasks);
  form.addEventListener("submit", addTaskFromEvent);
  taskList.addEventListener("click", deleteTask);
  filter.addEventListener("keyup", filterTasks);
  clearBtn.addEventListener("click", clearTask);
}

function loadTasks() {
  console.log("loadTasks called");
  tasks =
    JSON.parse(localStorage.getItem("tasks")) !== null
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  tasks.forEach((task) => {
    addTask(task);
  });
}

function addTaskFromEvent(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Add a task");
  }
  let task = taskInput.value;
  addTask(task);
  storeTaskInLocalStorage(task);
}

function addTask(task) {
  let li = document.createElement("li");
  li.className = "collection-item";

  let closeBtn = document.createElement("a");
  closeBtn.href = "#";
  closeBtn.className = "delete-item secondary-content";
  closeBtn.innerHTML = "<i class='fa fa-remove'></i>";
  li.innerText = task;
  li.appendChild(closeBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

function storeTaskInLocalStorage(task) {
  tasks.push(task);
  updateTasksInLocalStorage();
}

function updateTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(e) {
  e.preventDefault();
  let a = e.target.parentElement;
  if (a.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      a.parentElement.remove();
      let removeValue = e.target.parentElement.parentElement.textContent;
      tasks.splice(tasks.indexOf(removeValue), 1);
      updateTasksInLocalStorage();
    }
  }
}

function clearTask(e) {
  e.preventDefault();
  taskList.innerHTML = "";
  console.log("clear task");
  tasks = [];
  updateTasksInLocalStorage();
}

function filterTasks(e) {
  let list = taskList.querySelectorAll(".collection-item");
  var filter = e.target.value;
  if (list.length > 0) {
    console.log("filter");
    list.forEach((x) => {
      var content = x.textContent;
      if (!content.toLowerCase().includes(filter)) {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    });
  }
}
