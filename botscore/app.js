/*Set the initial voluMe of count in local storage when
page loads*/
localStorage.setItem('count', 1)
const getStr = localStorage.getItem('count')
console.log(getStr)

//create two buttons for adding and subtracting
const addBtn = document.querySelector('#add-btn')
const subtractBtn = document.querySelector('#subtract-btn')

//add event listeners for click events that go into functions
addBtn.addEventListener('click', addToBotScore)
subtractBtn.addEventListener('click', subtractFromBotScore)

//functions for adding and subtracting
//declares local function botscore , getsItem bot score from local storage
//parseInts from string to int
//increments
//updates localStorage through setItem
//updates DOM

function addToBotScore(){
    let botscore = localStorage.getItem('botscore')
    botscore = parseInt(botscore)
    botscore++
    localStorage.setItem('botscore', botscore)
    updateDOM()
}

function subtractFromBotScore() {
    let botscore = localStorage.getItem('botscore')
    botscore = parseInt(botscore)
    botscore--
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

//reset button sets botScore to 0
const resetBtn = document.querySelector('reset-btn')
resetBtn.addEventListener('click',resetScore)

function resetScore(){
    localStorage.setItem('botscore', 0)
    updateDOM()
}