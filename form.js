// Variables
// inbuilt functions
// if else statements
// DOM 


// I will store the name and age in a variable
// I want to only store that information when I submit my form
// How do I access my form?
// const name
// const age

// eventListeners ->
// What is a document -> whole html file

// const heading = document.getElementById("demoH1")

// heading.addEventListener("mouseover", ()=>{
//     heading.style.color = "yellow"
//     heading.textContent  = "A mouse has hovered over me"
// })

// How will I have this information appear on my HTML

// Get information from a form
// Do something with that informatiom
// Display relevant information from what you have done


const form = document.getElementById("oldEnough")
const clear = document.getElementById("clear")
const resultDiv = document.getElementById("results")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    const name = document.getElementById("userName").value
    const age = Number(document.getElementById("age").value)

    const legality = legalityToDrive(name, age);

    console.log(legality)

    resultDiv.style.display = "block"
    resultDiv.innerHTML = `<p class="resultParagraph">${legality}</p>`

})

clear.addEventListener("click", ()=>{
    resultDiv.innerHTML=""
    resultDiv.style.display="none"
})


// It determines  if a user is old enough to drive or not
function legalityToDrive(name, age) {
    if (age >= 18) {
        // difference between return and console
        return name + " you are old enough to drive"
    } else {
        // string interpolation. Use backticks to be able to have variables and strings in one string message
        return `${name} you are too young to drive`
    }
}
