/*Build a replica of the to-do-list pictured in the todolist.jpeg using HTML, CSS, and JS. Feel free to use the CSS framework Bootstrap as well, the getting started docs are here: https://getbootstrap.com/docs/5.2/getting-started/introduction/

* You will be working with Bootstrap during our immersive program so it's best to famililiarize yourself with it now.

Your to-do-list should be able to CRUD:
- Create a to-do (look into the form element, might help)
- Read a to-do
- Update a todo (have a strikethrough on completed to-do's)
- Delete a todo (a delete trash can button would be nice)
- Using an object to store each todo item in local storage

If you complete this to-do-list see if you can have your to-do's persist by placing them in local storage. This is meant to mimic what you will eventually do with a database.

**Avoid copying any of the to-do-list tutorials online, remember you need to escape tutorial hell if you hope to be a great dev**

*/
// Create an empty array to store the to-do items
let todos = []

// check if there are any to-do items in local storage, if so set todos array to that value
if (localStorage.getItem("todos")){
  todos = JSON.parse(localStorage.getItem("todos"))
}

// get references to the form and task list elements
const form = document.querySelector("form")
const tasklist = document.querySelector(".task-list")

// handle the form submit event
form.addEventListener("submit", function(e) {
  e.preventDefault()
  // get task input value
  const taskInput = document.querySelector("#task-input")
  const task = taskInput.value 
  // add the task to the todos array
  todos.push({task, completed: false})
  //save the todos array to local storage
  localStorage.setItem("todos", JSON.stringify(todos))
  //clear the task input value
  taskInput.value = ""
  //render the todo list
  render()
  }
)
//render the to-do list
function render() {
  //clear existing task list
  tasklist.innerHTML = ""
  //iterate over the todos array
  todos.forEach(function(todo, index){
    //create a new list item
    const taskItem = document.createElement("li")
    taskItem.classList.add("list-group-item")
    //add the task text
    taskItem.innerHTML = todo.task
    //add the "completed" class if the task is completed
    if (todo.completed){
      taskItem.classList.add("completed")
    }
    // create the "complete" button
    const completeBtn = document.createElement("button")
    completeBtn.classList.add("btn","btn-success","complete-btn")
    completeBtn.innerHTML = "Complete"
    completeBtn.addEventListener("click",function() {
      //mark task as completed
      todos[index].completed = true
      //save todos array to local storage
      localStorage.setItem("todos", JSON.stringify(todos))
      //render the todo list
      render()
    })

    //create the delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn", "btn-danger", "delete-btn")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener("click", function(){
      //remove the task for the todos array
      todos.splice(index,1)
      //save the todos array to local storage
      localStorage.setItem("todos", JSON.stringify(todos))
      //render todo list
      render()
    })
    //append buttons to the list item
    taskItem.appendChild(completeBtn)
    taskItem.appendChild(deleteBtn)
    //append the list item to the task list
    tasklist.appendChild(taskItem)
  })
}
// render initial todo list
render()



/* Old Code Below
//newtask, push, tasklist

//Set the initial voluMe of count in local storage whenpage loads
localStorage.setItem(count, input)
const getStr = localStorage.getItem('count')
console.log(getStr)

//create two buttons for adding and subtracting
const addBtn = document.querySelector('#add-btn')
const subtractBtn = document.querySelector('delete-btn')

//add event listeners for click events that go into functions
addBtn.addEventListener('click', addToList)
subtractBtn.addEventListener('click', deleteFromList)

function addToList(){
  // let botscore = localStorage.getItem('botscore')
  // botscore = parseInt(botscore)
  // botscore++
  localStorage.setItem('task', 'newCount')
  updateDOM()
}

function deleteFromList(){
  let botscore = localStorage.getItem('botscore')
  botscore = parseInt(botscore)
  botscore++
  localStorage.setItem('botscore', botscore)
  updateDOM()
}

// function that will get the bot score from local 
// storage and update the DOM with the current count
function updateDOM() {
  let botscore = localStorage.getItem('botscore')
  botscore = parseInt(botscore)
  const countEl = document.querySelector('h4')
  countEl.textContent = botscore
}
*/