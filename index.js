// Remember to import the data and Dog class!
import dogsData from "./data.js"
import Dog from "./Dog.js"

// const dogArray = ["Rex", "Bella", "Teddy"]

let isWaiting = false
let dogIdx = 0

function getNewDog() {
    if(dogIdx === dogsData.length) {
        dogIdx = 0
    }
    const nextDog = new Dog(dogsData[dogIdx])
    dogIdx++
    
    return nextDog
}


let dog = getNewDog()
document.getElementById("cross-btn").addEventListener("click", () => {
    if(!isWaiting) {
        dog.hasBeenSwiped = true
        render()
        
        isWaiting = true
        setTimeout(() => {
            dog = getNewDog()
            render()
            isWaiting = false
        }, 1500)
    }
    
})
document.getElementById("heart-btn").addEventListener("click", () => {
    if(!isWaiting) {
        dog.hasBeenLiked = true
        render()
        
        isWaiting = true
        setTimeout(() => {
            dog = getNewDog()
            render()
            isWaiting = false
        }, 1500)
    }
})

function render() {
    document.getElementById("profile-card").innerHTML = dog.getProfileCardHtml()
}
render()