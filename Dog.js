// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    like() {
        this.hasBeenLiked = !this.hasBeenLiked
    }
    
    swipe() {
        this.hasBeenSwiped = true    
    }
    
    getProfileCardHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        
        return `
            <img src="./${avatar}" alt="${name}" />
                
            <div class="dog-profile-info">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
            
            <div class="badge">
                ${hasBeenLiked ? 
                    `<img src="./images/badge-like.png" alt="badge-like" />` 
                    : hasBeenSwiped 
                        ? `<img src="./images/badge-nope.png" alt="badge-nope" />` 
                        : ""}
            </div>
        `
    }
}

export default Dog