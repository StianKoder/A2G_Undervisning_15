 const nameElement = document.querySelector('#name')
 const ageElement = document.querySelector('#age')
 const heightElement = document.querySelector('#height')

 const submitButton = document.querySelector("#submit-button")

 function submit () {
    const name = nameElement.value
    const age = ageElement.value
    const height = heightElement.value

    if (name === "") {
        console.log("Ingen navn")
    } else if (age === "") {
        console.log("Ingen alder")
    } else if (height === "") {
        console.log("Ingen høyde")
    } else {
        console.log("Navnet er: " + name + " Alder er: " + age + " Høyden er: " + height)
    }
 }

function operators () {
    const name = nameElement.value
    const age = ageElement.value
    const height = heightElement.value


    if ((name === "Stina" && age > 17) || height > 190) {
        console.log("Betingelse oppfylt")
    } else {
        console.log("Betingelse ikke oppfylt")
    }

    // if (name === "Stina") {    
    // } else if (age == 25) {
    // } else if (age > 18) {
    // } else if (name === "Stian" && age > 18){
    // } else if (name === "Stian" || age > 18){
    // }
}

function attack () {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    const damage = randomNumber * 2

    if (randomNumber > 2) {
        console.log("Du gjorde " + damage + " skade")
    } else if (randomNumber === 2) {
        console.log("Du gjorde " + damage + " skade")
    } else { 
        console.log("Du gjorde " + damage + " skade")
    }
}

submitButton.addEventListener("click", attack)