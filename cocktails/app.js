

/*
Add a query selector to button element
buttons event listener for a click
  On click retrieves value
*/

const button = document.querySelector('button')

button.addEventListener('click',()=>{
  const input = document.querySelector('input')
  const cocktailName = input.value
  /*Fecth request to the API endpoint returning cocktail info
    convert url to string literals*/
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
  .then(res => res.json()) // parse response as JSON
  //extract name, photo, and instructions
  .then(data => {
    const name = data.drinks[0].strDrink
    const photo = data.drinks[0].strDrinkThumb
    const instructions = data.drinks[0].strInstructions
    // update the DOM
    /*
    h2 updated with name, src of img updated with photo, h3 updated with instructions
    */
    const nameEl = document.querySelector('#name')
    nameEl.textContent = name
    const imgEl = document.querySelector('#photo')
    imgEl.src = photo
    const instructionsEl = document.querySelector('#instructions') 
    instructionsEl.textContent = instructions
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
})

/*
under the then data, declare different variables

*/

const thing = document.querySelector('#tag')
// fetch(some url with api)
//   .then(res => res.json())
//   .then(data => {
//     const someVariable = data.arr[i].strDrink
//   })