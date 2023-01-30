Build a replica of the to-do-list pictured in the todolist.jpeg using HTML, CSS, and JS. Feel free to use the CSS framework Bootstrap as well, the getting started docs are here: https://getbootstrap.com/docs/5.2/getting-started/introduction/

* You will be working with Bootstrap during our immersive program so it's best to famililiarize yourself with it now.

Your to-do-list should be able to CRUD:
- Create a to-do (look into the form element, might help)
- Read a to-do
- Update a todo (have a strikethrough on completed to-do's)
- Delete a todo (a delete trash can button would be nice)
- Using an object to store each todo item in local storage

If you complete this to-do-list see if you can have your to-do's persist by placing them in local storage. This is meant to mimic what you will eventually do with a database.

**Avoid copying any of the to-do-list tutorials online, remember you need to escape tutorial hell if you hope to be a great dev**

JS File:
// Create an empty array to store the to-do items
let todos = [];

// Check if there are any to-do items in local storage, and if so, set the todos array to that value
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

// Get references to the form and task list elements
const form = document.querySelector("form");
const taskList = document.querySelector(".task-list");

// Handle the form submit event
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get the task input value
  const taskInput = document.querySelector("#task-input");
  const task = taskInput.value;

  // Add the task to the todos array
  todos.push({ task, completed: false });

  // Save the todos array to local storage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Clear the task input value
  taskInput.value = "";

  // Render the to-do list
  render();
});

// Render the to-do list
function render() {
  // Clear the existing task list
  taskList.innerHTML = "";

  // Iterate over the todos array
  todos.forEach(function(todo, index) {
    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");

    // Add the task text
    taskItem.innerHTML = todo.task;

    // Add the "completed" class if the task is completed
    if (todo.completed) {
      taskItem.classList.add("completed");
    }

    // Create the "complete" button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("btn", "btn-success", "complete-btn");
    completeBtn.innerHTML = "Complete";
    completeBtn.addEventListener("click", function() {
      // Mark the task as completed
      todos[index].completed = true;

      // Save the todos array to local storage
      localStorage.setItem("todos", JSON.stringify(todos));

      // Render the to-do list
      render();
    });

    // Create the "delete" button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "delete-btn");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function() {
      // Remove the task from the todos array
      todos.splice(index, 1);

      // Save the todos array to local storage
      localStorage.setItem("todos", JSON.stringify(todos));

      // Render the to-do list
      render();
    });

    // Append the buttons to the list item
    // Append the buttons to the list item
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(taskItem);
  });
}

// Render the initial to-do list
render();
