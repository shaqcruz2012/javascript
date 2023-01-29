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

//newtask, push, tasklist

/*Set the initial voluMe of count in local storage when
page loads*/
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