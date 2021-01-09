// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// EVENT LISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// FUNCTIONS
function addTodo(event) {
  // Prevent from submitting
  event.preventDefault();
  // Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //  Check mark button
  const doneButton = document.createElement("button");
  doneButton.innerHTML = '<i class="fas fa-check"></>';
  doneButton.classList.add("done-btn");
  todoDiv.appendChild(doneButton);
  //  Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append To list
  todoList.appendChild(todoDiv);
  // Clear todoInput value each time for new entry
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  // Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Addinng Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Checkmark
  if (item.classList[0] === "done-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
          todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
        case "uncompleted":
        if(!todo.classList.contains("completed")) {
            todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
